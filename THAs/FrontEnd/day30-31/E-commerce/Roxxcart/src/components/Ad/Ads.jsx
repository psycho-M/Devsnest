import "./Ad.css";
import AdCard from "./AdCard";
function Ads(){
    return(
        <div className="ad-container">
            <AdCard/>
            <AdCard/>
            <AdCard/>
            <AdCard/>
            <AdCard/>
        </div>
    )
}
export default Ads;