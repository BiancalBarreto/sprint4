import React, { useState } from 'react';

export default function CadastroBikeNext() {
  const [numeroSerie, setNumeroSerie] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [tipo, setTipo] = useState('');
  const [cor, setCor] = useState('');
  const [valor, setValor] = useState('');

  const handleCadastroBike = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.postman.com/collections/29962160-409ec5f0-9287-4fe6-8940-79f3a8ad6be5?access_key=PMAT-01HF5F8WP2G81RTV5DQAMWS530', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          numeroSerie,
          marca,
          modelo,
          tipo,
          cor,
          valor,
        }),
      });

      if (response.ok) {
        // Cadastro de bike realizado com sucesso, redirecione ou faça algo aqui
        console.log('Cadastro de bike realizado com sucesso!');
      } else {
        // Tratar erro no cadastro de bike
        console.error('Erro ao cadastrar bike');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  };

  return (
    <>
      <div id="cadastro">
        <div className="cadastroHeader">
          <a href="/">
            <img src="technology portocycle header.png" alt="logo" />
          </a>
        </div>

        <div className="cadastroCard">
          <form onSubmit={handleCadastroBike}>
            <h2>CADASTRO BIKE</h2>
            <p>
              Cadastro confirmado. <br />Agora que já fez o seu cadastro, chegou a hora de fazer o cadastro da sua Bike!
            </p>

            <div className="username">
              <p>Número de série</p>
              <input
                type="text"
                value={numeroSerie}
                onChange={(e) => setNumeroSerie(e.target.value)}
                required
              />
            </div>

            <div className="username">
              <p>Marca</p>
              <input
                type="text"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                required
              />
            </div>

            <div className="password">
              <p>Modelo</p>
              <input
                type="text"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                required
              />
            </div>

            <div className="password">
              <p>Tipo</p>
              <input
                type="text"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
              />
            </div>

            <div className="password">
              <p>Cor</p>
              <input
                type="text"
                value={cor}
                onChange={(e) => setCor(e.target.value)}
                required
              />
            </div>

            <div className="password">
              <p>Valor</p>
              <input
                type="text"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                required
              />
            </div>

            <button type="submit"><a href="/fotoBike">CONTINUAR</a></button>
            <a href="/plataforma">Voltar</a>
          </form>
        </div>
      </div>
    </>
  );
}
