document.getElementById('toggleSenha').addEventListener('click', function(){
    const senhaInput = document.getElementById('senha');
    const icone = document.getElementById('iconeSenha');

    if(senhaInput.type === 'password'){
        senhaInput.type = 'text';
        icone.classList.remove('bi-eye-fill');
        icone.classList.add('by-eye-slash-fill');
    }else{
        senhaInput.type = 'password';
        icone.classList.remove('bi-eye-slash-fill');
        icone.classList.add('bi-eye-fill');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const mensagem = document.getElementById('mensagem');

    if(email === '' || senha === ''){
        mensagem.innerHTML = '<div class=alert alert-danger>Preencha todos os campos!</div>';
        return;
    }

    if(email === "senai@senai.com.br" && senha === '123456'){
        window.location.href = painel.html;
    }else{
        mensagem.innerHTML = '<div class=alert alert-warning>E-mail ou senha incorretos</div>';
    }
});