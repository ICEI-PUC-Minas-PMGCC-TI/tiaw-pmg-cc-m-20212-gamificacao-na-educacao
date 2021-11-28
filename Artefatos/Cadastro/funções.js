function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else{
        objDados = { usuarios: [ 
            {login: "exemplo 1", email: "exemplo 1", senha: "exemplo 1", nome: "exemplo 1"}, 
            {login: "exemplo 2", email: "exemplo 2", senha: "exemplo 2", nome: "exemplo 2"}, 
            {login: "exemplo 3", email: "exemplo 3", senha: "exemplo 3", nome: "exemplo 3"},
            {} ]
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
        login: strLogin,
        email: strEmail,
        senha: strSenha,
        nome: strNome
    };
    
    objDados.contato.push(novoUsuario);

    //Salvar os dados no localStorage 
    salvaDados (objDados);

    //Atualisa a tela
    imprimeDados ();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();
    for(i=0; i<objDados.usuarios.length; i++){
        strHtml = strHtml + `<p>${objDados.usuarios[i].login} - ${objDados.usuarios[i].email} - ${objDados.usuarios[i].nome}<p>`
    }
    tela.innerHTML = strHtml;
}

//botando os botões para funcionar
document.getElementById('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById('btnIncluirUsuario').addEventListener ('click', incluirUsuario);