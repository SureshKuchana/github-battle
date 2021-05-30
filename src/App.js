import { render } from "react-dom";
import Popular from "./components/Popular.jsx";

function App() {
  return (
    <div className="container">
      <Popular />
    </div>
  );
}

export default App;

render(<App />, document.getElementById("root"));
