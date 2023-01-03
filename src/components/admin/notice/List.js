function List({ value, onDetailClick }) {
    const onBtnClick = () => {
        onDetailClick(value.id);
    };
    return (
        <>
            <tr
                className="border-t border-gray-100 duration-150 hover:cursor-pointer hover:bg-gray-200 hover:duration-150"
                onClick={onBtnClick}
            >
                <td className="py-1">{value.id}</td>
                <td>{value.title}</td>
                <td>{value.created_date}</td>
            </tr>
        </>
    );
}
export default List;
