import './App.css';

function Head(props) {
  return (
    <h1 className="heading">{props.heading}</h1>
  );
}

function List(props) {
  return (
    <li className="item">
      
      <Head heading={props.head} />
      <article className="item-content">you have consumed {props.value} cals today</article>
    </li>
  );
}

function Main(props) {
  return (
    <div className={props.className}>
      <ul className="item-list">
        <List head="Pizza" value="56"/>
        <List head="Burger" value="69"/>
        <List head="Coke" value="500"/>
        <List head="Brownie" value="180"/>
        <List head="Fried Rice" value="90"/>
        <List head="Lasagna" value="200"/>
        <List head="Pani Puri" value="10"/>
      </ul>
    </div>
  );
}

function Container(props) {
  return (
    <div className="container">
      <Head heading="Calorie Read Only" />
      <Main className="main" />
    </div>
  )
}

function App(props) {
  return (
    <Container />
  )
}

export default App;
