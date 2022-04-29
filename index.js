//require the necessary discord.js classes
const { Client, Intents, Interaction } = require("discord.js");
const {
  token,
  channel_id,
  sisha_sound_url,
  guildId,
} = require("./config.json");
const { joinVoiceChannel } = require("@discordjs/voice");
const ytdl = require("ytdl-core");

// create a new client instance
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

// when the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("bot is live");
});

// client.on("ready", () => {
//   joinVoiceChannel({
//     channelId: channel_id,
//     guildId: guildId,
//     adapterCreator: client.guild.voiceAdapterCreator,
//   }).then((connection) => {
//     console.log("joined voice channel");
//     play(connection);
//   });
// });

// function play(connection) {
//   const stream = ytdl(sisha_sound_url);
//   const dispatcher = connection.play(stream);
//   dispatcher.on("finish", () => {
//     play(connection);
//   });
// }

client.on("message", gotMessage);

function gotMessage(msg) {
  if (msg.channel.id == "967921143476523051" && msg.content === "deez nuts") {
    msg.reply("got em");
  }
  // console.log(msg);
}

//discord.js and client declaration
client.on("message", (message) => {
  console.log(message.guild.channels.cache.get(channel_id));

  // if (message.content === "!join") {
  //   const connection = joinVoiceChannel({
  //     channelId: channel_id,
  //     guildId: guildId,
  //     adapterCreator: voice_channel.guild.voiceAdapterCreator,
  //   });
  // }
});

// Login to Dsicord with your clients token
client.login(token);
