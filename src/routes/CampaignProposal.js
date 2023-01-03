import ContentsCam from "../components/ContentsCam";

function CampaignProposal() {
  return (
    <>
      <div className="h-screen flex bg-green[#000333] ">
        <div
          className="hidden lg:flex w-full lg:w-2/5 login_img_section
              justify-around items-center "
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "(0, 0, 0, 0.5)",
          }}
        >
          <div
            className=" 
                      bg-black 
                      opacity-20 
                      inset-0 
                      z-0"
          ></div>
          <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
            <h1 className="ml-40 text-white font-bold text-4xl font-sans">
              프로젝트 제안
            </h1>
            <p className="text-white mt-1 ml-56">Give 해주세요</p>
            <div className="flex justify-center lg:justify-start mt-6 ">
              <button className="ml-60 hover:bg-[#719E71] hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-black mt-4 px-4 py-2 rounded-2xl font-bold mb-2">
                {" "}
                뒤로가기{" "}
              </button>
              <button className="ml-4 hover:bg-[#719E71] hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-black mt-4 px-4 py-2 rounded-2xl font-bold mb-2">
                {" "}
                작성완료{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full lg:w-3/5 justify-center items-center bg-gray-50 space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-40">
            <div align="center" className="mb-5 block   text-[#07074D]">
              <label htmlFor="startday">시작 :</label>
              <input
                id="startday"
                type="date"
                className="ml-1  resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <label className="ml-8" htmlFor="endday">
                종료 :
              </label>
              <input
                id="endday"
                type="date"
                className="ml-1  resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <label className="ml-8" htmlFor="endday2">
                마감 :
              </label>
              <input
                id="endday2"
                type="date"
                className="ml-1 resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div align="center">
              <label htmlFor="category">카테고리:</label>
              <select
                id="category"
                className="ml-1 resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option>select category.</option>
                <option value="seniorcitizen">노인</option>
                <option value="children">아동</option>
                <option value="youth">청년</option>
                <option value="environment">환경</option>
                <option value="disabled ">장애인</option>
                <option value="society ">사회</option>
              </select>
              <label className="ml-16" htmlFor="target_price">
                목표금액:
              </label>
              <input
                id="target_price"
                className="ml-1 resize-none rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                type="number"
                placeholder="목표 금액을 설정해주세요."
              />
            </div>

            <div className="mt-8 flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <input
                id="text"
                className=" pl-2 w-full outline-none border-none"
                type="text"
                placeholder="주제를 입력하세요."
              />
            </div>

            <ContentsCam />

            {/* <button
              type="submit"
              className="block w-full bg-[#719E71] mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              onClick={onSubmitClick}
            >
              제출
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CampaignProposal;
