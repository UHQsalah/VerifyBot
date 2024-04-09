module.exports = {
    name: 'setverifrole',
    description: 'Définir le rôle pour la verification.',
    options: [{
        name: 'role',
        description: "Le rôle à définir pour la verification.",
        type: 8,
        required: true
    }],
    go: async (client, db, config, interaction, args) => {
        try {
            if (!db.get(`Owner_${interaction.guild.id}-${interaction.user.id}`) && !config.owners.includes(interaction.user.id) && interaction.user.id !== interaction.guild.ownerId) {
                return interaction.reply({ content: `\`❌\` *Vous n'avez pas les permissions pour exécuter cette commande*`, ephemeral: true });
            }

            const role = interaction.options.getRole('role');

            


            db.set(`verifrole_${interaction.guild.id}`, role.id);

            interaction.reply({
                content: `Le rôle pour la verifaction a été défini sur ${role}.`,
                ephemeral: true
            });
        } catch (error) {
            console.error('Une erreur est survenue lors de l\'exécution de la commande /setverifrole :', error);
            interaction.reply({
                content: 'Une erreur est survenue lors du traitement de votre commande.',
                ephemeral: true
            });
        }
    },
};