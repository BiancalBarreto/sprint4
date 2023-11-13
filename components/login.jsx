import React, { useState } from 'react';

export default function LoginNext(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('https://api.postman.com/collections/29962160-409ec5f0-9287-4fe6-8940-79f3a8ad6be5?access_key=PMAT-01HF5F8WP2G81RTV5DQAMWS530', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
  
        if (response) {
          // Usuário autenticado com sucesso, redirecione ou faça algo aqui
          console.log('Usuário autenticado com sucesso!', response);
          alert('Usuário autenticado com sucesso!')


        } else if (response.status === 400){
          // Tratar erro de autenticação
          alert('Usuário não encontrado')
          console.error('Erro ao autenticar usuário', response);
        }
      } catch (res){
        console.log('Erro de rede:', res.status);
      }
    };
    
    return(
        <>
            <div id="login">
                <div className="loginHeader">
                   <a href="/"><img src="technology portocycle header.png" alt="logo" /></a>
                </div>

                <div className="loginCard">
                    <div className="imgCard">
                        <img src="login img.png" alt="imagen" />
                    </div>

                    <form onSubmit={handleLogin}>
                        <h2>LOGIN</h2>

                        <div className="username">
                            <p>Nome de usuario</p>
                            <input 
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="password">
                            <p>Senha</p>
                            <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <button type="submit">ENTRAR</button>

                        <div className="cadastre">
                            <p>Não possui conta?</p>

                            <a href="cadastro">Cadastre-se</a>
                        </div>
                            <a href="/plataforma">Voltar</a>
                    </form>
                </div>
            </div>
        </>
    )
}