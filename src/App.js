import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
