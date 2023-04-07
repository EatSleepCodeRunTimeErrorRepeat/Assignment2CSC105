import "./App.css";
import Home from "./components/Home";
import Todo from "./components/Todo";
import TodoPage from "./pages/Todopage";
import Calendar from "./pages/Calendar";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route exect path="/" element={<Home />} />
            <Routh path="/todo" element={<Todo />} />
            <Routh path="/today" element={<TodoPage />} />
            <Routh path="/calendar" element={<Calendar />} />
        </Routes>
    );
}
export default App;