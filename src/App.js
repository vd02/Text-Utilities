import './App.css';
import Navbar from './components/Navbar'; 
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="Text Utilities"/>
    <div className="container">
    <Textform title="Enter your Text" buttonFn="Convert to Uppercase"/>
    </div>
    </>
  );
}

export default App;
