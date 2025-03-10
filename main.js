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

    tools.FadeOutAnimation(body, detailledCards[event.detail.projectName]);
});
window.addEventListener('backToMainPage', () =>
{
    history.pushState({ page: 'home' }, 'home', '#home');
    tools.FadeOutAnimation(body, mainPage);
    // window.history.back();
});
window.addEventListener('popstate', (event) => 
{
    const page = event.state ? event.state.page : 'home';  // Si aucun état trouvé, revenir à 'home'
    if (page === 'home') {
        // Si on revient à la page d'accueil, afficher mainPage
        tools.FadeOutAnimation(body, mainPage);
    } else {
        // Si on est sur une page de projet, afficher le projet correspondant
        if (detailledCards[page]) {
            tools.FadeOutAnimation(body, detailledCards[page]);  // Utilise le nom du projet comme clé
        } else {
            // Si le projet n'existe pas (erreur), on revient à l'accueil par défaut
            tools.FadeOutAnimation(body, mainPage);
        }
    }
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
