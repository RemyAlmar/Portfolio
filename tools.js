import * as data from './data.js';
export class Data
{    
    constructor(className = "", content)
    {
        this.className = className; // Classe CSS pour le SVG
        this.content = content;
    }
}
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
    if(div.content)
    {
        divData.content.forEach(child => {
            div.appendChild(child);
        });
    }
    return div;
} 
export function CreateText(textData)
{
    const text = document.createElement('p');
    text.className = textData.className;
    text.textContent = textData.content;
    return text;
}
export function CreateTitle(titleData)
{
    const title = document.createElement(titleData.content);
    title.className = titleData.className;
    return title;
}
export function CreateSourceVideo(videoName, formatVideo = 'mp4', path = '.')
{
    const source = document.createElement('source');
    source.src = `${path}/${videoName}.${formatVideo}`;
    source.type = `${videoName}/${formatVideo}`;
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

export function CreateCard(data)
{    
    // TODO continuer à ajouter les enfants de main.js
    const videoAddInfoDivData = new Data("video-additional-info");
    const videoAddInfoDiv = CreateDiv(videoAddInfoDivData);
    
    const video = CreateVideo(data.videoName);

    const videoDivChilds = [video, videoAddInfoDiv];
    const videoDivData = new Data("job-card-video", videoDivChilds);
    const videoDiv = CreateDiv(videoDivData);

    const mainDivChilds = [videoDiv];
    const mainDivData = new Data("job-card", mainDivChilds); 
    const mainDiv = CreateDiv(mainDivData);

    return mainDiv;
}


//svg-inline--fa fa-users icon  nomClasse User Icon