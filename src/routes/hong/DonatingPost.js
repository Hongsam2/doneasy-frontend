import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import TinyDonatingScreen from '../../components/hong/TinyDonatingScreen';

function DonatingPost({}) {
    const [projectLoading, setProjectLoading] = useState(false);
    const [projectList, setProjectList] = useState([]);
    const [projectTag, setProjectTag] = useState('all');
    const location = useLocation();

    const [projectId, setId] = useState(0);
    const [projectEndDate, setProjectEndDate] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const [presentPrice, setPresentPrice] = useState(0);
    const [targetPrice, setTargetPrice] = useState(0);
    const [organizationNickname, setOrganizationNickname] = useState(0);
    const [projectImage, setProjectImage] = useState('');

    useEffect(() => {}, []);

    useEffect(() => {
        axios
            .get(
                `http://localhost:8080/project-board/find-all-donating/${projectTag}`
            )
            .then((response) => {
                console.log(response);
                setId(response.project_id);
                setProjectEndDate(response.project_enddate);
                setProjectImage(response.image_name);
                setProjectTitle(response.project_title);
                setPresentPrice(response.present_price);
                setTargetPrice(response.target_price);
                setOrganizationNickname(response.organization_nickname);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="border shadow-lg w-6/12 mx-auto mt-12 max-w-sm position:fixed">
            <ul className="list-disc object-center position:fixed">
                <button className="mx-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow position:fixed">
                    All
                </button>
                <button className="mx-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow position:fixed">
                    Children
                </button>
                <button className="mx-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow position:fixed">
                    Teenager
                </button>
                <button className="mx-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow position:fixed">
                    Elder
                </button>
                <button className="mx-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow position:fixed">
                    Disable
                </button>
                <button className="mx-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow position:fixed">
                    Society
                </button>
                <button className="mx-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow position:fixed">
                    Earth
                </button>
            </ul>
            <div>
                {projectLoading &&
                    projectList.map((value) => {
                        return <TinyDonatingScreen key={value.project.id} />;
                    })}
            </div>
        </div>
    );
}

export default DonatingPost;
