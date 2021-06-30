function carregar() {

let msg = document.getElementById("msg");
let img = document.getElementById("imagem");
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`;
if(hora >= 0 && hora < 12){
    //bom dia
    img.src = "./img/gmorningsf.png"
    document.body.style.background = "rgb(250, 248, 144)"
} else if (hora >= 12 && hora <= 18) {
    //boa tarde
    img.src = "./img/eveningSydneysf.png"
    document.body.style.background = "rgb(150, 150, 156)"
} else {
    //boa noite
    img.src = "./img/nightLondonsf.png"
    document.body.style.background = "rgb(37, 37, 80)"

}
}
