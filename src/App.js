import './App.css';
import ComponenteA from './components/ComponenteA';
import {contacto} from "./components/contacto"






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponenteA perfil={contacto}/>
      </header>
    </div>
  );
}

export default App;
