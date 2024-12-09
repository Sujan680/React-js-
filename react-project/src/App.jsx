import React from "react";
import UserProvider from "./components/UserContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import CounterApp from "./useReducer/CounterApp";

const App = () => {
  return (
    <div>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>

    {/* counter with useReducer hook  */}
      <CounterApp/>
    </div>
  );
};

export default App;
