export default function PlataformaNext(){
    return(
        <>
           <div id="plataforma">
                <div className="nossaPlataforma">
                    <img className="princImg" src="chat elie.png" alt="chat" />

                    <h2>NOSSA PLATAFORMA</h2>

                    <p>Presando a praticidade em primeiro lugar:</p>

                    <p>Ter total flexibilidade de horários, o site estará sempre a sua disposição.</p>

                    <p>Se livrar da parte burocratica de seguros, basta apenas nos fornecer os dados necessários, para ter seu seguro.</p>

                    <p>O site é intuitivo e pratico, após fazer seu cadastro e o da sua bike, sera gerado um QRcode, que quando escaneado pela camera do seu celular, abre em uma guia onde você podera tirar fotos da sua bike.</p>
                </div>

                <div className="processo">
                    <img src="processo.png" alt="conversa" />

                    <div className="processo2">
                        <p>Cliente inicia o atendimento on-line dando inicio ao processo de contratação e vistoria, junto ao requerimento de documentos necessários </p>

                        <p>Após o envio dos documentos e fotos da bike, tudo passará por uma analíse cuidadosa em nosso sistema</p>

                        <p>Depois de tudo feito e devidamente analisado, a contratação do seguro será aprovada e enviada à nossa empresa parceira que poderá entrar em contato a qualquer momento</p>
                    </div>

                    <a className="decoration" href="/login">Clique aqui para começar</a>

                </div>

                
           </div>
        </>
    );
}