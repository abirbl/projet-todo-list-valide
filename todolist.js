var all = document.getElementById("all");
var body = document.getElementById("taches")
var add = document.getElementById("add");
var w = document.getElementById("in");
var reset = document.getElementById("reset");
// var premelem = document.getElementById("gg")
// var liste = document.getElementById("liste")
var test = document.getElementById("test")
add.addEventListener("click", function () {
    w.onblur = function () {
        w.removeAttribute("data-state");
    }

    var liste = document.createElement("ul")
    var ele = document.createElement("li");
    var btn = document.createElement("input")
    btn.setAttribute("type", "radio");
    btn.setAttribute("id", "elee");
    var ok = document.createElement("ion-icon")
    ok.setAttribute("name", "trash")
    ok.setAttribute("id", "delete")
    let br = document.createElement("br")
    // Partie Style
    ele.style.marginLeft = "40px"
    ele.style.marginTop = "-25px"
    btn.style.marginTop = "5px"
    ele.style.position = "absolute"
    ok.style.marginLeft = "400px"
    liste.style.margin = "10px"
    liste.style.backgroundColor = "beige"



    body.appendChild(liste)
    liste.appendChild(btn)
    liste.appendChild(ele);
    liste.appendChild(ok)
    liste.appendChild(br)
    ele.value = w.value

    w.setAttribute("data-state", "edit");
    // On est entrain d'éditer la cellule
    w.focus();
    var textim = w.value;

    ele.innerHTML = textim;
    w.innerHTML = ''


    btn.addEventListener('click', function () {
        liste.style.backgroundColor = "green"

    })

    ok.addEventListener('click', function () {
        liste.remove()
    })
    reset.addEventListener('click', function () {
        liste.remove()

    })

})
w.innerHTML = " "


// let ok1 = document.getElementsByName()
// let ele1 = document.getElementsByTagName("li")
// for (let i = 0; i <= ok1.length; i++) {
//     ok1[i].addEventListener('click', function () {
//         ele1[i].innerHTML = "hello"
//     })
// }











// let ele = document.createElement("li"); // On a créé la liste
//     ele.value = text;

//     w.innertHTML = ''; //là on efface le contenu de notre cellule
//     listItems.appendChild(ele); // on place le input déclarer en haut dans la cellule
//     w.setAttribute("data-state", "edit"); // On est entrain d'éditer la cellule
//     w.focus();
// });
// input.onblur = function () {
//     ele.parentNode.removeAttribute("data-state");
//     ele.innerHTML = w.value;
