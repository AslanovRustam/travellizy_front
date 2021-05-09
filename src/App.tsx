import { Switch, Route } from "react-router-dom";
import ListOfCard from "./components/card/listOfCards";
import Filter from "./components/filter/filterSection";
import Container from "./components/container/container";
import CardDetail from "./components/card/cardDetail";

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <Filter />
          <ListOfCard />
        </Route>

        <Route path="/laptop/:itemName">
          <CardDetail />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
