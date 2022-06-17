fetch("https://raw.githubusercontent.com/LuizStocco/ProjetoEscola.Json/main/data/areaAluno.json")
  .then(response => response.json())
  .then(json => {
    const nomeinput = document.getElementById("nome")
    nomeinput.value = json.nome


    createAtividades(json)
    createProvas(json)
  })

function createAtividades(json) {
  
  json.AtividadesExtra.forEach((atividade, index) => {
    const atividadeEx = document.getElementById("atividades")
    const atividadeA = document.createElement("a")
    atividadeA.innerText = atividade.Nome
    atividadeEx.appendChild(atividadeA)
  })

}

function createProvas(json) {
  json.Provas.forEach(prova => {
    const provasul = document.getElementById("materias")
    const disciplina = document.createElement("a")
    disciplina.innerText = prova.disciplina
    provasul.appendChild(disciplina)
  });

}



