import Add from "./components/Add";
import Card from "./components/Card";
import Expression from "./components/Expression";
import FavouriteColor from "./components/FavouriteColor";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import MainContent from "./components/MainContent";
import Switcher from "./components/Switcher";
import WelcomeMessage from "./components/WelcomeMessage";
import CartCount from "./Conditional/CartCount";
import ConditionalRendering from "./Conditional/ConditionalRendering";
import UserStatus from "./Conditional/UserStatus";
import Weather from "./Conditional/Weather";
import ReactEvent from "./Events/ReactEvent";
import Greeting from "./ExerciseComponents/Greeting";
import ProductInfo from "./ExerciseComponents/ProductInfo";
import Counter from "./HooksInReactJs/Challenge/Counter";
import Profile from "./HooksInReactJs/Challenge/Profile";
import ShoppinsList from "./HooksInReactJs/Challenge/ShoppinsList";
import TodoList from "./HooksInReactJs/Challenge/TodoList";
import ExampleOne from "./HooksInReactJs/ExampleOne";
import ExampleThree from "./HooksInReactJs/ExampleThree";
import ExampleTwo from "./HooksInReactJs/ExampleTwo";
import CopyInput from "./HooksInReactJs/Portal/CopyInput";
import UseEffectHok from "./HooksInReactJs/useEffectHooks/UseEffectHok";
import UseState from "./HooksInReactJs/UseState";
import UseState1 from "./HooksInReactJs/UseState1";
import UseStateObject from "./HooksInReactJs/UseStateObject";
import UseStateWithArrayOfObject from "./HooksInReactJs/UseStateWithArrayOfObject";
import List from "./List/List";
import ProductList from "./List/ProductList";
import UserList from "./List/UserList";
import PropDrilling from "./PropDrilling/PropDrilling";
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
      <hr />
      {/* <ReactEvent/> */}

      <UseState/>
      <hr />
      <UseState1/>
      <hr />
      <UseStateObject/>
      <hr />
      <UseStateWithArrayOfObject/>
      <hr />
      <ExampleOne/>
      <ExampleTwo/>
      <ExampleThree/>
      <hr />
      <Counter/>

      <TodoList/>

      <Profile/>

      <ShoppinsList/>

      <FavouriteColor/>

      <CopyInput/>

      <Switcher/>

      <UseEffectHok/>

      <PropDrilling/>

      <Footer />
    </>
  );
};

export default App;
