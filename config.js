const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94783524563"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'LK'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94783524563' 
global.devs = '94783524563';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+94783524563
global.THUMB_IMAGE = process.env.THUMB_IMAGE || ''
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURYb0RoVGFQQkp4U2c3ZGZ1aG1JeEpmQkQrdENrSDJDWVMvaE5wSlRIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicm5JR2dPbFhncnJQVWZCQUtoemVJN0lyNFkvYXN3MG85cWFaRW51TWZETT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTC9Ia1ZQL3FncUdvWUFvWlZHdURKMk9TVHpPWE0vbC9RYlZkU1V2aDE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4VkNMU1Zud2F3bkFiaHVoWjhwZG1xV0FTSlcwVkZlTVhHUlNRNklwQW1JPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjREWHJHOGxDc2dTRlZhRGZnQldiR0R6aFZTU0N2alkvVndpLzI1aTdqbFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBKamRtZlk4ODlScGxrbVVuMjFoeldVQjJRalhBemZFa0R3R0p1U2R5Qnc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUGQxK0x2b09acGdsVk1oWllIOUV5ZWFGTGtFM2gvUFNPVlZ6VnYvZ1FKVC9iajY3RW5iTlBuSVpqQXl0ZmJjL2FWcW82WitMcUF3dEJydExjZytpdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIyLCJhZHZTZWNyZXRLZXkiOiJSamZZMU9HczA5OUVCQ0RVbVUvZUdZM3BGOEMva1NoZGVFdVoveDNBUjZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsZ2JEdlFqUlJQV0ZGaHU3Z0NRaF9RIiwicGhvbmVJZCI6IjE2NWM2YzI4LWUzNmMtNDRhMy1hYzdiLTc3MTg5MGZmOTY3NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1SnBFVGVzL1djZEp0YTB1NGpGQkJYL0ZySWs9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5WdVZ5M1IyVUdKVTlBWExRSUcwQ1BuQWtVQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lyODBJRUJFSnJscGFjR0dBUT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia2k5Nnl3MTF3T1lZSnNSSytrVEtPemdpbFEyaDRyQ0Vva3ZYbjcvSHJWMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNlNNUlZTNGFscHhXUUF5ZVJ0UU05QnI3M21LYmsyVVZsRkI0YTAxdmtoWi8zc25NMjJJSHB2Z3FRSjVjN2hyZ092dHVxdnBXRis4M1dpamw5dmc5QXc9PSIsImRldmljZVNpZ25hdHVyZSI6IlJxUjlmTitnWFBmRnpvWWV1MXFseFB3bEkxRE5IRVdxLzgrYmZzRGVOd0J0RGNDajBWaWZONWRWSmJObGYwU1hqa2lidU9JQmE1Qkc2ODBCb2tDSWlnPT0ifSwibWUiOnsiaWQiOiI5NDc4MzUyNDU2MzoxNUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4MzUyNDU2MzoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaSXZlc3NOZGNEbUdDYkVTdnBFeWpzNElwVU5vZUt3aEtKTDE1Ky94NjFkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjkzMDIwODI5fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'XLICON BOT',
  packname:  process.env.PACK_NAME || 'MADE BY Dinuwa',
  
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Dinuwa001' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
