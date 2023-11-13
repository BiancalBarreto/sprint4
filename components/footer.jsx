import React from "react";
import Image from 'react-bootstrap/Image';
import { FaFacebookF , FaTwitter , FaInstagram , FaArrowRight } from 'react-icons/fa'

export default function footer(){
    return(
      <>
        <footer>
          <div className="divImg">
            <img src="technology portocycle footer.png" alt="technology portocycle footer"/>

            <p>Documentação</p>

            <p>Dúvidas</p>

            <a href="">Quem somos</a>
          </div>

          <div>
            <p className="sobre">Sobre a NextIA</p>

            <div className="links">
              <a href="/">Home</a>
              <a href="/plataforma">Plataforma</a>
              <a href="/parceria">Parceria</a>
              <a href="/quem-somos">Quem somos</a>
            </div>
          </div>
        </footer>
      </>
    )
}