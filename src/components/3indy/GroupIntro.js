function GroupIntro(props) {
    return (
        <>
            <div className="border mx-auto mt-6 rounded-2xl w-11/12 text-center">
                <ul className="flex flex-col mt-4 mx-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0 ">
                    <img
                        alt=""
                        src={`data:image/*;base64,${props.image}`}
                        className="rounded-full w-20 h-20 mt-6 mx-2"
                    ></img>
                    <div className="mt-12 text-2xl font-bold">
                        {props.groupName}
                    </div>
                </ul>
                <div className=" w-11/12 border-t-2 mx-auto mb-6 mt-6">
                    <div className="mt-4 mb-6 text-left">
                        <div className="mb-4 font-bold">
                            "{props.introduction}"
                        </div>
                        <div>Call : {props.phoneNumber}</div>
                        <div>Email : {props.email}</div>
                        <div>
                            Address : {props.address} &#40;{props.zipcode}&#41;
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default GroupIntro;
