import "./App.css";
import Button from "./components/Button";
import { buttonProps } from "./props/buttonProps.js";

function App() {
  // const buttonProps = {
  //   color: "red",
  //   children: "Click",
  //   onClick: function () {
  //     console.log("clicked");
  //   },
  //   style: {
  //     padding: "15px",
  //     borderRadius: "10px",
  //     fontSize: "18px",
  //     border: "5px solid green",
  //   },
  // };

  return (
    <>
      <Button {...buttonProps} />
    </>
  );
}

export default App;
