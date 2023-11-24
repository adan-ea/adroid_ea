import { ButtonBuilder, ButtonInteraction, ButtonStyle } from 'discord.js';
import { IGuild } from '../../../../models';
import { getorCreateUserSettings } from '../../../../utils/modulesUil';
import { voiceWhitelistAddRow } from '../selectMenus';

export const voiceWhitelistAddBtn = new ButtonBuilder()
    .setCustomId('voiceWhitelistAddBtn')
    .setEmoji('📗')
    .setStyle(ButtonStyle.Secondary);

export default {
    data: {
        name: `voiceWhitelistAddBtn`
    },
    async execute(interaction: ButtonInteraction, guildSettings: IGuild) {
        getorCreateUserSettings(interaction.user.id, guildSettings);
        return interaction.reply({
            components: [voiceWhitelistAddRow],
            ephemeral: true
        });
    }
};
