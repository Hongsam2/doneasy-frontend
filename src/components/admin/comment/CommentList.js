import axios from 'axios';

function CommentList({ value }) {
    const onActiveClick = () => {
        const id = Number.parseInt(value.id);
        axios
            .post('http://localhost:8080/admin/comment/blind', { id: id })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <div className="flex border-b py-1">
                <div className="w-1/4 my-auto">{value.id}</div>
                <div className="w-1/4 my-auto">{value.contents}</div>
                <div className="w-1/4 my-auto">{value.reports}</div>
                <div className="w-1/4 my-auto">{value.createdDate}</div>
                <div className="w-1/4 my-auto">
                    {value.status === 'ACTIVE' && (
                        <button
                            className="border rounded-lg px-3 py-1.5 bg-gray-50 duration-150 tracking-wider hover:duration-150 hover:bg-gray-200"
                            onClick={onActiveClick}
                        >
                            ACTIVE
                        </button>
                    )}
                    {value.status === 'BLIND' && (
                        <div className="border rounded-lg px-3 py-1.5 bg-red-50 duration-150 tracking-wider">
                            BLIND
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default CommentList;
