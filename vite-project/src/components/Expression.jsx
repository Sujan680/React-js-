// Expression in JSX: With jsx you can write expression inside curly braces .
// The expression can be a React variable or property or any other
// valid Javascript expresson. Jsx will execute the expression and return the result .


const Expression = () => {
    const username = "Sujan";
    const city = 'Pokhara';
    const Add = (a,b) => a + b;
  return (
    <div>
       <p> {`My name is ${username} and I am from ${city}`} </p>
       <h4>  {`Addition: ${Add(3,4)}`} </h4>
    </div>
  )
}

export default Expression