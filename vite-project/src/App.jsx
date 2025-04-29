import "./App.css";
import Router from "./Routes/Router";
import { BrowserRouter } from "react-router";
import MainLayout from "./Layouts/layout";
import { children } from "react";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Router />
        {children}
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
