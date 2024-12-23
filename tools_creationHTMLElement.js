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
    if(divData.content != null)
        divData.content.forEach(child => 
        {
            div.appendChild(child);
        });
    return div;
} 
export function CreateText(textData, textFormat, _color = 'currentColor')
{
    const text = document.createElement(`${textFormat}`);
    text.className = textData.className;
    text.textContent = textData.content;
    text.style.color = _color;
    return text;
}

export function CreateSourceImage(imageName, path = 'Pictures', _formatImg = 'png')
{
    const image = document.createElement('img');
    image.src = `${path}/${imageName}.${_formatImg}`;
    return image;
}
export function CreateSourceVideo(videoName, formatVideo = 'mp4', path = 'Video')
{
    const source = document.createElement('source');
    source.src = `${path}/${videoName}.${formatVideo}`;
    source.type = `video/${formatVideo}`;
    return source;
}
export function ResetVideoParam(video, autoplay = true, muted = true, loop = true, playsInline = true)
{    
    video.autoplay = autoplay;
    video.muted = muted;
    video.loop = loop;
    video.playsInline = playsInline;
}
export function CreateVideo(videoName, path = 'Video', autoplay = true, muted = true, loop = true, playsInline = true)
{
    const video = document.createElement('video');
    ResetVideoParam(video, autoplay, muted, loop, playsInline);
    window.addEventListener('animationend', () => {
        ResetVideoParam(video);  
        video.play(); 
    })

    const sourceMp4 = CreateSourceVideo(videoName, 'mp4', path);
    const sourceWebm = CreateSourceVideo(videoName, 'webm', path);


    video.appendChild(sourceMp4);
    video.appendChild(sourceWebm);
    const fallBackText = document.createTextNode(`Your browser doesn't support HTML5 video.`);
    video.appendChild(fallBackText);
    return video;
}
export function SetColorToClassElement(parent, _color, className ="none")
{
    let childs = parent.getElementsByClassName(className);
    Array.from(childs).forEach(child => {
       child.style.color =  _color;
    });
}
export function CreateDivIconText(iconData, iconColor, _data, textFormat, divClassName, textClassName = "none", reverseOrder = false)
{    
    const toolsIcon = CreateIcon(iconData, iconColor);
    const toolsData = new data.Data(textClassName, _data);
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
