import { Fragment } from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Button text="Start" />
    </Fragment>
  );
}

export default App;
