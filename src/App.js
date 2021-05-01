import ListOfCard from "./components/card/listOfCards";
import db from "./db.json";
import Filter from "./components/filter/filterSection";
import Container from "./components/container/container";

function App() {
  return (
    <Container>
      <Filter items={db} />
      <ListOfCard items={db} />
    </Container>
  );
}

export default App;
