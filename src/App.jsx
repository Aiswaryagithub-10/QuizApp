// In src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import Instruction from "./pages/Instruction";
import Quiz from "./pages/Quiz"; // Correct import of the Quiz component
import Result from "./pages/Result";
import Answer from "./pages/Answer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserInfo />} />
      <Route path="/instruction" element={<Instruction />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      <Route path="/answer" element={<Answer />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
