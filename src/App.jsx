import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="wrapper">
      <Button
        color="danger"
        border="lg"
        size="lg"
        radius="lg"
        style={{ color: "black", margin: "100px" }}
        onClick={() => console.log("clicked")}
      >
        Nein
      </Button>
    </div>
  );
}

export default App;
