import "./App.css";
import { Filters, Header, Sort } from "./components/Components";
import { FlightResults } from "./pages/Page";

function App() {
  return (
    <>
      <Header />
      <Filters />
      <Sort />
      <FlightResults />
    </>
  );
}

export default App;
