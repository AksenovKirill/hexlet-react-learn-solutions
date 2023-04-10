import "./App.css";
import Card from "./Card/Card";
import Component from "./Component/Component";
import MyForm from "./MyForm/MyForm";
import TodoBox from "./TodoBox/TodoBox";

function App() {
  return (
    <div className="App">
      {false && <Component />}
      {false && <MyForm />}
      {false && <TodoBox />}
      {true && (
        <Card>
          <Card.Body>
            <Card.Title>title</Card.Title>
            <Card.Text>1</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default App;
