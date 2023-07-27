import {
    ActionRowBuilder,
    ApplicationCommandOptionType,
    ButtonBuilder,
    ButtonStyle,
    ChatInputCommandInteraction,
    Client,
    EmbedBuilder,
    PermissionsBitField
} from 'discord.js';
import { Colors } from '../../../../utils/consts';
import CustomEventService from '../../services/customEventService';
import { IEvent } from '../../models';
import { addToAppropriateQueue } from '../../tasks/CustomEvents.queue';

const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
        .setCustomId('event_join_button')
        .setEmoji('👍')
        .setLabel('Rejoindre')
        .setStyle(ButtonStyle.Success),
    new ButtonBuilder()
        .setCustomId('event_manage_button')
        .setEmoji('⚙')
        .setLabel('Options')
        .setStyle(ButtonStyle.Secondary)
);

module.exports = {
    data: {
        name: 'event',
        description: 'Créer un évènement',
        options: [
            {
                name: 'titre',
                description: "Titre de l'évènement",
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: 'dateheure',
                description: "Date et heure de l'évènement (AAAA-MM-JJ HH:mm)",
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: 'description',
                description: "Description de l'évènement",
                type: ApplicationCommandOptionType.String,
                required: false
            },
            {
                name: 'imageurl',
                description: "URL de l'image (png|jpg|jpeg|gif|webp)",
                type: ApplicationCommandOptionType.String,
                required: false
            },
            {
                name: 'maxparticipants',
                description: "Nombre de participants max, les autres seront en file d'attente",
                type: ApplicationCommandOptionType.Number,
                required: false
            },
            {
                name: 'duree',
                description: "Durée de l'évènement",
                type: ApplicationCommandOptionType.String,
                required: false
            }
        ]
    },
    category: 'events',
    permissions: [PermissionsBitField.Flags.ManageEvents],
    usage: `event [titre][description][dateheure]<durée><maxparticipants><imageURL>
\`\`\`\`\`\`md
# Format de date valides
Conseillée :  
[YYYY-MM-DD HH:mm](ig: 2023-02-25 23:15)

Acceptées :  
[YYYY/MM/DD HH:mm](eg: 2023/02/25 23:15)
[MM/DD/YYYY HH:mm](eg: 02/25/2023 23:15)

> Les mois sont en anglais (raccourcis sur trois lettre passe aussi) !
[YYYY/month/DD HH:mm](eg: 2023 march 12 23:15)
[month/DD/YYYY HH:mm](eg: feb 12 2023 23:15)
[DD/month/YYYY HH:mm](eg: 12 april 2023 23:15)
\`\`\`\`\`\`
    `,
    examples: [
        'event Soirée jeu de rôle Ca va être incroyable 2023-02-28T20:00:00Z',
        'event Soirée jeu de rôle On va beaucoup rigoler ! 2023-02-28T20:00:00Z https://example.com/image.jpg 30min'
    ],

    async execute(client: Client, interaction: ChatInputCommandInteraction) {
        const date = new Date(interaction.options.getString('dateheure')!);
        const dateNow = new Date();
        if (date < dateNow)
            return interaction.reply({
                content: 'https://media.tenor.com/HheHJfLHhcIAAAAd/time-travel.gif',
                ephemeral: true
            });

        const title = interaction.options.getString('titre')!;
        const description = interaction.options.getString('description');

        const timestamp = Math.floor(date.getTime() / 1000);
        const maxParticipants = interaction.options.getNumber('maxparticipants');

        let imageURL = interaction.options.getString('imageurl');
        if (imageURL && !imageURL?.match(/https?:\/\/.+\.(?:png|jpg|jpeg|gif|webp)/gi))
            imageURL = null;

        const duration = interaction.options.getString('duree');

        const event: IEvent = {
            title,
            description,
            date,
            imageURL,
            maxParticipants,
            duration,
            participantsId: [],
            guildId: interaction.guildId!,
            channelId: interaction.channelId
        };

        const eventId = await CustomEventService.createEvent(event);
        const embed = new EmbedBuilder()
            .setTitle(title)
            .setDescription(description)
            .addFields([
                {
                    name: '**Date**',
                    value: `<t:${timestamp}:F> (<t:${timestamp}:R>)`
                }
            ])
            .setFooter({ text: `${eventId}` })
            .setColor(Colors.random)
            .setTimestamp();

        if (duration) {
            embed.addFields([{ name: '**Durée**', value: `${duration}` }]);
        }

        if (imageURL) {
            embed.setImage(imageURL);
        }

        if (maxParticipants) {
            embed.addFields({
                name: `Participants (0/${maxParticipants})`,
                value: '> Aucun participant'
            });
        } else {
            embed.addFields({
                name: `Participants (0)`,
                value: '> Aucun participant'
            });
        }
        addToAppropriateQueue(eventId, event);

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });
    }
};
