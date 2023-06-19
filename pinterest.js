const cardInfo = [["cards/img-1.jpg", "profile-pics/pp-1.jpg", "LegendRainbow"], 
                 ["cards/img-2.jpg", "profile-pics/pp-2.jpg", "RocketMan"], 
                 ["cards/img-3.jpg", "profile-pics/pp-3.jpg", "PanRanchero"], 
                 ["cards/img-4.jpg", "profile-pics/pp-4.jpg", "RushWind"], 
                 ["cards/img-5.jpg", "profile-pics/pp-5.jpg", "BlastDream"], 
                 ["cards/img-6.jpg", "profile-pics/pp-6.jpg", "SwiftLaser"], 
                 ["cards/img-7.jpg", "profile-pics/pp-7.jpg", "BloodFries"], 
                 ["cards/img-8.jpg", "profile-pics/pp-8.jpg", "ReSun"], 
                 ["cards/img-9.jpg", "profile-pics/pp-9.jpg", "RainbowQueen"], 
                 ["cards/img-10.jpg", "profile-pics/pp-10.jpg", "PrincessLittle"], 
                 ["cards/img-11.jpg", "profile-pics/pp-11.jpg", "BlindPotato"], 
                 ["cards/img-12.jpg", "profile-pics/pp-12.jpg", "TinyRush"], 
                 ["cards/img-13.jpg", "profile-pics/pp-13.jpg", "ItsmeAngel"], 
                 ["cards/img-14.jpg", "profile-pics/pp-14.jpg", "AbyssSad"],
                 ["cards/img-15.jpg", "profile-pics/pp-15.jpg", "LegendArmy"],
                 ["cards/img-16.jpg", "profile-pics/pp-16.jpeg", "DrFire"], 
                 ["cards/img-17.jpg", "profile-pics/pp-17.jpeg", "BitchClean"], 
                 ["cards/img-18.jpg", "profile-pics/pp-18.jpg", "TailJust"], 
                 ["cards/img-19.jpg", "profile-pics/pp-19.jpg", "JustThe"], 
                 ["cards/img-20.jpg", "profile-pics/pp-20.jpg", "CrazySun"], 
                 ["cards/img-21.jpg", "profile-pics/pp-21.jpg", "FrozenArmy"], 
                 ["cards/img-22.jpg", "profile-pics/pp-22.jpg", "SayAbyss"], 
                 ["cards/img-23.jpg", "profile-pics/pp-23.jpg", "NatureWind"], 
                 ["cards/img-24.jpg", "profile-pics/pp-24.jpg", "SirWorld"], 
                 ["cards/img-25.jpg", "profile-pics/pp-25.jpg", "DirtSalty"], 
                 ["cards/img-26.jpg", "profile-pics/pp-26.jpg", "Mayhem"], 
                 ["cards/img-27.jpg", "profile-pics/pp-27.jpg", "Angel0vich"], 
                 ["cards/img-28.jpg", "profile-pics/pp-28.jpg", "CarlosCheke"], 
                 ["cards/img-29.jpg", "profile-pics/pp-29.jpg", "Lays"], 
                 ["cards/img-30.jpg", "profile-pics/pp-30.jpg", "Paulj",]]

const dwnldBtn = "https://cdn3.iconfinder.com/data/icons/iconset-1-1/24/icon_set_outlinder-10-256.png";
const optnBtn = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-more-256.png";

cardInfo.forEach(position => {
    var newWindow = document.createElement("div");
    newWindow.setAttribute("class", "window");

    var newCard = document.createElement("img");
    newCard.src = position[0];
    newCard.setAttribute("class", "foto");
    newCard.setAttribute("id", "foto");

    var newContent = document.createElement("p");
    newContent.setAttribute("class", "content");
    var contentText = document.createTextNode("Follow me");
    newContent.appendChild(contentText);

    var newUserPic = document.createElement("img");
    newUserPic.src = position[1];
    newUserPic.setAttribute("class", "user");

    var newUserName = document.createElement("a");
    newUserName.setAttribute("class", "username");
    var userNameContent = document.createTextNode(position[2]);
    newUserName.appendChild(userNameContent);

    newWindow.appendChild(newCard);
    newWindow.appendChild(newContent);
    newWindow.appendChild(newUserPic);
    newWindow.appendChild(newUserName);

    var currentDiv = document.getElementById("container");
    currentDiv.appendChild(newWindow);

  /*<!----------------------- Hover-zone ---------------->*/

    var newHover = document.createElement("div");
    newHover.setAttribute("class", "hover-zone");

    /*!---------------- Top-bar -------------------*/

    var newTop = document.createElement("div");
    newTop.setAttribute("class", "top-bar");

    var newText = document.createElement("p");
    var pText = document.createTextNode("Profile ⌵");
    newText.appendChild(pText)

    var newA = document.createElement("a");
    var newAText = document.createTextNode("Guardar");
    newA.appendChild(newAText);

    newTop.appendChild(newText);
    newTop.appendChild(newA)

    /* ----------------------- Bottom-bar ---------*/

    var newBottom = document.createElement("div");
    newBottom.setAttribute("class", "bottom-bar");

    var aBottom = document.createElement("a");
    var aBttmText = document.createTextNode ("↗ website.com");
    aBottom.appendChild(aBttmText);

    var iconsBttm = document.createElement("div");
    iconsBttm.setAttribute("class", "radius-ico");

    var dwnldIcon = document.createElement("img");
    dwnldIcon.src = dwnldBtn;

    var optnIcon = document.createElement("img");
    optnIcon.src = optnBtn;

    iconsBttm.appendChild(dwnldIcon);
    iconsBttm.appendChild(optnIcon);

    newBottom.appendChild(aBottom);
    newBottom.appendChild(iconsBttm);

    newHover.appendChild(newTop);
    newHover.appendChild(newBottom);

    newWindow.appendChild(newHover);
})