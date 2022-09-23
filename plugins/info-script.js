import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://chat.whatsapp.com/GOdtUKyFn04ECxqqOrFf4G*

Pengen mentahan nya? 
masuk grup official bot
https://chat.whatsapp.com/GOdtUKyFn04ECxqqOrFf4G

Mau Yang No Error Script Bot nya, chat owner :
wa.me/6289516947204

Pengen yang udah di recode oleh owner?
Script bot ini dijual bila kalian mau bisa chat owner

wa.me/6289516947204`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://chat.whatsapp.com/GOdtUKyFn04ECxqqOrFf4G",
    mediaType: "VIDEO",
    description: "https://chat.whatsapp.com/GOdtUKyFn04ECxqqOrFf4G", 
    title: '𝙍𝘾𝙏𝙄-V2 MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
