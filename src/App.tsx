import Todos from "@/components/Todos";
import "./App.css";

const TODOS = [
  "Learn TypeScript",
  "Learn Types",
  "Learn Type Alias / Definitions",
  "Learn Interface",
  "Learn Generics",
];

function App() {
  return (
    <>
      <h1>React TypeScript</h1>
      <Todos items={TODOS} />
    </>
  );
}

export default App;
