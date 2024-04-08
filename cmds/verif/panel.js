module.exports = {
    name: 'sendverif',
    description: "Envoie la verif.",
    category: "mod",
    usage: 'ticket',
    go: async (client, db, config, interaction, args) => {
        try {
            const isOwner = db.get(`Owner_${interaction.guild.id}-${interaction.user.id}`) || config.owners.includes(interaction.user.id) || interaction.user.id === interaction.guild.ownerId;
            if (!isOwner) {
                return interaction.reply({
                    content: `\`❌\` *Vous n'avez pas les permissions pour exécuter cette commande*`,
                    ephemeral: true
                });
            }

            await interaction.deferReply();

            const row = client.row().addComponents(
                client.menu()
                    .setCustomId('select')
                    .setPlaceholder('Appuis ici pour continuer la verification.')
                    .addOptions([
                        {
                            label: '🤝 | Verifie toi',
                            description: 'Clique ici pour être verifié.',
                            value: 'verifie',
                        }
                    ])
            );
            await interaction.editReply({
                embeds: [{
                    title: 'Verification',
                    description: 'Clique sur le menu déroulant ci-dessous pour être verifié.',
                    color: 0x2E3136,
                    footer: { text: 'Par Salah' }
                }],
                components: [row]
            });

        } catch (error) {
            console.error('Une erreur est survenue lors de l\'exécution de la commande ticket :', error);
        }
    }
};
