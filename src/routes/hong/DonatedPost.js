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
                `http://localhost:8080/project-board/find-all-donated/${projectTag}`
            )
            .then((response) => {
                console.log(response);
                setId(response.data.projectId);
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
        <div className="border shadow-lg w-6/12 mx-auto mt-12 max-w-sm">
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
