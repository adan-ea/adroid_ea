import {
    AuditLogEvent,
    Client,
    EmbedBuilder,
    Events,
    GuildBan,
    GuildBasedChannel,
    userMention
} from 'discord.js';
import { Colors } from '../../../../utils/consts';
import { IAuditLogsModule } from 'adroi.d.ea';
import { Locales } from '../../../../locales/i18n-types';
import { addAuthor } from '../../../../utils/embedsUtil';
import { canSendMessage } from '../../../../utils/botUtil';
import guildService from '../../../../services/guild.service';
import { loadLL } from '../../../core/events/client/interactionCreate';

export default {
    name: Events.GuildBanRemove,
    async execute(client: Client, ban: GuildBan) {
        const fetchedLogs = await ban.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MemberBanRemove
        });

        const {
            locale: localeLL,
            modules: {
                auditLogs: { guildBanRemove }
            }
        } = await guildService.getOrCreateGuild(ban.guild);

        const logChannel = client.guilds.cache
            .get(ban.guild.id)
            ?.channels.cache.get(guildBanRemove.channelId);
        if (!logChannel?.isTextBased()) return;

        if (shouldIgnoreBanRemove(guildBanRemove, logChannel)) return;

        const LL = await loadLL((localeLL as Locales) ?? 'en');
        const locale = LL.modules.auditLogs.events.guildBanRemove;

        const embed = new EmbedBuilder()
            .setThumbnail(ban.user.avatarURL())
            .setTitle(locale.embed.title())
            .addFields({
                name: locale.embed.fields.target(),
                value: userMention(ban.user.id),
                inline: true
            })
            .setFooter({
                text: `${ban.user.username} (${ban.user.id})`,
                iconURL: ban.user.avatarURL()!
            })
            .setTimestamp()
            .setColor(Colors.random);

        const executor = fetchedLogs.entries.first()?.executor;
        if (executor) {
            addAuthor(embed, executor);
            embed.addFields([
                { name: '\u200B', value: '\u200B', inline: true },
                {
                    name: locale.embed.fields.executor(),
                    value: userMention(executor.id),
                    inline: true
                }
            ]);
        }
        if (ban.reason)
            embed.addFields({
                name: locale.embed.fields.reason(),
                value: ban.reason,
                inline: false
            });

        await logChannel.send({ embeds: [embed] });
    }
};

const shouldIgnoreBanRemove = (
    guildBanRemove: IAuditLogsModule['guildBanRemove'],
    logChannel: GuildBasedChannel | undefined
) => !guildBanRemove.enabled || guildBanRemove.channelId === '' || !canSendMessage(logChannel);
