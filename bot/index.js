console.log("It works!")

import {GatewayIntentBits, Client,REST,Routes} from "discord.js";
import dotenv from "dotenv";

dotenv.config({
    path: ".env"
});

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;



const COMMANDS = [
    {
        name:"citation",
        description:"envoi une citation d'un philosophe connu ou inconnu",
    }

]

const rest = new REST({ version: '10' }).setToken(TOKEN);
await rest.put(Routes.applicationCommands(CLIENT_ID),{body: COMMANDS});

async function init(){
    const client = new Client({
        intents : [GatewayIntentBits.Guilds],
    })



    await client.login(TOKEN);
    console.log("Bot activated")
};

init();