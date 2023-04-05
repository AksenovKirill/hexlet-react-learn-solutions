import "./App.css";
import Component from "./Component/Component";
import MyForm from "./MyForm/MyForm";

function App() {
  return (
    <div className="App">
      {false && <Component />}
      <MyForm />
    </div>
  );
}

export default App;
