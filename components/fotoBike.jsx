import React, { useState } from 'react';

export default function FotoBikeNext() {
  const [fotoFrente, setFotoFrente] = useState('');
  const [fotoDireita, setFotoDireita] = useState('');
  const [fotoEsquerda, setFotoEsquerda] = useState('');
  const [fotoTras, setFotoTras] = useState('');

  const handleUploadFotos = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://private-e2250-biancaleandrobarreto.apiary-mock.com/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify({
          fotoFrente,
          fotoDireita,
          fotoEsquerda,
          fotoTras,
        }),
      });

      if (response.ok) {
        // Upload de fotos realizado com sucesso, redirecione ou faça algo aqui
        console.log('Upload de fotos realizado com sucesso!');
      } else {
        // Tratar erro no upload de fotos
        console.error('Erro no upload de fotos');
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
          <form onSubmit={handleUploadFotos}>
            <h2>FOTO BIKE</h2>
            <p>
              Agora vamos tirar algumas fotos da sua bike. <br />
              Scaneie o QR CODE para iniciar a captura de fotos
            </p>
          
            <div className="imgCard">
            <img src="qrcode.jpg" alt="imagen" />
          </div>

            <p className='obs'>OBS: o QR code acima é meremante ilustrativo, e atua como um prototipo de solução</p>
            <button type="submit">
              <a className="decoration" href="/plataforma">
                CONFIRMAR
              </a>
            </button>
          </form>

          
        </div>
      </div>
    </>
  );
}
