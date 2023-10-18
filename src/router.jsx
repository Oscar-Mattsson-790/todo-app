import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
// import TodoListPage from "./views/TodoListPage/TodoListPage";

const RouterComponent = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      {/* <Route path="todolist" element={<TodoListPage />} /> */}
    </Routes>
  );
};

export default RouterComponent;
