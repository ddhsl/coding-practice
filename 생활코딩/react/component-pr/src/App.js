function Header() {
  return <header>
    <h1><a>Web</a></h1>
  </header>
}

function Nav(){
  return <nav>
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ol>
  </nav>
}

function Article() {
  return <article>
    <h2>Welcome to Web Page</h2>
    <p>This is a simple web page.</p>
  </article>
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}
export default App;
