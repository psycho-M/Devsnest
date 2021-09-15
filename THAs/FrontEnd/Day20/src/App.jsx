import './App.css';
import {useState} from 'react';

function Head(props) {
  return (
    <h1 className="heading">{props.heading}</h1>
  );
}

function List({id, head, value, items, setItems}) {
  // const currID = props.id;
  // let items = props.items;
  // let setItems = props.setItems;
  // console.log(items);
  // console.log(currID);
  
  // const ID = useState(id);

  const deleteItem = () => {
    const updateItemList = items.filter((item) => item.id != id);
    console.log("updatedList: ", updateItemList);
    setItems(updateItemList);
    // console.log(items);
  };

  return (
    <li key={id} className="item">
      <div className="item-head">
        <Head heading={head} />
        <button className="del-btn" onClick={deleteItem}>Delete</button>
      </div>
      <article className="item-content">you have consumed {value} cals today</article>
    </li>
  );
}

function Main(props) {
  const [items, setItems] = useState([
    {
      value: 56,
      head: "Pizza",
      id: 0
    },
    {
      value: 69,
      head: "Burger",
      id: 1
    },
    {
      value: 500,
      head: "Coke",
      id: 2
    },
    {
      value: 180,
      head: "Brownie",
      id: 3
    },
    {
      value: 180,
      head: "Fried Rice",
      id: 4
    },
    {
      value: 200,
      head: "Lasagna",
      id: 5
    },
    {
      value: 10,
      head: "Pani Puri",
      id: 6
    }
  ]);
  console.log(items);

  // const deleteItem = (id) => {
  //   let updateItemList = items.filter(item => item.id !== id);
  //   setItems([...updateItemList]);
  // }

  return (
    <div className={props.className}>
      <ul className="item-list">
        {items.length ? (
          items.map(({value, head, id}) => (
            <List  
              key = {id}
              id = {id}
              head = {head}
              value = {value}
              items = {items}
              setItems = {setItems}
              // onClick = {deleteItem}
            />
          ))
        ) : (
          <h2 style={{alignItems: 'center'}}>Khaali List</h2>
        )}
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
