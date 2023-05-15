import { GuildModel, IGuild } from "../models";

async function createGuild(id: string): Promise<IGuild> {
  const guild = new GuildModel({
    id,
    modules: {
      notifications: {
        enabled: false,
        publicLogs: {
          enabled: false,
          publicLogChannel: ""
        },
        privateLogs: {
          enabled: false,
          privateLogChannel: "",
          notLoggedChannels: []
        },
        twitchLive: {
          enabled: false,
          defaultProfilePicture: "",
          liveProfilePicture: "",
          streamerName: "adan_ea",
          infoLiveChannel: "",
          pingedRole: "",
          streamingRoleId: "",
          streamers: [
            {
              streamer: "",
              memberId: ""
            }
          ]
        }
      },
      temporaryVoice: {
        enabled: false,
        hostChannels: []
      },
      eventManagement: {
        enabled: false
      }
    }
  });
  await guild.save();
  return guild;
}

async function getGuildById(id: string): Promise<IGuild | null> {
  return await GuildModel.findOne({ id });
}

async function updateGuild(id: string): Promise<void> {
  /**
   * @TODO : implement this
   */
  console.log(id);
}

async function deleteGuild(guildId: string): Promise<void> {
  /**
   * @TODO : implement this
   */
  await GuildModel.findByIdAndDelete({ guildId });
}

const guildService = {
  createGuild,
  getGuildById,
  updateGuild,
  deleteGuild
};

export default guildService;
