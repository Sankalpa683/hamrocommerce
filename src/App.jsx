import Navbar from './components/navbar'
import Hero from './components/hero';
import './App.css'
import "./index.css";

function App() {

  return (
    <>
      <Navbar />
      <main className='w-full max-w-7xl	 mx-auto'>
        <Hero />
        <hr />
      </main>
    </>
  )
}

export default App
