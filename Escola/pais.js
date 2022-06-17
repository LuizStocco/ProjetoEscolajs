fetch("https://raw.githubusercontent.com/LuizStocco/Json.Alunos/main/Json/Alunos.json")
.then(response => response.json())
    .then(json => {
       
        createAlunos(json)
        createProvas(json)
    })

        function createAlunos(json) {

            json.forEach((aluno, index) => {
                const alunos = document.getElementById("alunos")
                const todosAlunos = document.createElement("a")
                todosAlunos.onclick = ()=>{
                    const frequencia = document.getElementById("Frequencia")
                    const notas = document.getElementById("Notas")
                    frequencia.value = aluno.Frequencia
                    notas.value = aluno.Notas
                    
                } 
                todosAlunos.innerText = aluno.Nome
                alunos.appendChild(todosAlunos)
            })
            }
            function createProvas(json) {
                json.Provas.forEach((provas) => {
                  const provasq = document.getElementById("materias")
                  const disciplina = document.createElement("a")
                  disciplina.onclick = ()=> {

                  }
                  disciplina.innerText = disciplina.Nome
                  provasq.appendChild(disciplina)
                   
                
            });
            }

        