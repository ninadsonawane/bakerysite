/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Email from '../sections/Email'
import Feature from '../sections/Feature'
import Footer from '../sections/Footer'
import Team from '../sections/Team'
import Testimonials from '../sections/Testimonials'
import Top from '../sections/Top'
import Workflow from '../sections/Workflow'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Mamas Bakery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossOrigin="anonymous"
        />
      </Head>

      
      <Top />
      <Feature />
      <Email />
      
      <Team />
      <Testimonials />
      <Workflow />
      <footer >
        <Footer />
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>

       <script
         src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
         crossOrigin></script>
       
       <script
         src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
         crossOrigin></script>
       
       <script>var Alert = ReactBootstrap.Alert;</script>

      </footer>
    </div>
  )
}
