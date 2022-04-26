//require the necessary discord.js classes
const { Client, Intents, Interaction } = require("discord.js");
const { token } = require("./config.json");

// create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// when the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("ready");
});

// Login to Dsicord with your clients token
client.login(token);

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "server") {
    await interaction.reply(
      `Server name: ${interaction.guilld.name}\nTotal members: ${interaction.guild.memberCount}`
    );
  } else if (commandName === "user") {
    await interaction.reply(
      `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
    );
  }
});

client.on("message", gotMessage);

function gotMessage(msg) {
  if (msg.content === "deez nuts") {
    msg.reply("got em");
  }
}
