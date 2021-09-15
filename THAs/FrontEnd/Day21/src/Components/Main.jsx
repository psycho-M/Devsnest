import List from './List';

export default function Main({className ,items, setItems, setKeys}) {

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