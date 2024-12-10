import React from "react";
import UserProvider from "./components/UserContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import CounterApp from "./useReducer/CounterApp";
import ChallengeCounter from "./useReducer/ChallengeCounter";
import Example from "./useRef/Example";
import Counter from "./useRef/Counter";
import Timer from "./useRef/Timer";
import UseFetch from "./CustomHooks/UseFetch";
import DisplayData from "./CustomHooks/DisplayData";
import UseIdHook from "./useIdhook/useIDHook";

const App = () => {
  const [data] = UseFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>

      {/* counter with useReducer hook  */}
      <p>
        <strong>useReducer</strong> is a React hook that provides a more
        structured way to manage complex state logic in a component. It's an
        alternative to useState and is particularly useful when state updates
        depend on previous state or involve multiple sub-values.
      </p>
      <CounterApp />
      <ChallengeCounter />

      {/* useref  hooks*/}

      <h3>UseRef hook:</h3>
      <li>Direct Dom manipulation.</li>
      <li>Storing mutable data that doesn't need to trigger re-renders.</li>
      <li>Persistent value</li>
      <br />
      <Example />
      <hr />
      <Counter />
      <hr />
      <Timer />

      {/* CUSTOM HOOKS  */}
      <div>
        <h3>Some list of famous dialogue:</h3>
        {data &&
          data.map((item) => {
            return <li key={item.id}>{item.body}</li>;
          })}
      </div>
      <hr />
      <DisplayData />

      {/* useId hook  */}
      <UseIdHook />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, illum?
      </p>
      <UseIdHook/>
    </div>
  );
};

export default App;
