client.once('ready', () => {
 console.log(`[BOT] Logined as ${client.user.tag}`);
 const msg = client.guilds.cache.get("602906543356379156").channels.cache.get("790208177568350208").lastMessage;
 if(msg.author.id==client.user.id){
  const embed2 = new Discord.MessageEmbed()
  .setTitle(`Failed to Pull!`)
  .setURL(message.embeds[0].url)
  .setDescription(`RDL is ready!\n**Version:** \`${res.stdout.replace("\n","")}\``)
  .setThumbnail("https://discord.rovelstars.com/assets/img/bot/loading.png")
  .setTimestamp()
  .setAuthor(message.embeds[0].author.name)
  .setColor("#57F287");
  msg.edit(embed);
 }
 activities_list = [
  "with all the bots on RDL",
  "with the members on RDL",
  "on discord.rovelstars.com",
  "and Coding!",
  "and Checking all Bots are fine or not",
  "Never gonna let you down!",
  "on https://discord.gg/953XCpHbKF",
  "and defeating top.gg!",
  "and wondering what's next?",
  "Among Us",
  "Minecraft",
  "Discord",
  "Rovel Discord List",
  "and fixing issues on RDL",
  "and checking emails on support@rovelstars.com"]
 setInterval(() => {
  const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
  client.user.setActivity(activities_list[index]);
 }, 10000);
});