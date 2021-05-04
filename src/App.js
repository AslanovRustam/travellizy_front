import ListOfCard from "./components/card/listOfCards";
// import db from "./db.json";
import Filter from "./components/filter/filterSection";
import Container from "./components/container/container";

function App() {
  return (
    <Container>
      {/* <Filter items={db} /> */}
      <Filter />

      {/* <ListOfCard items={db} /> */}
      <ListOfCard />
    </Container>
  );
}

export default App;
