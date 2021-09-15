import "./selected.css";
import Carousel, {consts} from 'react-elastic-carousel';
import SelectedCard from "./SelectedCard";
import product from "../../data";

function SelectedForYou(){
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ]

    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <i class="fas fa-arrow-left"></i> : <i class="fas fa-arrow-right"></i>
        return (
          <button onClick={onClick} disabled={isEdge}>
              {pointer}
          </button>
        )
      }

    return(
        <div className="slides">
            <p style={{marginLeft:"9rem", fontSize:"1.2rem"}}>Selected For You</p>
        <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
        {product.map(item => <div key={item.id}>
            <SelectedCard/>
        </div>)}
        </Carousel>
        </div>
    )
}

export default SelectedForYou;