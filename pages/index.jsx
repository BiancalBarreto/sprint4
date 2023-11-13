import Header from '../components/header'
import Footer from '../components/footer'
import HomeNext from '../components/home'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title> NextAI </title>
      </Head>
        <Header></Header>
        <HomeNext></HomeNext>
        <Footer></Footer>
    </div>
  )
}
