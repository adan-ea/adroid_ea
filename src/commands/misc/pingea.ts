import {
  Client,
  CommandInteraction,
  EmbedBuilder,
  PermissionsBitField,
  SlashCommandBuilder,
  codeBlock
} from "discord.js";

module.exports = {
  data: new SlashCommandBuilder().setName("pingea").setDescription("Renvoie le ping du bot"),
  category: "utils",
  cooldown: 10,
  permissions: [PermissionsBitField.Flags.Administrator],
  usage: "pingea",
  examples: ["pingea"],

  async execute(client: Client, interaction: CommandInteraction) {
    const sentMessage = await interaction.reply({
      content: "Pong !",
      fetchReply: true,
      ephemeral: true
    });

    const botLantency = sentMessage.createdTimestamp - interaction.createdTimestamp;
    const embed = new EmbedBuilder()
      .setThumbnail(client.user!.displayAvatarURL())
      .setTitle("🏓 Pong !")
      .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
      .addFields([
        {
          name: "Latence bot",
          value: codeBlock("py", `${botLantency.toString()}ms`),
          inline: true
        },
        {
          name: "Latence api",
          value: codeBlock("py", `${client.ws.ping.toString()}ms`),
          inline: true
        }
      ])
      .setFooter({
        text: interaction.user.username,
        iconURL: interaction.user.displayAvatarURL()
      })
      .setTimestamp();
    interaction.editReply({ embeds: [embed] });
  }
};
