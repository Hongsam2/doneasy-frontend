import { useEffect, useState } from "react";

function DonatingProject({DonatingProjectinfo}) {

   // const [project_id, setProjectId] = useState(0);
    const [project_image, setProjectImage] = useState('');
    const [project_T_amount, setProject_t_amount] = useState(0);
    const [project_O_nickname, setProject_o_nickname] = useState('');

    useEffect (() =>{
        setProjectImage(DonatingProjectinfo.image);
        setProject_o_nickname(DonatingProjectinfo.project_O_nickname);
        setProject_t_amount(DonatingProjectinfo.amount);
    }, [])

    return (
        <>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
        </>
    );

}