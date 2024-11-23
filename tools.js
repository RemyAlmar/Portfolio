import * as data from './data.js';
//#region Fonction Utilitaire
export function CreateIcon(iconData, color = 'currentColor') {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', iconData.className);
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('data-prefix', 'fas');
    svg.setAttribute('role', 'img');
    svg.setAttribute('viewBox', '0 0 512 512');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', color);
    path.setAttribute('d', iconData.content);

    svg.appendChild(path);
    return svg;
}
export function CreateDiv(divData)
{
    const div = document.createElement('div');
    div.className = divData.className;
        divData.content.forEach(child => 
        {
            div.appendChild(child);
        });
    return div;
} 
export function CreateText(textData, textFormat)
{
    const text = document.createElement(`${textFormat}`);
    text.className = textData.className;
    text.textContent = textData.content;
    return text;
}
export function CreateSourceVideo(videoName, formatVideo = 'mp4', path = '.')
{
    const source = document.createElement('source');
    source.src = `${path}/${videoName}.${formatVideo}`;
    source.type = `video/${formatVideo}`;
    return source;
}
export function CreateVideo(videoName, path = '.', autoplay = true, muted = true, loop = true, playsInline = true)
{
    const video = document.createElement('video');
    video.autoplay = autoplay;
    video.muted = muted;
    video.loop = loop;
    video.playsInline = playsInline;

    const sourceMp4 = CreateSourceVideo(videoName, 'mp4', path);
    const sourceWebm = CreateSourceVideo(videoName, 'webm', path);

    video.appendChild(sourceMp4);
    video.appendChild(sourceWebm);
    const fallBackText = document.createTextNode(`Your browser doesn't support HTML5 video.`);
    video.appendChild(fallBackText);
    return video;
}
export function CreateDivIconText(iconData, iconColor, _data, textFormat, divClassName, reverseOrder = false)
{    
    const toolsIcon = CreateIcon(iconData, iconColor);
    const toolsData = new data.Data("", _data);
    const toolsText = CreateText(toolsData, textFormat);
    let childToolsSize = [toolsIcon, toolsText];
    if(reverseOrder)
    {
        childToolsSize = childToolsSize.reverse();
    }

    const divToolsSizeData = new data.Data(divClassName, childToolsSize);
    const divToolsSize = CreateDiv(divToolsSizeData);
    return divToolsSize;
}
//#endregion

export function CreateCard(_data)
{  
    /*
    const chevronIcon = CreateIcon(data.chevronIconData);
    const titleData = new data.Data("TitleGame", _data.titleGame);
    const titleGame = CreateText(titleData, 'h3');
    titleGame.setAttribute('colorGame', _data.color);
    const childPTD = [titleGame, chevronIcon];*/
    const divTitle = CreateDivIconText(data.chevronIconData, _data.color, _data.titleGame, 'h3', "ProjectTitleContainer", true);
    const childPTD = [divTitle];
    const projectTitleData = new data.Data("ProjectTitleContainer", childPTD);
    const divProjectTitle = CreateDiv(projectTitleData);

    const divTools = CreateDivIconText(data.toolsIconData, _data.color, _data.device, 'p', "IconContainer");
    const divTime = CreateDivIconText(data.timeIconData, _data.color, _data.productionTime, 'p', "IconContainer"); 
    const divTeam = CreateDivIconText(data.teamIconData, _data.color, _data.teamMate, 'p', "IconContainer"); 
    const childDivIcon = [divTeam, divTime, divTools];
    const divIconData = new data.Data("IconsContainer", childDivIcon);
    const divIcon = CreateDiv(divIconData)

    const roleData = new data.Data("", _data.selfRole);
    const role = CreateText(roleData, 'p');
    const textDesData = new data.Data("", _data.description);
    const textDescription = CreateText(textDesData, 'p');
    const childDesDiv = [divIcon, role, textDescription];
    const divDescriptionData = new data.Data("DescriptionContainer", childDesDiv);
    const divDescription = CreateDiv(divDescriptionData);
    
    const childInfo = [divProjectTitle, divDescription];
    const cardInfoData = new data.Data("CardInfo", childInfo);
    const divCardInfo = CreateDiv(cardInfoData);
    const video = CreateVideo(_data.videoSrc);
    
    const videoDivChilds = [video, divCardInfo];
    const videoDivData = new data.Data("GameCard", videoDivChilds);
    const videoDiv = CreateDiv(videoDivData);
    return videoDiv;
}


//svg-inline--fa fa-users icon  nomClasse User Icon