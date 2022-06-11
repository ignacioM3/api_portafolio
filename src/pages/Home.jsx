import { About } from '../components/About';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import  Portafolio  from '../components/Portafolio';
import { Contact } from '../components/Contact';



const Home = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Main />
      </div>
      <About />
      <Portafolio />
      <Contact />

    </>
  )
}

export default Home