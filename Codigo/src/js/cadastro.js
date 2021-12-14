function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else{
        objDados = { usuarios: [ 
            { login: "Ru@m d'S1lva", email: "Ruam.silva@gmail.com", senha: "123456789", nome: "Ruam da Silva"}, 
            { login: "Mariazinha", email: "tia.maria@gmail.com", senha: "20111983", nome: "Maria do Carmo"}, 
            { login: "AnpesaEletrônicos", email: "anpesa.oficial@gmail.com", senha: "CjuD^E4X&V26", nome: "Antônio Pereira dos Santos"}, ]
        }
    }
    return objDados;
}

function salvaDados () {
    localStorage.setItem('db', JSON.stringify(dados))
}

function incluirUsuario () {
    //Ler os dados
    let objDados = leDados();

    //incluir Usuário 
    let strLogin = document.getElementById('campoLogin').value;
    let strEmail = document.getElementById('campoEmail').value;
    let strSenha = document.getElementById('campoSenha').value;
    let strNome = document.getElementById('campoNome').value;
    let novoUsuario = {
        "login": strLogin,
        "email": strEmail,
        "senha": strSenha,
        "nome": strNome
    };
    
    objDados.usuario.push(novoUsuario);

    //Salvar os dados no localStorage 
    salvaDados (objDados);

    //Atualisa a tela
    imprimeDados ();
}

function imprimeDados () {
    let tela = document.getElementById('cadastroTela');
    let strHtml = '';
    let objDados = leDados ();
    for(i=0; i<objDados.usuarios.length; i++){
        strHtml = strHtml + `<p>Nome do usuario: ${objDados.usuarios[i].nome} | Email de contato: ${objDados.usuarios[i].email}<p>`
    }
    tela.innerHTML = strHtml;
}

//botando os botões para funcionar
document.getElementById('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById('btnIncluirUsuario').addEventListener ('click', incluirUsuario);
