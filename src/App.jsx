import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <h3 className='md:text-7xl text-4xl text-red-400 my-3'>Hello From Coders</h3>
      <PriceList></PriceList>
    </>
  )
}

export default App
