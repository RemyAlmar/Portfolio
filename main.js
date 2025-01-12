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

setTimeout(() => {
    PlaceBandOnGameCard('CardInfo');
    PlaceBandOnGameCard('TitleBand', 'VideoContainer');
}, 500);

window.onresize = () => {
    PlaceBandOnGameCard('CardInfo');
    PlaceBandOnGameCard('TitleBand', 'TitleBand', 'TitleBand');
};

function PlaceBandOnGameCard(elementToPlaceClassName, elemToGetHeightClassName = '', offsetElemClassName = '')
{
    let index = 0;
    let bands = document.getElementsByClassName(elementToPlaceClassName);
    for(let band of bands) {
            let elemToGetHeight = elemToGetHeightClassName == '' ? band : document.getElementsByClassName(elemToGetHeightClassName)[index];
            let offsetElem = offsetElemClassName == '' ? band.children[0] : document.getElementsByClassName(offsetElemClassName)[index];
        toolsHtml.SetElemTopByElem(band, elemToGetHeight, offsetElem);
        index++;
    };
} 
