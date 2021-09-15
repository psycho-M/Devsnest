import { useState } from "react";
import Main from "./Main";
import Head from "./Head";

export default function Container(props) {
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
  