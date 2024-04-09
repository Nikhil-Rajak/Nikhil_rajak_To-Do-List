import AddToDo from "./components/addtodo";
import Navbar from "./components/navbar";
import Todos from "./components/todos";
import "./App.css";

const App = () => {
  return (
    <main>
      <h1 className="heading-text">
        {" "}
        Enhanced Todo List Application ( React & TypeScript )
      </h1>
      <p className="sub-head">
        "Empower your day, one task at a time with our TypeScript and
        React-powered todo list app!"
      </p>
      <AddToDo />
      <div className="box-container">
        <Navbar />
        <Todos />
      </div>
    </main>
  );
};

export default App;
