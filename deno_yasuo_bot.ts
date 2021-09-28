import { startBot } from "https://deno.land/x/discordeno/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const TOKEN = Deno.env.get('YASUO_TOKEN')

const yasuoArray = ['ヤスオ', 'やすお', 'Yasuo', 'yasuo', 'YASUO', 'ﾔｽｵ'];
const hasakiArray = ['▭ι═════════ﺤ HASAKI', 'HASAKI --|------------->:cloud_tornado:']

if (!TOKEN) {
  throw new Error(`No token: ${TOKEN}`);
}

startBot({
  token: TOKEN,
  intents: ["Guilds", "GuildMessages"],
  eventHandlers: {
    ready() {
      console.log("Successfully connected to gateway");
    },
    messageCreate(message) {
      yasuoArray.forEach(yasuo => {
          if(message.content.includes(yasuo)){
            message.reply(hasakiArray[Math.floor(Math.random() * hasakiArray.length)])
          }
      })
    },
  },
});
