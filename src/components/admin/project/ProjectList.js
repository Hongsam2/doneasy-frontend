import axios from 'axios';
import { useEffect, useState } from 'react';

function ProjectList({ value }) {
    const [status, setStatus] = useState('');

    useEffect(() => {
        setStatus(value.status);
    }, []);

    const onStatusClick = () => {
        axios
            .post('http://localhost:8080/admin/project/status/done', {
                id: value.id,
            })
            .then((response) => {
                console.log(response);
                setStatus('DONE');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <div className="flex text-center my-1">
                <div className="w-3/12">{value.title}</div>
                <div className="w-2/12">{value.organizationName}</div>
                <div className="w-2/12">{value.account}</div>
                <div className="w-2/12">{value.donationPrice}</div>
                <div className="w-2/12">{value.supportPrice}</div>
                <div className="w-1/12">
                    {status === 'ACTIVE' && (
                        <button
                            className="rounded-lg tracking-wider px-3 py-1.5 duration-150 hover:duration-150 bg-green-100 hover:bg-green-200"
                            onClick={onStatusClick}
                        >
                            {status}
                        </button>
                    )}
                    {status === 'DONE' && (
                        <button className="rounded-lg tracking-wider px-3 py-1.5 duration-150 hover:duration-150 bg-red-100 hover:bg-red-200">
                            {status}
                        </button>
                    )}
                </div>
                <div className="w-1/12">{value.deadline.substring(0, 10)}</div>
            </div>
        </>
    );
}
export default ProjectList;
