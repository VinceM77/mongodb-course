console.log("It works!")

import {GatewayIntentBits, Client,REST,Routes} from "discord.js";
import dotenv from "dotenv";
import {registerCommands} from "./register-commands.js";
import { citationCommand } from "./commands/citations.js";
import { connectToDatabase } from "./database_connection.js";


dotenv.config({
    path: ".env"
});

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const DATABASE_URL = process.env.DATABASE_URL;


async function init(){
    await registerCommands(TOKEN,CLIENT_ID);
    const db = await connectToDatabase(DATABASE_URL)

    const client = new Client({
        intents : [GatewayIntentBits.Guilds],
    })

    client.on("interactionCreate", async (interaction) => {
        console.log(
            interaction.commandName, 
            // l'argument citation passé à la commande
            interaction.options.getString("citation")
        );
        if (interaction.commandName === "citation") {
            citationCommand(interaction, db);
        }
        if (interaction.commandName === "add_citation"){
            const citationText = interaction.options.getString("citation");
            const collection = db.collection("citations");
            await collection.insertOne({
                text : citationText
            })
            interaction.reply("Citation bien notée") 
        }
        if (interaction.commandName === "clear_citations") {
            await db.collection("citations").deleteMany();
            interaction.reply("Collection supprimée !");
        }
        if (interaction.commandName === "clear_citation") {
            const searchPhrase = interaction.options.getString("search_phrase");

            const deleted = await db.collection("citations").deleteMany({
                searchPhrase : {
                    $regex: searchPhrase
                }
            });
            interaction.reply("Elements supprimés : " + deleted.deletedCount);
        }
    })

    await client.login(TOKEN);
    console.log("Bot activated")
};

init();