let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
  
let handler = async (m, { conn }) => {
let caption = `*Hi*\n*Saya Kιɳα Bσƚ*\n*Pilih Menu Di Bawah Yaa 🙃*\n*Spam = Banned*\n*Telp = Blok*\n\n*Join Group WhatsApp*\nhttps://chat.whatsapp.com/GbNiwLK3R9y4pOUFDW5eAQ\n\n*Untuk Melihat Menu Bot Ketik .menu*`.trim()
conn.send3Button(m.chat, caption, `Powered By Baileys\nCreated Kιɳα Bσƚ By Iky Official\n`.trim(), '🧾MENU', '.?', '🍭Owner Kιɳα Bσƚ', '.owner', '📖Info Bot', '.infobot', m)
}

handler.command = /^(hel)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = false

handler.fail = null
handler.exp = 20

module.exports = handler