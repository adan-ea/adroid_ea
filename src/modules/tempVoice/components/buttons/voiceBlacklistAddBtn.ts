import { ButtonBuilder, ButtonInteraction, ButtonStyle, GuildMember } from 'discord.js';
import { IGuild } from 'adroi.d.ea';
import { getorCreateUserSettings } from '../../../../utils/modulesUil';
import { voiceBlacklistAddRow } from '../selectMenus';

export const voiceBlacklistAddBtn = new ButtonBuilder()
    .setCustomId('voiceBlacklistAddBtn')
    .setEmoji('📕')
    .setStyle(ButtonStyle.Secondary);

export default {
    data: {
        name: `voiceBlacklistAddBtn`
    },
    async execute(interaction: ButtonInteraction, guildSettings: IGuild) {
        getorCreateUserSettings(interaction.member as GuildMember, guildSettings);

        return interaction.reply({
            components: [voiceBlacklistAddRow],
            ephemeral: true
        });
    }
};
