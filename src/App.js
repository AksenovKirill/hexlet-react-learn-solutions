import "./App.css";
import Component from "./Component/Component";
import MyForm from "./MyForm/MyForm";
import TodoBox from "./TodoBox/TodoBox";

function App() {
  return (
    <div className="App">
      {false && <Component />}
      {false && <MyForm />}
      {true && <TodoBox />}
    </div>
  );
}

export default App;
