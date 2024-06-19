import { ButtonBuilder, ButtonInteraction, ButtonStyle, GuildMember } from 'discord.js';
import {
    isMemberVoiceOwner,
    isVoicePrivate,
    switchVoicePrivacy
} from '../../../../utils/voice.util';
import { CustomErrors } from '../../../../utils/errors';
import { IGuild } from 'adroi.d.ea';
import { getorCreateUserSettings } from '../../../../utils/modules.uil';

export const voicePrivacyBtn = new ButtonBuilder()
    .setCustomId('voicePrivacyBtn')
    .setEmoji('🔐')
    .setStyle(ButtonStyle.Secondary);

export default {
    data: {
        name: `voicePrivacyBtn`
    },
    cooldown: 300,
    async execute(interaction: ButtonInteraction, guildSettings: IGuild) {
        getorCreateUserSettings(interaction.member as GuildMember, guildSettings);
        const member = interaction.member as GuildMember;
        const voiceChannel = member.voice.channel;

        if (!voiceChannel || !isMemberVoiceOwner(member.id, voiceChannel.id))
            throw CustomErrors.NotVoiceOwnerError;

        await interaction.deferReply({ ephemeral: true });

        switchVoicePrivacy(member, guildSettings.modules.tempVoice.nameModel);
        let isPrivate: boolean = isVoicePrivate(voiceChannel.id);
        await interaction.editReply({
            content: `Le salon est maintenant ${isPrivate ? 'privé' : 'public'}.`
        });
    }
};
