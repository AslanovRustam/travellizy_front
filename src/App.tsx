import { Switch, Route } from "react-router-dom";
import ListOfCard from "./components/card/listOfCards";
import Filter from "./components/filter/filterSection";
import Container from "./components/container/container";
import CardDetail from "./components/card/cardDetail";

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/travellizy_front" exact>
          <Filter />
          <ListOfCard />
        </Route>

        <Route path="/travellizy_front/:itemName">
          <CardDetail />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
