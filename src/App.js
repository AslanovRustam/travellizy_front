import ListOfCard from "./components/listOfCards";
import db from "./db.json";

function App() {
  return <ListOfCard items={db} />;
}

export default App;
