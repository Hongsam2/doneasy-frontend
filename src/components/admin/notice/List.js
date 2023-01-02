function List({ index, onDetailClick }) {
    const onBtnClick = () => {
        onDetailClick(index);
    };
    return (
        <>
            <tr
                className="border-t border-gray-100 duration-150 hover:cursor-pointer hover:bg-gray-200 hover:duration-150"
                onClick={onBtnClick}
            >
                <td className="py-1">1</td>
                <td>기부를 합시다!</td>
                <td>2020.12.31</td>
            </tr>
        </>
    );
}
export default List;
