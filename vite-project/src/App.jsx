import "./App.css";
import Router from "./Routes/Router";
import { BrowserRouter } from "react-router";
import MainLayout from "./Layouts/layout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
