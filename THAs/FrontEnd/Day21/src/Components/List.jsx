import { useState } from "react";
import Head from "./Head";

export default function List({id, head, value, items, setItems, setKeys}) {
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
    //   console.log(e.target.value);
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
      
    //   console.log("tempValue: ", tempValue);
  
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