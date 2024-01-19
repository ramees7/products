import './App.css';
import Row from './components/Row';
import Nav from './components/Nav';
import request from './Request';
import Banner from './components/Banner';
import Carousal from './components/Carousal';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner fetchUrl={request.fetchElectronics}/>
      <Banner fetchUrl={request.fetchJewelery}/>
      <Banner fetchUrl={request.fetchMensClothing}/>
      <Banner fetchUrl={request.fetchWomensClothing}/>
      <Carousal/>
      <Row title='All Products' fetchUrl={request.fetchAllProducts}/>
      <Row title='Electronics' fetchUrl={request.fetchElectronics}/>
      <Row title='Jewelery' fetchUrl={request.fetchJewelery}/>
      <Row title="Men's Clothing'" fetchUrl={request.fetchMensClothing}/>
      <Row title="Women's Clothing" fetchUrl={request.fetchWomensClothing}/>
    </div>
  );
}

export default App;
