import "./App.css";
import ChildComponent from "./ChildComponent";
import EffectComponent from './Components/EffectComponent';
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import GotCharactersList from "./Components/EffectComponent";
import PropsComponent from './Components/PropsComponent';

import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Outlet,
} from "react-router-dom";
import Error from "./Components/Error";

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  return (
    <div>
      <header>
        <h1>This is React</h1>
      </header>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/MyStateComponent">MyState Component</NavLink>
            </li>
            <li>
              <NavLink to="/GotCharactersList">Game Of Thrones</NavLink>
            </li>
            <li>
              <NavLink to="/PropsComponent">Props Component</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
        <Routes>
          <Route
            path="/PropsComponent"
            element={<PropsComponent personDetails={person} />}
          />
          <Route path="/MyStateComponent" element={<MyStateComponent />} />
          <Route path="/GotCharactersList" element={<GotCharactersList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data */}
      <ChildComponent person={person} />
      <MyStateComponent/>
      <EffectComponent />
      <GotCharactersList/>
    </div>
  );
}


export default App;
