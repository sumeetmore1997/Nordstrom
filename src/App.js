import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Shopwhat from './Components/Shopwhat';
import Landing from './Components/Landing';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      {/* <Shopwhat/>
      <Landing/>
      <Footer/> */}
    </div>
  );
}

export default App;
