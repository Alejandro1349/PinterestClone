const imagenes=["https://i.pinimg.com/236x/34/0c/43/340c4350e10d6fac215d2a1a28410f6a.jpg",
                "https://i.pinimg.com/736x/47/5e/ba/475eba57454015bfe214e8722e2422a1.jpg",
                "URL3",
                "URL4",
                "URL5", 
                "URL6"];

const imagenesPerfil=["https://i.pinimg.com/236x/34/0c/43/340c4350e10d6fac215d2a1a28410f6a.jpg",
            "https://i.pinimg.com/736x/47/5e/ba/475eba57454015bfe214e8722e2422a1.jpg",
            "URL3",
            "URL4",
            "URL5", 
            "URL6"]

var index =0;

imagenes.forEach(Objeto => {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class","window");

    var imagen = document.createElement("img");
    imagen.src = Objeto;
    imagen.setAttribute("class","foto");

    var content= document.createElement("p");
    content.setAttribute("class", "content");

    var userPic = document.createElement("img");
    userPic.src = imagenesPerfil[index];
    userPic.setAttribute("class", "user");

    var userName = document.createElement("a");
    userName.setAttribute("class", "username");

    var texto = document.createTextNode("nombre usuario");
    userName.appendChild(texto);
    newDiv.appendChild(imagen);
    newDiv.appendChild(content);
    newDiv.appendChild(userPic);
    newDiv.appendChild(userName);

    var currentDiv = document.getElementById("main");
    currentDiv.appendChild(newDiv);
    index++;
  });