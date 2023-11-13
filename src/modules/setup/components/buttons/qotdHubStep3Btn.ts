import { qotdHubButtons, qotdHubSaveBtn } from '.';
import { ButtonInteraction } from 'discord.js';
import { qotdStep3Modal } from '../modals/qotdStep3Modal';

export default {
    data: {
        name: 'qotdHubStep3Btn'
    },
    async execute(interaction: ButtonInteraction) {
        console.log('MODAL TIME');
        await interaction.showModal(qotdStep3Modal);
    }
};
