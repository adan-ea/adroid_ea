import { ActivityType, Client, Events } from "discord.js";
import Logger from "../../utils/logger";
import { deleteCMD } from "../../delete-commands";
import { devConfig } from "../../../devconfig";
import { regCMD } from "../../deploy-commands";

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client: Client) {
    Logger.client(`🚀 Bot ${client.user?.tag} up and running !`);
    client.user?.setPresence({
      activities: [
        { name: "adan_ea sur twitch !", type: ActivityType.Watching }
      ],
      status: "dnd"
    });
    if (devConfig.registerCmd === true) {
      deleteCMD(client.user?.id!);
      regCMD(client.user?.id!);
    }
  }
};
