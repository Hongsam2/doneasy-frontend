import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectProposal from "./routes/dani/ProjectProposal";
import ContentsOfProjectReview from "./routes/dani/ContentOfProjectReview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/saveReview"} element={<ContentsOfProjectReview />} />
          <Route path={"/save"} element={<ContentsOfProjectReview />} />
          <Route path={"/"} element={<ProjectProposal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
