import * as tools from './tools.js';
import { GetHeightElem } from './tools_creationHTMLElement.js';

let container = document.getElementById('content');
const divMain = tools.DisplayMainPage();
const detailledCards = tools.CreateAllGameDetails();
container.appendChild(divMain);
let bands = document.getElementsByClassName('CardInfo');
for(let band of bands) {
    console.log(GetHeightElem(band));
};
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
