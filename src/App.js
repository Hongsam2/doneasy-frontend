import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectProposal from "./routes/ProjectProposal";
import CampaignProposal from "./routes/CampaignProposal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route  path={'/'} element={<ProjectProposal />}> </Route>
<Route path={'/save'} element={<ProjectProposal/>}/> */}
          <Route path={"/"} element={<CampaignProposal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
