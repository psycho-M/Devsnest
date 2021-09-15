import "./Ad.css"
import product from "../../data";

function AdCard(){
    const num = Math.floor(Math.random()*product.length)
    const image = product[num].main_img;

    return(
        <div className="ad-card" style={{ backgroundImage: `url("${image}")`  }}>
            <div className="overlay">
            <h2>New Arrivals Are Now In!</h2>
            <button><h5 style={{color:"black"}}>SHOW DETAILS</h5></button>
            </div>
        </div>
    )
}
export default AdCard;