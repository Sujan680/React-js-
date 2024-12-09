import React from "react";
import UserProvider from "./components/UserContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import CounterApp from "./useReducer/CounterApp";
import ChallengeCounter from "./useReducer/ChallengeCounter";

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
    </div>
  );
};

export default App;
