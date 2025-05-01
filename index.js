const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require("discord.js"); //Amine#9092
const client = new Discord.Client();
const db = require("pro.db"); //Amine#9092

let owner = "1047263063721660496"; //اي دي حقك
let sv = '1207792576657367060'//اايدي سرفرك
let prefix = db.get("prefix") || "$"; ///برفكس

client.on("ready", () => {
  //Amine#9092
  var fs = require('fs');
setInterval(() => {
      fs.readFile('json.sqlite', 'utf8', function(err, contents) {
});
    }, 10000)
     client.guilds.cache.forEach(g => {
      if(g.id !== sv) g.leave()
    })
  console.log(`Logged in as ${client.user.tag}!`);
});

///https://discord.gg/JDHp5nPM6Z
///https://www.youtube.com/channel/UCAVB8JOSy_y3qoR7bIsiAYg/videos
///Amine#9092
///Rà3d#0088
client.on('guildCreate', guild => {
  if(guild.id !== sv) return guild.leave()
    })



client.on("message", async message => {
  //Amine#9092
  let prefixx = "s";
  const args = message.content
    .slice(prefixx.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();
  if (message.content.startsWith(prefixx + "etprefix")) {
    if (!owner.includes(message.author.id)) return;
    if (!args[0])
      return message.channel.send(
        db.get("prefix") || `> **The Server Prefix is : \`${prefix}\``
      );
    db.set("prefix", args[0]);
    message.channel.send(
      `> **Done Setting the new Prefix To : \`${db.get("prefix")}\``
    );
  }
});

///https://discord.gg/JDHp5nPM6Z
///https://www.youtube.com/channel/UCAVB8JOSy_y3qoR7bIsiAYg/videos
///Amine#9092
///Rà3d#0088

client.on("message", async message => {
  const args = message.content  .slice(prefix.length) .trim() .split(/ +/);
  const command = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix) || message.author.bot) return; //Amine#9092
  let hi = args.join(" ");
  if (command === "status") {
    if (!owner.includes(message.author.id)) return; //Amine#9092
    if (!args[0])  return message.channel.send(
        new Discord.MessageEmbed() //Amine#9092
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}status \`TYPE\`\n\n \`\`\`TYPE = [ open : لفتح المتجر \n close : لغلق المتجر ]\`\`\``
          )
          .setFooter(
            `Developed by : Amine , Ra3d`,
            `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Status Command")
      );
    if (args[0] === "open") {
      message.channel.send("> **✅ تم فتح المتجر بنجاح !**");
      db.set("status", args[0]);
    }
    if (args[0] === "close") {
      db.delete("status");
      message.channel.send("> **✅ تم قفل المتجر بنجاح !**");
    }
  }
  ///https://discord.gg/JDHp5nPM6Z
  ///https://www.youtube.com/channel/UCAVB8JOSy_y3qoR7bIsiAYg/videos
  ///Amine#9092
  ///Rà3d#0088

  if (command === "setprice-netflix") {
    if (!owner.includes(message.author.id)) return;
    if (message.channel.type === "dm") return;
    let tax = Math.floor(args[0] * (20 / 19) + 1);
    if (!tax)
      return message.channel.send(
        new Discord.MessageEmbed() //Amine#9092
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}setprice-netflix \`PRICE\`\n\n \`\`\`PRICE = [ ادخل سعر الحساب ]\`\`\``
          )
          .setFooter(
            `Developed by : Amine , Ra3d`,
            `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Setprice Netflix Command")
      );
    db.set("price", args[0]);
    db.set("price1", tax);
    message.channel.send("> **✅ تم تحديد سعر حسابات النت فلكس بنجاح !**");
  }
  ///https://discord.gg/JDHp5nPM6Z
  ///https://www.youtube.com/channel/UCAVB8JOSy_y3qoR7bIsiAYg/videos
  ///Amine#9092
  ///Rà3d#0088

  if (command === "setprice-fulldata") {
    if (!owner.includes(message.author.id)) return;
    if (message.channel.type === "dm") return;
    let tax = Math.floor(args[0] * (20 / 19) + 1);
    if (!tax)
      return message.channel.send(
        new Discord.MessageEmbed() //Amine#9092
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}setprice-fulldata \`PRICE\`\n\n \`\`\`PRICE = [ ادخل سعر الحساب ]\`\`\``
          )
          .setFooter(
            `Developed by : Amine , Ra3d`,
            `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Setprice Fulldata Command")
      );
    db.set("price2", args[0]);
    db.set("price3", tax);
    message.channel.send("> **✅ تم تحديد سعر حسابات الفل داتا بنجاح !**");
  }
  ///https://discord.gg/JDHp5nPM6Z
  ///https://www.youtube.com/channel/UCAVB8JOSy_y3qoR7bIsiAYg/videos
  ///Amine#9092
  ///Rà3d#0088

  if (command === "add-netflix") {
    //Amine#9092
    if (!owner.includes(message.author.id)) return; //Amine#9092
    if (!args[0])
      return message.channel.send(
        new Discord.MessageEmbed() //Amine#9092
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}add-netflix \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Amine , Ra3d`,
            `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Add Netflix Accounts Command")
      );
    if (!message.content.includes(":"))
      return message.channel.send(
        new Discord.MessageEmbed() //Amine#9092
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}add-netflix \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Amine , Ra3d`,
            `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Add Netflix Accounts Command")
      );
    if (!db.has("account1")) {
      db.set("account1", []);
    } //Amine#9092
    db.push("account1", hi); //Amine#9092
    message.channel.send("> **✅ تم اضافه حساب النت فلكس بنجاح !**");
  }
  ///https://discord.gg/JDHp5nPM6Z
  ///https://www.youtube.com/channel/UCAVB8JOSy_y3qoR7bIsiAYg/videos
  ///Amine#9092
  ///Rà3d#0088

  if (command === "delete-netflix") {
    if (!owner.includes(message.author.id)) return;
    db.delete("account1");
    message.channel.send("> **✅ تم حذف جميع حسابات النت فلكس بنجاح !**");
  }
  if (command === "delete-fulldata") {
    if (!owner.includes(message.author.id)) return;
    db.delete("account2");
    message.channel.send("> **✅ تم حذف جميع حسابات الفل داتا بنجاح !**");
  }
  ///https://discord.gg/JDHp5nPM6Z
///https://www.youtube.com/channel/UCAVB8JOSy_y3qoR7bIsiAYg/videos
///Amine#9092
///Rà3d#0088


  if (command === "buy") {
    const cooldown = new Set();
    //Amine#9092
    let price1 = await db.get("price");
    let price2 = await db.get("price1");
    let price3 = db.get("price3");
    let price4 = db.get("price2");
    let probotid = db.get("probot") || "282859044593598464";
    let role = db.get("role");
    if (message.channel.type === "dm") return;
    if (db.has("u", message.author.id))
      return message.channel.send("you are blacklisted!");
    if (!db.has("status")) return message.channel.send("المتجر مقفل.");
    if (cooldown.has(message.author.id)) {
            message.channel.send("Wait 1 minute before buy again. " + "<@" + message.author.id + ">");
    } else {
    let buys = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setTitle(`اهلا , ${message.author.username}`)
      .addField(
        `> Netflix Account`,
        `لشراء حساب نت فلكس برجاء الضغط على ايموجي " 📺 "`,
        true
      )
      .addField(
        `> Fulldata Account`,
        `لشراء حساب فل داتا برجاء الضغط على ايموجي " 🎮 "`,
        true
      )
      .addField(
        `> Cancel Command`,
        `لالغاء امر الشراء برجاء الضغط على ايموجي " ❌ "`,
        true
      )
      .setFooter(
        `Developed by : Amine , Ra3d`,
        `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
      );
    message.channel.send(buys).then(msg => {
      msg.react("📺");
      msg.react("🎮");
      msg.react("❌");
      let prizeembed = new Discord.MessageEmbed()
        .setTitle("Purchasing Netflix Accounts")
        .setDescription(
          `للحصول على الحساب برجاء تحويل : ${price2} ، الى : <@${owner}> عن طريق الامر التالي :
                \`\`\`#credit <@${owner}> ${price2}\`\`\``
        )
        .setFooter(
          `Developed by : Amine , Ra3d`,
          `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
        )
        .setTimestamp()
        .addField(
          `> ملاحظه`,
          `لديك 30 ثانيه للتحويل والحصول على الحساب \n برجاء التاكد ان خاصك مفتوح حتى يصلك الحساب !!`
        );
      const filter1 = (reaction, user) => {
        return (
          ["📺", "🎮", "❌"].includes(reaction.emoji.name) &&
          user.id === message.author.id
        );
      };
      msg
        .awaitReactions(filter1, { max: 1, time: 60000 * 4, errors: ["time"] })
        .then(collected => {
          const reaction = collected.first();
          if (reaction.emoji.name === "📺") {
            msg.delete();
            const account1 = db.get("account1"); //Amine#9092
            if (!account1 || !account1[0])
              return message.channel.send(
                `> **:x: لا يوجد حسابات في المخزن ! **`
              ); //Amine#9092
            if (!price1 || !price2)
              return message.channel.send(
                `> **:x: برجاء تحديد سعر حسابات النت فلكس**`
              );

            const filter = response =>
              response.content.startsWith(
                `**:moneybag: | ${message.author.username}, has transferred `
              ) &&
              response.content.includes(`${owner}`) &&
              response.author.id === probotid &&
              response.content.includes(Number(price1));

            message.channel
              .send(prizeembed)
              .then(s => {
                const f = r =>
                  message.author.id === r.author.id &&
                  r.content.includes(Number(price2));

                s.channel
                  .awaitMessages(f, {
                    max: 1,
                    time: 30 * 1000,
                    errors: ["time"]
                  })
                  .then(fs => {
                    message.channel
                      .send("> **برجاء كتابه رقم التاكيد لاستلام الحساب !**")
                      .then(m => {
                        m.channel
                          .awaitMessages(filter, {
                            max: 1,
                            time: 30 * 1000,
                            errors: ["time"]
                          })
                          .then(mochakislang => {
                            const acc =
                              account1[
                                Math.floor(Math.random() * account1.length)
                              ];

                            if (db.has("role")) {
                              message.member.roles.add(role);
                            }

                            message.channel.send(
                              `> **${message.author}، برجاء التوجه الى الخاص !**`
                            );

                            let ch = db.get("ch");

                            if (db.has("ch")) {
                              client.channels.cache
                                .get(ch)
                                .send(
                                  `${message.author.tag} قام بشراء حساب نت فلكس \n معلومات الحساب : \`\`\`${acc}\`\`\``
                                );
                            }

                            message.author
                              .send(
                                `> **لقد قمت بشراء حساب نت فلكس !** \n\`الحساب مكتوب على هيئه : [ EMAIL:PASS ]\`\n\nالحساب :\n||${acc}||`
                              )
                              .then(() => {
                                const filtered = account1.filter(
                                  accs => accs !== acc
                                );
                                db.set("account1", filtered); //Amine#9092
                              })
                              .catch(() =>
                                message.reply(
                                  "> **:x: لم اتمكن من ارسال الحسابات في خاصك !**"
                                )
                              );
                          });
                      });
                  });
              })
              .catch(collected => {
                return message.channel.send(
                  "> **:x: لقد انتهى وقت العمليه !**"
                );
              });
          }
        })
        .catch(collected => {
          return msg.channel.send("> **:x: لقد انتهى وقت العمليه !**");
        });
      msg
        .awaitReactions(filter1, { max: 1, time: 60000, errors: ["time"] })
        .then(collected => {
          const reaction = collected.first();

          if (reaction.emoji.name === "🎮") {
            msg.delete();
            const account2 = db.get("account2"); //Amine#9092
            if (!account2 || !account2[0])
              return message.channel.send(
                `> **:x: لا يوجد حسابات في المخزن ! **`
              );
            if (!price3 || !price4)
              return message.channel.send(
                `> **:x: برجاء تحديد سعر حسابات الفل داتا**`
              );

            let prizeembed = new Discord.MessageEmbed()
              .setTitle("Purchasing Fulldata Accounts")
              .setDescription(
                `للحصول على الحساب برجاء تحويل : ${price3} ، الى : <@${owner}> عن طريق الامر التالي :
                            \`\`\`#credit <@${owner}> ${price3}\`\`\``
              )
              .setFooter(
                `Developed by : Amine , Ra3d`,
                `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
              )
              .setTimestamp()
              .addField(
                `> ملاحظه`,
                `لديك 30 ثانيه للتحويل والحصول على الحساب \n برجاء التاكد ان خاصك مفتوح حتى يصلك الحساب !!`
              );

            const filter3 = response =>
              response.content.startsWith(
                `**:moneybag: | ${message.author.username}, has transferred `
              ) &&
              response.content.includes(`${owner}`) &&
              response.author.id === probotid &&
              response.content.includes(Number(price4));

            message.channel.send(prizeembed).then(s => {
              //Amine#9092

              const fr = r =>
                message.author.id === r.author.id &&
                r.content.includes(Number(price3));

              s.channel
                .awaitMessages(fr, {
                  max: 1,
                  time: 30 * 1000,
                  errors: ["time"]
                })
                .then(fs => {
                  message.channel
                    .send("> **برجاء كتابه رقم التاكيد لاستلام الحساب !**")
                    .then(m => {
                      m.channel
                        .awaitMessages(filter3, {
                          max: 1,
                          time: 30 * 1000,
                          errors: ["time"]
                        })
                        .then(mochakislang => {
                          const acc =
                            account2[
                              Math.floor(Math.random() * account2.length)
                            ];

                          if (db.has("role")) {
                            message.member.roles.add(role);
                          }

                          m.channel.send(
                            `> **${message.author}، برجاء التوجه الى الخاص !**`
                          );

                          let ch = db.get("ch");

                          if (db.has("ch")) {
                            client.channels.cache
                              .get(ch)
                              .send(
                                `${message.author.tag} has bought a full data account.\n information: \`\`\`${acc}\`\`\``
                              );
                          }

                          message.author
                            .send(
                              `> **لقد قمت بشراء حساب نت فلكس !** \n\`الحساب مكتوب على هيئه : [ EMAIL:PASS ]\`\n\nالحساب :\n||${acc}||`
                            )
                            .then(() => {
                              const filtered = account2.filter(
                                accs => accs !== acc
                              );

                              db.set("account2", filtered); //Amine#9092
                            })
                            .catch(() =>
                              message.reply(
                                "> **:x: لم اتمكن من ارسال الحسابات في خاصك !**"
                              )
                            );
                        })
                        .catch(collected => {
                          return message.channel.send(
                            "> **:x: لقد انتهى وقت العمليه !**"
                          );
                        });
                    });
                });
            });
          }
          if (reaction.emoji.name === "❌") {
            msg.delete();
            message.delete();
            message.channel.send(
              `> **${message.author} تم الغاء الامر بنجاح !**`
            );
          }
        })
        .catch(collected => {
          return message.channel.send("> **:x: لقد انتهى وقت العمليه !**");
        });
    });
    cooldown.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          cooldown.delete(message.author.id);
        }, 60000);
    }
  }
  if (command === "setlog") {
    if (message.channel.type === "dm") return;
    if (!owner.includes(message.author.id) && !db.has(message.author.id))
      return;
    let ch =
      message.guild.channels.cache.find(ch =>
        ch.name.toLocaleLowerCase().includes(args[0])
      ) || message.guild.channels.cache.find(ch => ch.id === args[0]);
    if (!ch) return message.channel.send("> **برجاء تحديد روم بشكل صحيح **");
    db.set("ch", ch.id);
    message.channel.send("> **✅ تم تحديد روم اللوق بنجاح !**");
  }
  if (command === "add-user") {
    if (message.channel.type === "dm") return;
    if (!owner.includes(message.author.id)) return;
    let user =
      message.mentions.users.first() ||
      message.guild.members.cache.find(u => u.id === args[0]);
    let member = message.guild.member(user);
    if (!member)
      return message.channel.send("> **برجاء تحديد العضو بشكل صحيح **");
    db.set(`${member.user.id}`, message.guild.id);
    message.channel.send(`> **✅ تم اضافه : ${member.user.tag} كادمن !**`);
  }
  if (command === "ping") {
    message.channel.send(
      `🏓Latency is ${Date.now() -
        message.createdTimestamp}ms. API Latency is ${Math.round(
        client.ws.ping
      )}ms`
    );
  }
  if (command === "remove-user") {
    if (message.channel.type === "dm") return;
    if (!owner.includes(message.author.id)) return;
    let user =
      message.mentions.users.first() ||
      message.guild.members.cache.find(u => u.id === args[0]);
    let member = message.guild.member(user);
    if (!member)
      return message.channel.send("> **برجاء تحديد العضو بشكل صحيح **");
    db.delete(`${member.user.id}`);
    message.channel.send(
      `> **✅ تم ازاله : ${member.user.tag} من قائمه الادمنز !**`
    );
  }
  if (command === "setprobot") {
    if (!owner.includes(message.author.id)) return;
    if (message.channel.type === "dm") return;
    if (!args[0])
      return message.channel.send("> **برجاء تحديد اي دي بروبوت بشكل صحيح **");
    db.set("probot", args[0]);
    message.channel.send("> **✅ تم تحديد بوت البروبوت بنجاح !**");
  }
  if (command === "setcustomerrole") {
    let custommer =
      message.guild.roles.cache.find(r =>
        r.name.toLocaleLowerCase().includes(args[0])
      ) || message.guild.roles.cache.find(r => r.id === args[0]);
    if (!custommer)
      return message.channel.send("> **برجاء تحديد رول العميل بشكل صحيح **");
    db.set("role", custommer.id);
    message.channel.send("> **✅ تم تحديد رول العميل بنجاح !**");
  }
  if (command === "stock") {
    if (message.channel.type === "dm") return;
    if (!db.has("account2")) {
      db.set("account2", []);
    }
    if (!db.has("account1")) {
      db.set("account1", []);
    }
    var stock = db.get("account1").length || 0;
    var stock2 = db.get("account2").length || 0;
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .addField(
          `Fulldata`,
          `
            > \`${stock2}\` : عدد الحسابات 
            > \`${prefix}buy\` : لشراء حساب برجاء كتابه الامر الاتي 
            `
        )
        .addField(
          `Netflix`,
          `
            > \`${stock}\` : عدد الحسابات 
            > \`${prefix}buy\` : لشراء حساب برجاء كتابه الامر الاتي 
            `
        )
        .setFooter(
          `Developed by : Amine , Ra3d`,
          `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
        )
        .setTimestamp()
    );
  }

  if (command === "remove-netflix") {
    //Amine#9092
    if (!owner.includes(message.author.id) && !db.has(message.author.id))
      return;
    if (message.channel.type === "dm") return;
    if (!args[0])
      return message.channel.send(
        new Discord.MessageEmbed() //Amine#9092
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}remove-netflix \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Amine , Ra3d`,
            `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Remove Netflix Account Command")
      ); //Amine#9092
    const account = db.get("account1"); //Amine#9092
    if (!account || !account[0])
      return message.channel.send(`> **:x: لا يوجد حسابات في المخزن ! **`); //Amine#9092
    if (!message.content.includes(":"))
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`> usage : ${prefix}remove-netflix [adress:email]`)
      ); //Amine#9092
    const filtered = account.filter(accs => accs !== args[0]);
    db.set("account1", filtered); //Amine#9092
    message.channel.send("> **✅ تم ازاله الحساب بنجاح !**");
  } //Amine#9092
  if (command === "display-netflix") {
    //Amine#9092
    if (message.channel.type === "dm") return; //Amine#9092
    if (!owner.includes(message.author.id)) return; //Amine#9092
    const accounts = db.get("account1");
    const text =
      accounts && accounts[0]
        ? accounts.join("\n")
        : "> **:x: لا يوجد حسابات في المخزن ! **!"; //Amine#9092
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTitle("جميع حسابات النت فلكس :")
        .setDescription(`\`\`\`${text}\`\`\``)
        .setFooter(
          `Developed by : Amine , Ra3d`,
          `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
        )
        .setTimestamp()
    );
  }
  if (command === "restart") {
    if (!owner.includes(message.author.id)) return; //Amine#9092
    message.channel
      .send(`جاري عمل الريستارت ..`)
      .then(() => client.destroy())
      .then(() => {
        client.login(process.env.token);
        message.channel.send("> **✅ تم اعاده تشغيل البوت بنجاح !**");
      });
  }
  if (command === "help") {
    if (message.channel.type === "dm") return; //Amine#9092
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTitle(`About ${client.user.username}`)
        .addField(`General`, `\`ping\`, \`info\`, \`buy\`, \`stock\` `)
        .setDescription(
          `The available commands for ${client.user.username} is \`27\`\n Developers : <@623641797448433674> - <@776951974138216473>`
        )
        .addField(
          `Administrator`,
          `\`setprefix\`, \`blacklist\`, \`unblacklist\`, \`resetblacklist\`, \`setcustomerrole\`, \`setprobot\`, \`setprice-netflix\`, \`setprice-fulldata\`,
             \`add-user\`, \`remove-user\`, \`add-fulldata\`, \`remove-fulldata\`, \`add-netflix\`,
             \`remove-netflix\`, \`display-fulldata\`, \`display-netflix\`, \`setlog\`,
             \`delete-fulldata\`, \`delete-netflix\`, \`status\`, \`setname\`, \`setavatar\``
        )
        .setFooter(
          `Developed by : Amine , Ra3d`,
          `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
        )
        .setTimestamp()
        .addField(
          `Links`,
          `[Ra3d's Studio](https://discord.gg/Gw72qQQWPn)\n[Youtube Tutorial](https://www.youtube.com/channel/UCAVB8JOSy_y3qoR7bIsiAYg)`
        )
    );
  }
});
///https://discord.gg/JDHp5nPM6Z
///https://www.youtube.com/channel/UCAVB8JOSy_y3qoR7bIsiAYg/videos
///Amine#9092
///Rà3d#0088

client.on("message", async message => {
  //Amine#9092
  if (!message.content.startsWith(prefix) || message.author.bot) return; //Amine#9092
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();
  let hi = args.join(" ");
  if (command === "add-fulldata") {
    //Amine#9092
     if (!owner.includes(message.author.id)) return; //Amine#9092
    if (!args[0])
      return message.channel.send(
        new Discord.MessageEmbed() //Amine#9092
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}add-fulldata \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Amine , Ra3d`,
            `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Add Fulldata Accounts Command")
      );
    if (!message.content.includes(":"))
      return message.channel.send(
        new Discord.MessageEmbed() //Amine#9092
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}add-fulldata \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Amine , Ra3d`,
            `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Add Fulldata Accounts Command")
      );
    if (!db.has("account2")) {
      db.set("account2", []);
    } //Amine#9092
    db.push("account2", hi); //Amine#9092
    message.channel.send("> **✅ تم اضافه حسابات الفل داتا بنجاح !**");
  }
  if (command === "remove-fulldata") {
    //Amine#9092
    if (!owner.includes(message.author.id) && !db.has(message.author.id))
      return; //Amine#9092
    if (message.channel.type === "dm") return;
    if (!args[0])
      return message.channel.send(
        new Discord.MessageEmbed() //Amine#9092
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}remove-fulldata \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Amine , Ra3d`,
            `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Remove Fulldata Accounts Command")
      ); //Amine#9092
    const account = db.get("account2"); //Amine#9092
    if (!account || !account[0])
      return message.channel.send(`> **:x: لا يوجد حسابات في المخزن ! **`);
    if (!message.content.includes(":"))
      return message.channel.send(
        new Discord.MessageEmbed() //Amine#9092
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}remove-fulldata \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Amine , Ra3d`,
            `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Remove Fulldata Accounts Command")
      ); //Amine#9092
    const filtered = account.filter(accs => accs !== args[0]);
    db.set("account2", filtered); //Amine#9092
    message.channel.send("> **✅ تم ازاله الحساب بنجاح !**");
  }
  if (command === "display-fulldata") {
    if (message.channel.type === "dm") return;
    if (!owner.includes(message.author.id)) return;
    const accounts = db.get("account2");
    const text =
      accounts && accounts[0]
        ? accounts.join("\n")
        : "> **:x: لا يوجد حسابات في المخزن ! **"; //Amine#9092
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTitle("جميع حسابات الفل داتا :")
        .setDescription(`\`\`\`${text}\`\`\``)
        .setFooter(
          `Developed by : Amine , Ra3d`,
          `https://cdn.discordapp.com/icons/744592615592296539/9611fcdda6f1f6cd5470dbc02ba0af64.png?size=1024`
        )
        .setTimestamp()
    );
  }
});
///https://discord.gg/JDHp5nPM6Z
///https://www.youtube.com/channel/UCAVB8JOSy_y3qoR7bIsiAYg/videos
///Amine#9092
///Rà3d#0088

client.on("message", async message => {
  let prefix = await db.get("prefix");
  if (message.content.startsWith(prefix + "setname")) {
    let args = message.content.split(" ");
    let botnameee = args.slice(1).join(" ");
    if (!owner.includes(message.author.id))
      return message.channel.send(`** :x: Only Owners Can Use this Command **`);
    if (!botnameee)
      return message.channel.send(
        `** :x: Please Provide me a name for the bot !**`
      );
    client.user.setUsername(`${botnameee}`);
    message.channel.send(`Changing The bot's Name ...`).then(me => {
      me.edit(` Done !`);
    });
  }
  if (message.content.startsWith(prefix + "setavatar")) {
    let args = message.content.split(" ");
    let botnameee = args.slice(1).join(" ");
    if (!owner.includes(message.author.id))
      return message.channel.send(`** :x: Only Owners Can Use this Command **`);
    if (!botnameee)
      return message.channel.send(
        `** :x: Please Provide me an avatar for the bot !**`
      );
    client.user.setAvatar(`${botnameee}`);
    message.channel.send(`Changing The bot's Avatar ...`).then(me => {
      me.edit(` Done !`);
    });
  }
});
///https://discord.gg/JDHp5nPM6Z
///https://www.youtube.com/channel/UCAVB8JOSy_y3qoR7bIsiAYg/videos
///Amine#9092
///Rà3d#0088

client.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();
  let user =
    message.mentions.members.first() ||
    client.users.cache.find(u => u.id === args[0]);
  let member = message.guild.member(user);
  if (message.channel.type === "dm") return;
  if (command === "blacklist") {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!user)
      return message.channel.send("> **برجاء تحديد العضو بطريقه صحيحه**");
    if (db.has(`u`, member.id))
      return message.channel.send("> **:x: العضو موجود في القائمه بالفعل !**");
    db.set(`u`, member.id);
    message.channel.send("> **✅ تم اضافه العضو الى قائمه البلاك ليست !**");
  }
  if (command === "unblacklist") {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!user)
      return message.channel.send("> **برجاء تحديد العضو بطريقه صحيحه**");
    if (!db.has(`u`, member.id))
      return message.channel.send("> **:x: العضو غير موجود في القائمه !**");
    db.delete(`u`, member.id);
    message.channel.send("> **✅ تم ازاله البلاك ليست !**");
  }
  if (command === "resetblacklist") {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    db.delete("u");
    message.channel.send(
      "> **✅ تم ازاله جميع الاعضاء من قائمه البلاك ليست !**"
    );
  }
});

///https://discord.gg/JDHp5nPM6Z
///https://www.youtube.com/channel/UCAVB8JOSy_y3qoR7bIsiAYg/videos
///Amine#9092
///Rà3d#0088


client.login(process.env.token); ///التوكن تنحط في ملف .env
