
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <div >
      <Header />
      <main className='wrapper_2'>
        <Statistics />
      </main>
      <Footer />
    </div>

   
  );
}

export default App;
