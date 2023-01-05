import { useEffect, useState } from "react";
import logo from "./nike.jpg"

function TinyDonatingScreen({project}) {

  const [projectId, setId] = useState(0);
  const [projectEndDate, setProjectEndDate] = useState('');
  const [projectName, setProjectName] = useState('');
  const [presentPrice, setPresentPrice] = useState(0);
  const [targetPrice, setTargetPrice] = useState(0);
  const [organizationNickname, setOrganizationNickname] = useState(0);
  const [projectImage, setProjectImage] = useState('');

    useEffect(() =>{
      setId(project.project_id);
      setProjectEndDate(project.project_enddate);
      setProjectImage(project.image_name);
      setProjectName(project.project_name);
      setPresentPrice(project.present_price);
      setTargetPrice(project.target_price);
      setOrganizationNickname(project.organization_nickname);
    }, [])
    
    return (
      <div className="grid w-64 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="relative mx-auto w-60">
        <a href="#" className="relative inline-block w-50 transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <div className="rounded-lg bg-white p-4 shadow">
            <div className="relative flex h-52 justify-center overflow-hidden rounded-lg hover:scale-110 ease-in-out duration-500">
                  <img classname="object-fill h-48 w-96" src={logo}  alt='image1 '/>
              
            </div>
    
            <div className="mt-4">
    
            </div>
            <div className="justify-center">
              <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                
    
                <p className="flex text-base items-center font-medium text-gray-800">
                  Present_price
                </p>
                <p className="flex text-base  items-end font-medium text-gray-800">
                  Total_price
                  </p> 
                  
              </div>
              <p className="flex text-sm items-center font-medium text-gray-800">
                  Today_date
                </p>
                <p className="flex text-sm items-end font-medium text-gray-800">
                  End_date
                  </p> 
            </div>
            <div className="mt-2 grid grid-cols-2">
              <div className="flex items-center">
                <div className="relative">
                  <div className="h-6 w-6 rounded-full bg-gray-200 md:h-8 md:w-8">
                  <img classname="object-cover h-48 w-96 " src={logo}  alt='image1 '/>
                  </div>
                  <span className="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full"></span>
                </div>
    
                <p className="line-clamp-1 ml-2 text-gray-800">OrganizationNickname</p>
              </div>
    
              <div className="flex justify-end">
              </div>
            </div>
          </div>
        </a>
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
          >
          불러오기
      </button>
      </div>
        </div>
    </div>
    );

}

export default TinyDonatingScreen;