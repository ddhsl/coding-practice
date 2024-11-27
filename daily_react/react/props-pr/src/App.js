function Header(props) {
  console.log('props', props, props.title);
  return <header>
    <h1><a>{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a>{t.title}</a></li>)  //li태그를 동적으로 만들고 있기 때문에 키를 반드시 넣어주어야 오류가 발생하지 않음
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
  </article>
}

function App() {
  const topics = [
    {id:1, title:'Home', body:'this is about...'},
    {id:2, title:'About', body:'this is about...'},
    {id:3, title:'Contact', body:'this is about...'},
  ]
  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello,Web"></Article>
    </div>
  );
}
export default App;
