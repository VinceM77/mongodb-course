export async function addCitation(interaction, db) {
    const citationText = interaction.options.getString("citation");
    const collection = db.collection("citations");
    await collection.insertOne({
        text: citationText
    });
    interaction.reply("Citation enregistrée");
}