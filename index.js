const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},
                      {nome:"Edson",notas:[],cursos:[],faltas:2},
                      {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
                      {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
                      {nome:"Carlos",notas:[],cursos:[],faltas:0},
                      {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

function adicionarAluno(nome){
    alunosDaEscola.push({nome:nome,notas:[],cursos:[],faltas:0})
    console.log ("Aluno cadastrado com sucesso")
}
   
function listarAlunos(){
    let conteudo = ""
    alunosDaEscola.forEach((aluno) => {
        conteudo+= `
        --------------------------------
        Nome     : ${aluno.nome}
        Notas    : ${aluno.notas}
        Faltas   : ${aluno.faltas}
        `
        for (let i in aluno.cursos){
        conteudo+= `
        Curso    : ${aluno.cursos[i].nomeDoCurso}
        Matrícula: ${aluno.cursos[i].dataMatricula.getDate()}/${aluno.cursos[i].dataMatricula.getMonth()+1}/${aluno.cursos[i].dataMatricula.getFullYear()}
        `
        }
    })
    console.log(conteudo)
}

function buscarAluno(nome){
    let resultado = alunosDaEscola.filter(aluno => {
        return (aluno.nome === nome)
    })
    if (resultado.length != 0) {
        console.log(`Encontrado ${resultado.length} registro(s):`);
        console.log(" ")
        resultado.forEach(aluno => {
            console.log("Nome: " + aluno.nome);
        })
    } else
        console.log("Registro não encontrado");
    return resultado;    
}

function matricularAluno(aluno, curso){
    let alunomatriculado = buscarAluno(aluno)

    if (alunomatriculado.length != 0){
        alunomatriculado[0].cursos.push({nomeDoCurso: curso, dataMatricula: new Date()});
        console.log("Aluno cadastrado com sucesso")
    } else
        console.log("Aluno não cadastrado no sistema")
}

function aplicarFalta(aluno){
    let alunomatriculado = buscarAluno(aluno);
    if (alunomatriculado.length != 0){
        if(alunomatriculado[0].cursos.length != 0){
            alunomatriculado[0].faltas++;
            console.log("Falta aplicada");
        }else
            console.log("Aluno não matriculado em nenhum curso")
    }
}

function aplicarNota(aluno, nota){
    let alunomatriculado = buscarAluno(aluno);
    if (alunomatriculado.length != 0){
        if(alunomatriculado[0].cursos.length != 0){
            alunomatriculado[0].notas.push(nota);
            console.log("Nota atribuída");
        }else
            console.log("Aluno não matriculado em nenhum curso")
    }
}

function aprovarAluno(aluno){
    let alunomatriculado = buscarAluno(aluno);
    
    if (alunomatriculado.length != 0){
        if(alunomatriculado[0].cursos.length != 0){
            let media = alunomatriculado[0].notas.reduce((acum,numero)=>{ return acum + numero})/ alunomatriculado[0].notas.length;
            if (media >= 7 && alunomatriculado[0].faltas <=3)
                console.log("Aluno aprovado");
            else
                console.log("Aluno reprovado");
        }else
            console.log("Aluno não matriculado em nenhum curso")
    }
}