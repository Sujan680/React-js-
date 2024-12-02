const UserStatus = ({ loggedIn, isAdmin }) => {
  {
    if (loggedIn && isAdmin) {
      return <h2>Weocome admin</h2>;
    } else {
      return <h2>Welcome user</h2>;
    }
  }
};

export default UserStatus;
