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
import Person from "./props/Person";
import Product from "./props/Product";
import Props from "./props/Props";

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

      <Props/>
      <Person name="Dinesh" age="34" />
      <Product name="Apple" price="$343" />
      <Footer/>
  </>
  )
}

export default App;