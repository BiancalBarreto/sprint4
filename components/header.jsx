import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export default function Header(){
    return(
        <>
          <header>
            <a href="/"><img src="technology portocycle header.png" alt="technology portocycle header" /></a>
            

            <div>
              <a href="/plataforma">Plataforma</a>
              <a href="/parceria">Parceria</a>
              <a href="/quem-somos">Quem somos</a>
              <a href="/cadastro" className='acesse-agora'>Acesse agora</a>
            </div>
          </header>
        </>
    );
}