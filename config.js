module.exports = {
TOKEN: "TOKEN",
ownerID: ["987289941451108352"], //write your discord user id. example: ["id"] or ["id1","id2"]
botInvite: "https://discord.com/api/oauth2/authorize?client_id=1072813975491850280&permissions=8&scope=bot%20applications.commands", //write your discord bot invite.
supportServer: "https://discord.gg/X3A5vZhk4g", //write your discord bot support server invite.
mongodbURL: "mongodb+srv://rlx:rlx@rlx2.yulr9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", //write your mongodb url.
status: 'Server help',
commandsDir: './commands', //Please don't touch
language: "fr", //en, tr, nl, pt, fr, ar, zh_TW, it
embedColor: "ffa954", //hex color code
errorLog: "1069606152771485696", //write your discord error log channel id.


sponsor: {
status: true, //true or false
url: "https://awmbilisim.com", //write your discord sponsor url.
},

voteManager: { //optional
status: false, //true or false
api_key: "", //write your top.gg api key. 
vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
vote_url: "", //write your top.gg vote url.
},

shardManager:{
shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
},

playlistSettings:{
maxPlaylist: 10, //max playlist count
maxMusic: 75, //max music count
},

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}
