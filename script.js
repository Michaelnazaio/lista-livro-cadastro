const campoLogin = document.getElementById("username");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("newusername");
const campoNovaSenha = document.getElementById("newpassword");
const campoRepSenha = document.getElementById("reppassword");

function logar(){
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!"
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        // Lógica para verificar as credenciais de login
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));
                window.location.href = "home.html"
                break;
            }
        }
        
    }
    alert(mensagem);
}

function cadastrar(){
    if (campoNovaSenha.value == campoRepSenha.value) {
        // Lógica para registrar o usuário
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };  
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        if (existe(usuario.login, bancoDeDados)){
            alert('Login ja cadastrado!')
        }else{
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!")       
        }        
    } else {
        alert("As senhas são diferentes!");
    }    
}
function existe(login, bancoDeDados){
    for(let usuario of bancoDeDados){
        if(login == usuario.login){
            return true
        }
    }
    return false
}
function logout(){
    window.location.href = "index.html"
}

const campoTituloLivro = document.getElementById("tituloLivro");
const campoAutorLivro = document.getElementById("autorLivro");
const campoGeneroLivro = document.getElementById("generoLivro");
const campoIsbnLivro = document.getElementById("isbnLivro");
const campoReIsbnLivro = document.getElementById("reIsbnLivro");

function cadastrarLivro(){
    if (campoIsbnLivro.value == campoReIsbnLivro.value) {
        // Lógica para registrar o usuário
        const usuario = {
            titulo: campoTituloLivro.value,
            autor: campoAutorLivro.value,
            genero: campoGeneroLivro.value,
            isbn: campoIsbnLivro.value,
            reIsbn: campoReIsbnLivro.value

        };  
        let bancoDeDadosL = JSON.parse(localStorage.getItem("bancoDeDadosL"));
        if (bancoDeDadosL == null) {
            bancoDeDadosL = [];
        }
        if (existee(usuario.titulo, bancoDeDadosL)){
            alert('livro ja cadastrado!')
        }else{
        bancoDeDadosL.push(usuario);
        localStorage.setItem("bancoDeDadosL", JSON.stringify(bancoDeDadosL));
        alert("livro cadastrado com sucesso!")       
        } 
    }          
}
function existee(titulo, bancoDeDadosL){
    for(let usuario of bancoDeDadosL){
        if(titulo == usuario.titulo){
            return true
        }
    }
    return false
}
