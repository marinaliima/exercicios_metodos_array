//Desafio Final — Sistema de Lista

let alunos = [
    "Daniela",
    "Beatriz",
    "Ana",
    "Eduarda",
    "Júlia",
    "Gabriela",
    "Heloisa",
    "Clara",
    "Fernanda",
    "Isabela"
];

let opcao = Number(prompt("=== Sistema de Lista === \n1) Verificar se um aluno existe \n2) Encontrar posição de um aluno \n3) Criar uma parte da lista \n4) Remover aluno \n5) Inserir aluno \n6) Ordenar alunos \n7) Inverter lista \n8) Exibir lista como texto"));
let nomeAluno = "";
let indiceInicial = 0;
let indiceFinal = 0;

while ((opcao > 0) && (opcao < 9)) {
    nomeAluno = "";

    switch (opcao) {
        case 1:
            nomeAluno = prompt("Digite o nome do aluno:");
            alert(alunos.includes(nomeAluno) ? `${nomeAluno} existe!` : `${nomeAluno} não existe.`);
            break;

        case 2:
            nomeAluno = prompt("Digite o nome do aluno:");
            alert(`${nomeAluno} está na posição ${alunos.indexOf(nomeAluno)} \n\nObs.: Se a posição for -1, o aluno não existe!`);
            break;
        
        case 3:
            indiceInicial = Number(prompt(`Lista de alunos: \n • ${alunos.join("\n • ")} \nDeseja começar a lista nova a partir de qual índice?`));
            indiceFinal = Number(prompt(`Lista de alunos: \n • ${alunos.join("\n • ")} \nDeseja terminar a lista nova a partir de qual índice?`));
            alert(`Nova lista de alunos: \n• ${alunos.slice(indiceInicial, indiceFinal).join("\n• ")}`);
            break;
            //Essa lista nova não ficará salva
            
        case 4:
            nomeAluno = prompt("Digite o nome do aluno que deseja remover:");
            alunos.splice(alunos.indexOf(nomeAluno), 1);
            alert(`Nova lista de alunos: \n• ${alunos.join("\n• ")}`);
            break;
                
        case 5:
            nomeAluno = prompt("Digite o nome do aluno que deseja inserir:");
            alunos.splice(alunos.length, 0, nomeAluno);
            alert(`Nova lista de alunos: \n• ${alunos.join("\n• ")}`);
            break;

        case 6:
            alert(`Lista ordenada: \n• ${alunos.sort().join("\n• ")}`);
            break;
            
        case 7:
            alert(`Lista invertida: \n• ${alunos.reverse().join("\n• ")}`);
            break;
            
        case 8:
            alert(`Lista como texto: \n${alunos.reverse().join(", ")}`);
            break;         
    }

    opcao = Number(prompt("=== Sistema de Lista === \n1) Verificar se um aluno existe \n2) Encontrar posição de um aluno \n3) Criar uma parte da lista \n4) Remover aluno \n5) Inserir aluno \n6) Ordenar alunos \n7) Inverter lista \n8) Exibir lista como texto"));
};

alert("Opção inválida.");