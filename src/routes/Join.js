import { Link } from "react-router-dom"

function Join() {
    return (
        <>
        <div className="text-center">
        <div className="font-extrabold text-green-700 text-2xl mt-12" > Welcome! </div>
        <div> Doneasy에 오신것을 환영합니다. </div>
        <div className="mx-auto mt-12 w-1/2 mb-12">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                    <Link to={"/routes/IndiJoin"}>
                    <img className="object-center " src="/img/one.png"></img>
                    </Link>
                    <Link to={"/routes/GroupJoin"}>
                    <img className="object-center " src="/img/people.png"></img>
                    </Link>
            </ul>
        </div>
        </div>
        </>
    )
}
export default Join;