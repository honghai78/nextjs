import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import './styles.scss'
export default ({ children, title = 'This is the default title' , displayDriverIndex=0}) => (
  <div>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
      <Header displayDriverIndex = {displayDriverIndex}/>
    </header>

    <main>
      { children }
    </main>

    <Footer />
  </div>
)
