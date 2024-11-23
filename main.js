import * as tools from './tools.js';
import * as data from './data.js';

const container = document.getElementById('project');
// Génération et ajout des cartes
data.cardsData.forEach(_data => {
    const jobCard = tools.CreateCard(_data);
    container.appendChild(jobCard);
});
