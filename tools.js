export class IconData
{
    constructor(className, icon)
    {
        this.className = className;
        this.icon = icon;
    }
}

export function CreateIcon(iconData) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', iconData.className);
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('data-prefix', 'fas');
    svg.setAttribute('data-icon', 'users');
    svg.setAttribute('role', 'img');
    svg.setAttribute('viewBox', '0 0 512 512');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'currentColor');
    path.setAttribute('d', iconData.iconSvg);

    svg.appendChild(path); // Ajoute le path au SVG
    return svg;
}
/*
export function CreateDivIconText(divClassName, text, iconClassName, iconSvg)
{
    const div = document.createElement('div');
    const icon = CreateIcon(iconClassName, iconSvg);
    div.appendChild(icon);

}
*/

//svg-inline--fa fa-users icon  nomClasse User Icon