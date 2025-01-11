import "./App.css";
import { AllFilters, Header } from "./components/Components";
import { FlightResults } from "./pages/Page";

function App() {
  return (
    <>
      <Header />
      <AllFilters />
      <FlightResults />
    </>
  );
}

export default App;
