

const List = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];

    const usersInfo = [
        {
            username: "John",
            email: "john@gmail.com",
            city: "Pokhara"
        },
        {
            username: "Sujan",
            email: "sujan@gmail.com",
            city: "Kathmandu"
        },
        {
            username: "Dipesh",
            email: "dipesh@gmail.com",
            city: "Beni"
        },
        {
            username: "Bikram",
            email: "bikram@gmail.com",
            city: "Butwal"
        },
    ]

  return (
    <div>
        <h2>The list of numbers from 1 to 10 in JSx</h2>
        {
            numbers.map((number, indx) => (
                <ul key={indx}>
                    <li> {number} </li>
                </ul>
            ))
        }
        <hr />
        <h3>The User list with their information are as follows:</h3>
        {
            usersInfo.map((user) => (
                <ul key={Math.random() * 10 + 1}>
                    <li> UserName: {user.username} </li>
                    <li> E-mail: {user.email} </li>
                    <li> City: {user.city} </li>
                </ul>

            ))
        }
    </div>
  )
}

export default List