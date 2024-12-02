
const UserList = () => {
    const users = [
        {id: 1, name: 'Alice', age: 25},
        {id: 2, name: 'Bob', age: 30},
        {id: 3, name: 'Charlie', age: 22}
    ]

  return (
    <div>
        <h2>The Users list with name and age are:</h2>
        {
            users.map(({id, name, age}) => (
                <div key={id}>
                    <p>Name: {name}</p>
                    <p>Age: {age} </p>
                </div>
            ))
        }
    </div>
  )
}

export default UserList