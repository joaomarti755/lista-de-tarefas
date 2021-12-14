const tarefas = [
    { title: "Estudar JS", done: false },
    { title: "Estudar HTML", done: true },
]

function add() {
    const input = document.querySelector("#texto")
    tarefas.push({title:input.value, done: false})
    input.value = ""
    render()
}

function render() {
    const ul = document.querySelector("ul")
    ul.innerHTML = null
    tarefas.forEach(function (tarefa) {
        // checkbox
        const check = document.createElement("input")
        check.type = "checkbox"
        check.checked = tarefa.done
        check.addEventListener("click", function () {
            tarefa.done = !tarefa.done
            render()
        })

        // title
        const span = document.createElement("span")
        span.innerText = tarefa.title

        // input para edição
        const input = document.createElement("input")
        input.value = tarefa.title
        input.addEventListener("blur", function (event) {
            tarefa.title = input.value
            render()
        })

        // button deletar
        const button = document.createElement("button")
        button.innerHTML = "<img src=img/lixo.png>"
        button.addEventListener("click", function () {
            const index = tarefas.indexOf(tarefa)
            tarefas.splice(index, 1)
            render()
        })

        // button editar
        const buttonEdit = document.createElement("button")
        buttonEdit.innerHTML = "<img src=img/84380.png>"
        buttonEdit.addEventListener("click", function () {
            const index = tarefas.indexOf(tarefa)
            console.log(index)
        })

        // li
        const li = document.createElement("li")
        li.appendChild(check)
        li.appendChild(input)
        li.appendChild(span)
        li.appendChild(button)
        li.appendChild(buttonEdit)
        if (tarefa.done) {
            li.classList.add("done")
        }

        // ul
        ul.appendChild(li)
    })
}

render()