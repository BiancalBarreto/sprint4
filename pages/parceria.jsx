import Header from '../components/header'
import Footer from '../components/footer'
import ParceriaNext from '../components/parceria'
import Head from 'next/head'

export default ()=>{
    return(
        <div>
            <Head>
                <title> NextAI </title>
            </Head>
            <Header></Header>
            <ParceriaNext></ParceriaNext>
            <Footer></Footer>
        </div>
    )
}