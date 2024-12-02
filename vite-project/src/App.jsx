import Add from "./components/Add";
import Expression from "./components/Expression";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import Greeting from "./ExerciseComponents/Greeting";
import ProductInfo from "./ExerciseComponents/ProductInfo";
import List from "./List/List";
import ProductList from "./List/ProductList";
import UserList from "./List/UserList";

const App = () => {
  return (
  <>  
    {/* This is a components in jsx  */}
      <Header/>
      <hr />
      <Greet/>
      <Add/>
      <MainContent/>
      {/* This is a jsx in react js  */}
      <hr />
      <WelcomeMessage/>
      <JSXRules/>
      <Expression/>
      <hr />
      <Greeting/>
      <ProductInfo/>
      <hr />
      <List/>
      <hr />
      <UserList/>
      <hr />
      <ProductList/>

      <Footer/>
  </>
  )
}

export default App;