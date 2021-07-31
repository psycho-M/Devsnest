import "../css/input.css";
import {useSelector} from "react-redux";

function Output() {

    console.log("state", useSelector(state => state.user));
    const user = useSelector(state => state.user);
    return (
        <section>
            <h3 className="title">Output</h3>
            <h5>Username: { user.userName }</h5>
            <h5>Email: { user.email }</h5>
        </section>
    );
}

export default Output;