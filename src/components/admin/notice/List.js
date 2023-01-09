import { useEffect, useState } from 'react';

function List({ value, onDetailClick }) {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [createdDate, setCreatedDate] = useState('');
    useEffect(() => {
        setId(value.id);
        setTitle(value.title);
        setCreatedDate(value.created_date.substring(0, 10));
    }, []);
    const onBtnClick = () => {
        onDetailClick(value.id);
    };
    return (
        <>
            <tr
                className="border-y border-gray-100 duration-150 hover:cursor-pointer hover:bg-gray-200 hover:duration-150"
                onClick={onBtnClick}
            >
                <td className="py-1 px-4">{id}</td>
                <td className="px-60">{title}</td>
                <td className="px-24">{createdDate}</td>
            </tr>
        </>
    );
}
export default List;
