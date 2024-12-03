import Add from "./components/Add";
import Card from "./components/Card";
import Expression from "./components/Expression";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";
import CartCount from "./Conditional/CartCount";
import ConditionalRendering from "./Conditional/ConditionalRendering";
import UserStatus from "./Conditional/UserStatus";
import Weather from "./Conditional/Weather";
import Greeting from "./ExerciseComponents/Greeting";
import ProductInfo from "./ExerciseComponents/ProductInfo";
import List from "./List/List";
import ProductList from "./List/ProductList";
import UserList from "./List/UserList";
import ChildrenProps from "./props/ChildrenProps";
import Person from "./props/Person";
import Product from "./props/Product";
import Props from "./props/Props";
import StylingComponent from "./StylingComponent";

const App = () => {
  return (
    <>
      {/* This is a components in jsx  */}
      <Header />
      <hr />
      <Greet />
      <Add />
      <MainContent />
      {/* This is a jsx in react js  */}
      <hr />
      <WelcomeMessage />
      <JSXRules />
      <Expression />
      <hr />
      <Greeting />
      <ProductInfo />
      <hr />
      <List />
      <hr />
      <UserList />
      <hr />
      <ProductList />

      <Props />
      <Person name="Dinesh" age="34" />
      <Product name="Apple" price="$343" />

      <ChildrenProps>
        <h2>My Card One</h2>
        <p>This is some content for card 1</p>
      </ChildrenProps>
      <ChildrenProps>
        <h2>My Card Two</h2>
        <p>This is some content for card 2</p>
      </ChildrenProps>

      <ConditionalRendering />

      <CartCount/>

      <Weather temperature={43}/>

      <UserStatus loggedIn={true} isAdmin={true} />

      <StylingComponent/>

      <Card/> 

      <Footer />
    </>
  );
};

export default App;
