module.exports = async (client, db, config, interaction) => {
        try {

            if (!interaction.isStringSelectMenu()) return;

            if (interaction.customId == "select") {

                if (interaction.values[0] == "verifie") {
                    const roles = interaction.guild.roles.cache;
                    const role = roles.get(`1177987296755191818`);
                    const member = interaction.member;
                    await member.roles.add(role);
                        interaction.reply({
                            content: `Tu es verifié`,
                            ephemeral: true
                        });

                } 
            }
        } catch (error) {
            console.error('Une erreur est survenue lors de l\'exécution de l\'événement interactionCreate :', error);
        }
    };
