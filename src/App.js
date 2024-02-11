
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
  <>

{/* <Navbar title="TextUtiles" abouttext="About Text"/> */}
{/* <Navbar/> */}

<Navbar title="TextUtiles" />


<div className="container my-1">
<TextForm heading="Enter the text to analyse below"/>
{/* <About/> */}
</div>

  </>
  );
}

export default App;
