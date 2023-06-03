import { Client, EmbedBuilder, Events, Message, TextChannel } from "discord.js";
import { IGuild } from "../../models";
import { ModuleNotEnabledError } from "../../utils/errors";
import { OWNER_ID } from "../../utils/memberUtil";
import guildService from "../../services/guildService";

module.exports = {
  name: Events.MessageUpdate,
  async execute(client: Client, oldMessage: Message, newMessage: Message) {
    let guildSettings: IGuild | null = await guildService.getGuildById(newMessage.guildId!);
    if (!guildSettings) {
      guildSettings = await guildService.createGuild(newMessage.guildId!);
    }

    if (
      !guildSettings.modules.notifications.enabled &&
      !guildSettings.modules.notifications.privateLogs.enabled
    )
      throw ModuleNotEnabledError;

    const moduleSettings = guildSettings.modules.notifications.privateLogs;
    const registeredLogChannel = moduleSettings.privateLogChannel;

    if (!registeredLogChannel) {
      return;
    }

    const oldText = oldMessage.content || "";
    const newText = newMessage.content || "";

    const logChannel = client.channels.cache.get(registeredLogChannel);

    const notLoggedChannels = moduleSettings.notLoggedChannels;
    const isMessageUpdated = oldText !== null && newText !== null && oldText !== newText;
    if (isMessageUpdated && !notLoggedChannels?.includes(newMessage.channelId) && logChannel) {
      if (!newMessage.author.bot && newMessage.author.id !== OWNER_ID) {
        const embed = new EmbedBuilder()
          .setAuthor({
            name: `${newMessage.author.username} (${newMessage.author.id})`,
            iconURL: newMessage.author.avatarURL()!
          })
          .setDescription(
            `Message edité dans <#${oldMessage.channelId}>, [voir le message](${oldMessage.url})`
          )
          .addFields([
            {
              name: `Ancien message :`,
              value: oldText,
              inline: false
            },
            {
              name: `Nouveau message :`,
              value: newText,
              inline: false
            }
          ])
          .setFooter({ text: `Message modifié.` })
          .setColor([45, 249, 250])
          .setTimestamp();
        await (logChannel as TextChannel).send({ embeds: [embed] });
      }
    }
  }
};
