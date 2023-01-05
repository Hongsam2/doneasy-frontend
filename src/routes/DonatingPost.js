import { useState } from "react";
import { useLocation } from "react-router";
import TinyDonatingScreen from "../components/TinyDonatingScreen";

function DonatingPost ({}) {
    const [projectLoading, setProjectLoading] = useState(false);
    const [projectList , setProjectList] = useState([]);
    const location = useLocation();
    
    
    return (
        <div className="border shadow-lg w-6/12 mx-auto mt-12 max-w-sm">

        <div>
            {projectLoading &&
            projectList.map((TinyDonatingScreen) =>{
                return(
                    
                    <TinyDonatingScreen
                    key={TinyDonatingScreen.project.id}
                    />
                    );
                })}
                </div>
        </div>
                
    );
}

export default DonatingPost;