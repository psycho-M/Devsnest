// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function Rout() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

//Nested Routing

import React from "react";
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Link, 
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function Rout() {
    return (
        <Router>
            <section>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/topics" >Topics</Link></li>
                </ul>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </section>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Topics() {
    let match = useRouteMatch();

    return (
        <section>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props Vs. State
                    </Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </section>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>
}
