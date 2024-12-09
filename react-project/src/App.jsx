import React from "react";
import UserProvider from "./components/UserContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import CounterApp from "./useReducer/CounterApp";
import ChallengeCounter from "./useReducer/ChallengeCounter";
import Example from "./useRef/Example";

const App = () => {
  return (
    <div>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>

    {/* counter with useReducer hook  */}
      <CounterApp/>
      <ChallengeCounter/>

      {/* useref  hooks*/}

      <Example/>
    </div>
  );
};

export default App;
