
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <div >
      <Header /> 
      <Hero/>
      <main className='wrapper_2 '>
      
        <Statistics />
      </main>
      <Footer />
    </div>

   
  );
}

export default App;
