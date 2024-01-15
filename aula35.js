const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_transferir")

const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((elem)=>{
    elem.addEventListener("click", (event) => {
        const curso = event.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")] //pega os elementos da classe curso que nao tem a classe selecionado
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })

    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})