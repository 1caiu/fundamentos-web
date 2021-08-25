/* O JS é Case Sensitive, ou seja, identifica e reconhece em sua palavras reservadas letras maiusculas e minusculas */

/*
formas de acessar o DOM
por tag: getElementByTagName()
por ID: getElementById()
por nome: getElementByName()
por classe: getElementsByClassName()
*/

/*declaração de variáveis*/
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = querySelector("#mapa")


nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"


/*validação de nome */
function validaNome() {
    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txtNome.innerHTML = "diga seu nome aí :)"
        txtNome.style.color = "grey"
    } else {
        txtNome.innerHTML = "seja bem vindx!"
        txtNome.style.color = "pink"
        nomeOk = true
    }

}

/*validação de e-mail */
function validaEmail() {
    let txtEmail = document.querySelector("#email")

    if (email.value.indexOf ("@") == -1 || email.value.indexOf (".") == -1) {
        txtEmail.innerHTML = "digite seu e-mail, por favor ^^ "
        txtEmail.style.color = "grey"
    } else {
        txtEmail.annyHTML = "obrigadx!"
        txtEmail.style.color = "pink"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 300) {
        txtAssunto.innerHTML = "fale mais, pode digitar até 300 caracteres *-* "
        txtAssunto.style.color = "grey"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("obrigado pelo contato, até logo! xD ")
    } else {
        alert ("preencha o formulário x_x")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "300px"
    mapa.style.height = "200px"
}