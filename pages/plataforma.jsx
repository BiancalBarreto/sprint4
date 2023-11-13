import Header from '../components/header'
import Footer from '../components/footer'
import PlataformaNext from '../components/plataforma'
import Head from 'next/head'

export default ()=>{
    return(
        <div>
            <Head>
                <title> NextAI </title>
            </Head>
            <Header></Header>
            <PlataformaNext></PlataformaNext>
            <Footer></Footer>
        </div>
    )
}