function Header(props) {
  return <header>
    <h1><a onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} onClick={event=>{ //target을 사용하기 위해 파라미터로 event를 준다.
        event.preventDefault();
        props.onChangeMode(event.target.id);  
      }}>{t.title}</a>
    </li>)  
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
      <Header title="WEB" onChangeMode={()=>{    //onChangeMode 는 개발자가 임의로 만드는 props의 이름이다
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=> {
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello,Web"></Article>
    </div>
  );
}
export default App;
