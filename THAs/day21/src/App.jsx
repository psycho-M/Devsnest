import './App.css';
import {useState} from 'react';

function Head(props) {
  return (
    <h1 className="heading">{props.heading}</h1>
  );
}

function List({id, head, value, items, setItems, setKeys}) {
  let [isEditing, setIsEditing] = useState(false);

  const deleteItem = () => {
    const updateItemList = items.filter((item) => item.id !== id);
    console.log("updatedList: ", updateItemList);
    setItems(updateItemList);

    if(updateItemList.length === 0) {
      setKeys(0);
    }
      
    console.log();
  };

  const editItem = () => {
    let tempEdit = isEditing;
    console.log(tempEdit);
    setIsEditing(!tempEdit);
    // console.log(isEditing);

    // console.log(tempEdit);
  }

  const updateItem = (e) => {
    console.log(e.target.value);
    let tempValue = e.target.value;
    let tempItems = items.slice();
    const isNumber = e.target.type === "number" ? true : false;
    if(tempValue === "") {
      // let currItem = tempItems.find((item) => {
      //   return item.id === id ? item : null;
      // })
      // console.log(currItem);
      // e.target.value = isNumber ? currItem.value : currItem.head;
      return;
    }
    
    console.log("tempValue: ", tempValue);

    tempItems.map((item) => {
      if(item.id === id) {
        if(isNumber) {
          item.value = parseInt(tempValue);
        } else {
          item.head = tempValue;
        }
      }
      return item;
    });

    setItems([...tempItems]);
  }

  return (
    <li key={id} className="item">
      <div className="item-head">
        {isEditing ? (
          <input id="update-head" className="input" type="text" name="item-head" value={head} onChange={updateItem} required/>
        ) : (
          <Head heading={head} />
        )}
        
        <button className="btn edit-btn" onClick={editItem}>
          {isEditing ? ("Done") : ("Edit")}
        </button>
        <button className="btn del-btn" onClick={deleteItem}>Delete</button>
      </div>
      <article className="item-content">you have consumed {
        isEditing ? (
          <input id="update-value" className="input" type="number" name="item-head" value={value} onChange={updateItem} min="0" required/>
        ) : (
          <span>{value}</span>
        )} cals today</article>
    </li>
  );
}

function Main({className ,items, setItems, setKeys}) {

  return (
    <div className={className}>
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
              setKeys = {setKeys}
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
  let [keys, setKeys] = useState(6);

  const [items, setItems] = useState([]);

  const handleEnter = (e) => {
    if(e.key === "Enter")
      addFoodItem();
  }

  const addFoodItem = () => {
    
    let foodInput = document.getElementById("food-input").value.trim();
    let calorieInput = document.getElementById("calorie-input").value;
    let tempItems = items.slice();

    console.log("items list length: " + tempItems.length);

    if(foodInput === ""){ return;} 

    console.log("food input: " + foodInput + "\ncalorieInput: " + calorieInput);

    setKeys(++keys);
    tempItems.push({
      head: foodInput,
      value: calorieInput,
      id: keys
    });
    setItems([...tempItems]);
    console.log("new items list: " + items);

    document.getElementById("food-input").value = "";
    document.getElementById("calorie-input").value = "";
    
    console.log("curr Key No: " +keys);
    // e.preventDefault();
  }


  return (
    <div className="container">
      <Head heading="Calorie Read Only" />
      <form onKeyPress={handleEnter} className="container-input">
        <input className="input" type="text" name="food-input" id="food-input" placeholder="Food" required/>
        <input className="input" type="number" name="calorie-input" id="calorie-input" placeholder="Calorie" min="0" required/>
        <button type="button" className="btn add-btn" onClick={addFoodItem}>Add</button>
      </form>
      <Main 
        className="main"
        items={items}
        setItems={setItems}
        setKeys={setKeys} />
    </div>
  )
}

function App() {
  return (
    <Container />
  )
}

export default App;
