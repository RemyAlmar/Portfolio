import * as tools from './tools.js';
import * as toolsHtml from './tools_creationHTMLElement.js';

// let content = document.getElementById('content');
const mainPage = tools.CreateMainPage(); 
const detailledCards = tools.CreateAllGameDetails();
const body = document.body;
body.replaceChildren(mainPage);

window.addEventListener('clickInfoBubble', (event) =>
{
    const projectIndex = event.detail.projectName;
    const projectName = event.detail.titleGame;
    history.pushState({ page: projectIndex }, projectIndex, `#${projectName}`);

    tools.FadeInAnimation(body, detailledCards[event.detail.projectName]);
});

window.addEventListener('backToMainPage', () =>
{
    history.pushState({ page: 'home' }, 'home', '#home');
    tools.FadeInAnimation(body, mainPage);
});

window.addEventListener('popstate', (event) => 
{
    const page = event.state ? event.state.page : 'home';  // Si aucun état trouvé, revenir à 'home'
    tools.FadeInAnimation(body, page === 'home' ? mainPage : detailledCards[page]);
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
