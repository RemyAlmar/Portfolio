import * as tools from './tools.js';
import * as toolsHtml from './tools_creationHTMLElement.js';

let container = document.getElementById('content');
const divMain = tools.DisplayMainPage();
const detailledCards = tools.CreateAllGameDetails();
container.appendChild(divMain);

window.addEventListener('clickInfoBubble', (event) =>
{
    tools.FadeOutAnimation(container, detailledCards[event.detail.projectName]);
});
window.addEventListener('backToMainPage', () =>
{
    tools.FadeOutAnimation(container,divMain);
});

setTimeout(() => {
    PlaceBandOnGameCard('CardInfo');
}, 500);

window.onresize = () => {
    PlaceBandOnGameCard('CardInfo');
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
