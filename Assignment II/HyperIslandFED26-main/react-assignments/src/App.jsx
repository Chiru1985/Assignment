import "./App.css";
import ChildComponent from "./ChildComponent";
import EffectComponent from './Components/EffectComponent';
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import GotCharactersList from "./Components/EffectComponent";

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
      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data */}
      <ChildComponent person={person} />
      <MyStateComponent/>
      <EffectComponent />
      <GotCharactersList/>
    </div>
  );
}


export default App;
