import * as data from './data.js';
//#region Fonction Utilitaire
export function CreateIcon(iconData) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', iconData.className);
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('data-prefix', 'fas');
    svg.setAttribute('role', 'img');
    svg.setAttribute('viewBox', '0 0 512 512');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'currentColor');
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
//#endregion

export function CreateCard(_data)
{  
    const roleData = new data.Data("", _data.selfRole);
    const role = CreateText(roleData, 'small');
    const textDesData = new data.Data("", _data.description);
    const textDescription = CreateText(textDesData, 'p');
    const childDesDiv = [role, textDescription];
    const descriptionDivData = new data.Data("project-description", childDesDiv);
    const descriptionDiv = CreateDiv(descriptionDivData);

    const toolsIcon = CreateIcon(data.toolsIconData);
    const toolsData = new data.Data("", _data.device);
    const toolsText = CreateText(toolsData, 'p');
    const childToolsSize = [toolsIcon, toolsText];
    const divToolsSizeData = new data.Data("tools-size icon-container", childToolsSize);
    const divToolsSize = CreateDiv(divToolsSizeData);

    const timeIcon = CreateIcon(data.timeIconData);
    const timeData = new data.Data("", _data.productionTime);
    const timeText = CreateText(timeData, 'p');
    const childTimeSize = [timeIcon, timeText];
    const divTimeSizeData = new data.Data("time-size icon-container", childTimeSize);
    const divTimeSize = CreateDiv(divTimeSizeData);

    const teamIcon = CreateIcon(data.teamIconData);
    const teamData = new data.Data("", _data.teamMate);
    const teamText = CreateText(teamData, 'p');
    const childTeamSize = [teamIcon, teamText];
    const divTeamSizeData = new data.Data("team-size icon-container", childTeamSize);
    const divTeamSize = CreateDiv(divTeamSizeData);
    // TODO continuer à ajouter les enfants de main.js

    const chevronIcon = CreateIcon(data.chevronIconData);
    const titleData = new data.Data("clickable-card-header", _data.titleGame);
    const titleGame = CreateText(titleData, 'h3');
    titleGame.appendChild(chevronIcon);

    const childPTD = [titleGame];
    const projectTitleData = new data.Data("project-Title", childPTD);
    const projectTitle = CreateDiv(projectTitleData);
    // TODO continuer à ajouter les enfants de main.js
    
    const childInfo = [projectTitle, divTeamSize, divTimeSize, divToolsSize];
    const videoAddInfoDivData = new data.Data("video-additional-info", childInfo);
    const videoAddInfoDiv = CreateDiv(videoAddInfoDivData);
    const video = CreateVideo(_data.videoSrc);
    
    const videoDivChilds = [video, videoAddInfoDiv];
    const videoDivData = new data.Data("job-card-video", videoDivChilds);
    const videoDiv = CreateDiv(videoDivData);
    
    const mainDivChilds = [videoDiv, descriptionDiv];
    const mainDivData = new data.Data("job-card", mainDivChilds); 
    const mainDiv = CreateDiv(mainDivData);

    return mainDiv;
}


//svg-inline--fa fa-users icon  nomClasse User Icon