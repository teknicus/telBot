//const functions = require('firebase-functions');
// Bot Father Key : 1349588995:AAEuyESdauu_QWgpH4crHzUg74ljiE8MXsk
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const Telegraf = require('telegraf');
const functions = require('firebase-functions');

const bot = new Telegraf("1349588995:AAEuyESdauu_QWgpH4crHzUg74ljiE8MXsk"); //functions.config().telegrambot.key
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.hears('Who made you?', (ctx) => ctx.reply('https://www.ThomasRob.in'));
bot.launch();

exports.bot = functions.https.onRequest((req, res) => {
  bot.handleUpdate(req.body, res);
})