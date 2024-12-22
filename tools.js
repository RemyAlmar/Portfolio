import * as data from './data.js';
import * as elem from './tools_creationHTMLElement.js'

export function CreateCard(_data)
{  
    const divTitle = elem.CreateDivIconText(data.chevronIconData, _data.color, _data.titleGame, 'h3', "ProjectTitleContainer", "ImportantText", true);
    const childPTD = [divTitle];
    const projectTitleData = new data.Data("BandProjectTitleContainer", childPTD);
    const divProjectTitle = elem.CreateDiv(projectTitleData);

    const divTools = elem.CreateDivIconText(data.toolsIconData, _data.color, _data.device, 'p', "IconContainer");
    const divTime = elem.CreateDivIconText(data.timeIconData, _data.color, _data.productionTime, 'p', "IconContainer"); 
    const divTeam = elem.CreateDivIconText(data.teamIconData, _data.color, _data.teamMate, 'p', "IconContainer"); 
    const childDivIcon = [divTeam, divTime, divTools];
    const divIconData = new data.Data("IconsContainer", childDivIcon);
    const divIcon = elem.CreateDiv(divIconData)

    const roleData = new data.Data("", _data.selfRole);
    const role = elem.CreateText(roleData, 'p');
    const textDesData = new data.Data("", _data.description);
    const textDescription = elem.CreateText(textDesData, 'p');
    const childDesDiv = [divIcon, role, textDescription];
    const divDescriptionData = new data.Data("DescriptionContainer Scrollable", childDesDiv);
    const divDescription = elem.CreateDiv(divDescriptionData);
    
    const childInfo = [divProjectTitle, divDescription];
    const cardInfoData = new data.Data("CardInfo", childInfo);
    const divCardInfo = elem.CreateDiv(cardInfoData);
    divCardInfo.style.backgroundColor = _data.BgColor;
    elem.SetColorToClassElement(divCardInfo, _data.textColor,"ImportantText");
    
    const video = elem.CreateVideo(_data.videoSrc);
    
    const videoDivChilds = [video, divCardInfo];
    const videoDivData = new data.Data("GameCard", videoDivChilds);
    const videoDiv = elem.CreateDiv(videoDivData);
    videoDiv.classList.add(_data.titleGame);
    return videoDiv;
}

export function DisplayMainPage(parent = "body")
{
    //Creation des textes de la présentation
    const parcoursData = new data.Data("none", data.presentation.parcours);
    const passionData = new data.Data("none", data.presentation.passion);
    const lookThatData = new data.Data("none", data.presentation.lookThat);
    const parcours = elem.CreateText(parcoursData, 'p');
    const passion = elem.CreateText(passionData, 'p');
    const lookThat = elem.CreateText(lookThatData, 'p');
    let childs = [parcours, passion, lookThat];
    //*Ajout des enfants à la présentation
    const presentationData = new data.Data("", childs);
    const presentation = elem.CreateDiv(presentationData);
    presentation.id = 'presentation';
    
    //Initialisation des cartes
    let cardChilds = []; 
    data.cardsData.forEach(_data => {
        cardChilds.push(CreateCard(_data));
    });
    //Ajout des cartes au parent
    const cardArrayData = new data.Data("CardArray", cardChilds);
    const cardArray = elem.CreateDiv(cardArrayData);
    cardArray.id = 'project';

    //Ajout des div au container parent
    parent.appendChild(presentation);
    parent.appendChild(cardArray);
}

export function CreateSection(_index)
{

    let _blocSections = [];
    data.blocContentData.bloc.forEach(_bloc =>
    {
        let _blocDivChilds = [];

        let _SectionDivChilds = [];
        let _titleSectionData = new data.Data("", _bloc.title);
        let _titleSection = elem.CreateText(_titleSectionData, 'h3');
        _SectionDivChilds.push(_titleSection);

        let _textSectionData = new data.Data("", _bloc.text);
        let _textSection = elem.CreateText(_textSectionData, 'p');
        _SectionDivChilds.push(_textSection);

        let _SectionDivData = new data.Data("Section", _SectionDivChilds);
        let _SectionDiv = elem.CreateDiv(_SectionDivData);

        _blocDivChilds.push(_SectionDiv);

        if(_bloc.img)
        {
            let _imgChilds = [];
            _bloc.img.forEach(_imgChild =>
            {
                let _img = elem.CreateSourceImage(_imgChild);
                _imgChilds.push(_img);
            })
            let _PicturesDivData = new data.Data("Pictures", _imgChilds);
            let _PicturesDiv = elem.CreateDiv(_PicturesDivData);
            _blocDivChilds.push(_PicturesDiv);
        }

        let _blocDivData = new data.Data("BlocContent", _blocDivChilds);
        let _blocDiv = elem.CreateDiv(_blocDivData);

        _blocSections.push(_blocDiv);
    })
    return _blocSections;
}
export function CreateGameDetails(_index)
{
    /*---------------- Creation Div Subject Content --------------------*/
    const divSubjectContentChilds = CreateSection(_index);
    const divSubjectContentData = new data.Data("SubjectContent", divSubjectContentChilds);
    const divSubjectContent = elem.CreateDiv(divSubjectContentData);

    /*---------------- Creation Div About Game --------------------*/
    let textAboutData = new data.Data("", data.cardsDetailData[_index].aboutText);
    let textAbout = elem.CreateText(textAboutData, 'p');

    let titleSectionAboutData = new data.Data("", data.cardsDetailData[_index].titleAbout);
    const titleSectionAbout = elem.CreateText(titleSectionAboutData, 'h3');
    let divAboutChild = [titleSectionAbout, textAbout];
    const divAboutData = new data.Data("Section", divAboutChild);
    const divAbout = elem.CreateDiv(divAboutData);

    /*---------------- Creation Div Project Info --------------------*/
    let textProjectData = new data.Data("", data.cardsDetailData[_index].problemText);
    let textProjectInfo = elem.CreateText(textProjectData, 'p');
    let titleSectionProjectInfoData = new data.Data("",data.cardsDetailData[_index].titleProjectInfo);
    const titleSectionProjectInfo = elem.CreateText(titleSectionProjectInfoData, 'h3');
    let divProjectInfoChild = [titleSectionProjectInfo, textProjectInfo];
    const divProjectInfoData = new data.Data("Section", divProjectInfoChild);
    const divProjectInfo = elem.CreateDiv(divProjectInfoData);

/*---------------- Creation Container Game Info --------------------*/
    const divGameInfoChild = [divProjectInfo, divAbout];
    const divGameInfoData = new data.Data("GameInfo", divGameInfoChild);
    const divGameInfo = elem.CreateDiv(divGameInfoData);

/*---------------- Creation du titre du jeu ------------------------*/
    let titleGameBandData = new data.Data("", data.cardsDetailData[_index].titleGame);
    let titleGameBand = elem.CreateText(titleGameBandData, 'h2', data.cardsData[_index].textColor);

/*---------------- Creation de la bande du jeu ------------------------*/
    let childInfo = [titleGameBand];
    const titleBandData = new data.Data("TitleBand", childInfo);
    const divTitleBand = elem.CreateDiv(titleBandData);
   /* divCardInfo.style.backgroundColor = data.cardsData[_index].BgColor;

/*---------------- Creation de la vidéo ------------------------*/
    const video = elem.CreateVideo(data.cardsDetailData[_index].videoSrc);
    const videoDivChilds = [video, divTitleBand];
    const videoDivData = new data.Data("VideoContainer", videoDivChilds);
    const videoDiv = elem.CreateDiv(videoDivData);
    videoDiv.classList.add(data.cardsDetailData[_index].titleGame);
/*---------------- Creation du container ------------------------*/
    let divContainerChild = [videoDiv, divGameInfo, divSubjectContent];
    let divContainerData = new data.Data('ProjectContainer', divContainerChild);
    const divContainer = elem.CreateDiv(divContainerData)

    return divContainer;
}
//svg-inline--fa fa-users icon  nomClasse User Icon



/*
    <div class="BackButton">
        <a class="CloseProject" href="#">
            <p>Back</p>
        </a>
    </div>
    <div class="ProjectContainer">
        <div class="VideoContainer">
            <video src="Video/ExtraitVideo.mp4"></video>
            <div class="TitleBand">
                <h2>Titre du Jeu</h2>
            </div>
        </div>
        <div class="GameInfo">
            <div class="Section">
                <h3>About</h3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias illo optio nobis dolor porro
                mollitia eaque molestiae consequatur iure voluptates inventore sequi, quis eligendi obcaecati
                repudiandae, modi repellat voluptate repellendus.
            </div>
            <div class="Section">
                <h3>Project Info</h3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias illo optio nobis dolor porro
                mollitia eaque molestiae consequatur iure voluptates inventore sequi, quis eligendi obcaecati
                repudiandae, modi repellat voluptate repellendus.
            </div>
        </div>
        <div class="SubjectContent">
            <div class="BlocContent">
                <div class="Section">
                    <h3>Problem encountered during development:</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quasi dolore. Odio,
                        doloribus.
                        Ducimus provident ullam quia officiis nisi voluptates cupiditate placeat perspiciatis
                        sapiente
                        maxime, commodi cum et sint earum.
                    </p>
                </div>
                <div class="Pictures">
                    <img src="Pictures/LogoESMA.png" alt="uneImage">
                    <img src="Pictures/LogoESMA.png" alt="uneImage">
                </div>
            </div>
            <div class="BlocContent">

                <div class="Section">
                    <h3>Solution:</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quasi dolore. Odio,
                        doloribus.
                        Ducimus provident ullam quia officiis nisi voluptates cupiditate placeat perspiciatis
                        sapiente
                        maxime, commodi cum et sint earum.
                    </p>
                </div>
                <div class="Pictures">
                    <img src="Pictures/LogoESMA.png" alt="uneImage">
                    <img src="Pictures/LogoESMA.png" alt="uneImage">
                </div>
            </div>
            <div class="BlocContent">

                <div class="Section">
                    <h3>What I learned:</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quasi dolore. Odio,
                        doloribus.
                        Ducimus provident ullam quia officiis nisi voluptates cupiditate placeat perspiciatis
                        sapiente
                        maxime, commodi cum et sint earum.
                    </p>
                </div>
            </div>
        </div>
    </div>*/