let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via DANA
╠➥ Ke nomer ini
║➥ 085794908894
║
╠═〘 Fitur 〙 ═
║
╠➥ *FITUR DOWNLOADER 500++
║     YouTube, Twitter, 
║     Tiktok, Instagram, dll.
║   *FITUR STIKER*
╠➥ *FITUR ADMIN*
║   *KICK ORANG*
║   *JADIIN ADMIN*
╠➥ *FITUR ISLAM*
║   *QURAN*
║   *CEK JADWAL SHALAT*
╠➥ *INTERNET*
║   *BRAINLY*
║   *GOOGLE*
╠➥ *DAN 200 LEBIH*
║   *FITUR LAINNYA*
║ 
╠═ ©2024 Kιɳα Bσƚ
╠═ Iky Official
╠═〘 ${namabot} 〙 ═`.trim(), m)
}

handler.command = /^viadana$/i

module.exports = handler
