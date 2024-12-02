
const Greeting = () => {
    const message = "Welcome to JSX learning";
    const currentDate = new Date();
    

  return (
    <div>
        <h1> {message} </h1>
        <p> Date: {currentDate.getDate()} </p>
    </div>
  )
}

export default Greeting