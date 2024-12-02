import Add from "./components/Add";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  return (
  <>  
      <Header/>
      <Greet/>
      <Add/>
      <MainContent/>
      <Footer/>
  </>
  )
}

export default App;