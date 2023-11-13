import Header from '../components/header'
import Footer from '../components/footer'
import QuemSomosNext from '../components/quem-somos'
import Head from 'next/head'

export default ()=>{
    return(
        <div>
            <Head>
                <title> NextAI </title>
            </Head>
            <Header></Header>
            <QuemSomosNext></QuemSomosNext>
            <Footer></Footer>
        </div>
    )
}