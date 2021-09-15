import "./selected.css"
import product from "../../data";

function SelectedCard(){
    const num = Math.floor(Math.random()*product.length)
    const image = product[num].main_img;
    const name = product[num].name
    const price = product[num].price

    return(
        <div className="selected-cards">
            <div className="product-slides">
                <img src={image} alt=""/>
                <p>{name}</p>
                <h4 style={{color:"black"}}><span style={{fontFamily:"sans-serif"}}>₹</span>{price}</h4>
            </div>
        </div>
    )
}
export default SelectedCard;