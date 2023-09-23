
import './App.css';
import Banner from './Component/Banner/Banner';
import Navbar from './Component/Navbar/Navbar';
import RowPost from './Component/RowPost/RowPost';
import { Action, Documentries, Originals, Romance } from './urls';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <RowPost title={"Netflix Originals"} url={Originals}/>
     <RowPost title={"Action"} url={Action} isSmall/>
     <RowPost title={"Romance"} url={Romance} isSmall/>
     <RowPost title={"Documentries"} url={Documentries} isSmall/>
    </div>
  );
}

export default App;
