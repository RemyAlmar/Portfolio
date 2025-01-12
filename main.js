import * as tools from './tools.js';
import * as toolsHtml from './tools_creationHTMLElement.js';

let container = document.getElementById('content');
const divMain = tools.DisplayMainPage();
const detailledCards = tools.CreateAllGameDetails();
container.appendChild(divMain);

window.addEventListener('clickInfoBubble', (event) =>
{
    //container.replaceChildren(detailledCards[event.detail.projectName]);
    tools.FadeOutAnimation(container, detailledCards[event.detail.projectName]);
});
window.addEventListener('backToMainPage', () =>
{
    console.log("Element supprimé");
    //container.replaceChildren(divMain)
    tools.FadeOutAnimation(container,divMain);
});
setTimeout(PlaceBandOnGameCard, 100);
PlaceBandOnGameCard();
window.onresize = () => {
    PlaceBandOnGameCard();
};

function PlaceBandOnGameCard()
{
    let gameCards = document.getElementsByClassName('GameCard');
    for(let gameCard of gameCards) {
        toolsHtml.SetElemTopByElem(gameCard.children[1], gameCard.children[1], gameCard.children[1].children[0]);
    };
} 
