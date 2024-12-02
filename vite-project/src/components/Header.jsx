
const Header = () => {
  return (
    <header>
        <h1  style={{
        backgroundColor: "darkcyan"
    }}>Welcome to my Website!</h1>
        <nav>
            <ul>
                <a href="/home"><li>Home</li></a>
                <a href="/about"><li>About</li></a>
               <a href="/contact"> <li>Contact</li></a>
            </ul>
        </nav>
    </header>
  )
}

export default Header;