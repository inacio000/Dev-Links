import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/HeaderLayout";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
