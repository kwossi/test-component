//import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button
        color="secondary"
        border="large"
        size="large"
        radius="full"
        style={{ textDecoration: "underline", color: "green" }}
      >
        Nein!
      </Button>
    </>
  );
}

export default App;
