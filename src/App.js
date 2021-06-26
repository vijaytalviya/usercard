import "./App.css";
import { user } from "./data";
import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <Card user={user[0]} />
      <Card user={user[1]} />
    </div>
  );
}

export default App;
