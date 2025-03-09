import * as tools from './tools.js';
import * as toolsHtml from './tools_creationHTMLElement.js';

let container = document.getElementById('content');
const header = tools.CreateHeader(0);
const divMain = tools.DisplayMainPage();
const detailledCards = tools.CreateAllGameDetails();
container.appendChild(header);
container.appendChild(divMain);

window.addEventListener('clickInfoBubble', (event) =>
{
    tools.FadeOutAnimation(container, detailledCards[event.detail.projectName]);
});
window.addEventListener('backToMainPage', () =>
{
    tools.FadeOutAnimation(container,divMain);
});

// Une fois les videos chargées, fait le calcul pour placer la bande
const videos = document.getElementsByTagName('video');
Array.from(videos).forEach(video => {
    video.addEventListener('loadeddata', () => {
        PlaceBandOnGameCard('CardInfo', 'CardInfo', 'ProjectTitleContainer');
    });
});

window.onresize = () => {
    PlaceBandOnGameCard('CardInfo', 'CardInfo', 'ProjectTitleContainer');
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

toolsHtml.CopyText();
