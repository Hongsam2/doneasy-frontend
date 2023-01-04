import axios from "axios";
import { useState } from "react";
import ContentsRe from "../components/ContentsRe";

function ContentsOfProjectReview() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState([]); // 2. 받은거 집어넣는다.
  const [imageList, setImageList] = useState([]);

  const onCancelClick = () => {
    window.location.href = "/";
  };

  const onTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeContents = (context, imageList) => {
    //  1 자식이 이미지 서브타이틀 컨텐츠가 변경되면 컨텍스트로 만들어서 나한테 저ㅜ!
    setContents(context);
    setImageList(imageList);
  };

  const onSubmitClick = () => {
    const data = new FormData();
    // data.append("service_start_date", service_start_date);
    // data.append("service_end_date", service_end_date);
    // data.append("category", category);
    // data.append("target_price", target_price);
    // data.append("title", title);

    // const json = JSON.stringify(contents);
    // const blob = new Blob([json], { type: "application/json" });
    // data.append("contentDtoList", blob);
    const value = {
      title: title,
      contentReDtoList: contents,
    };
    const json = JSON.stringify(value);
    const blob = new Blob([json], { type: "application/json" });
    data.append("boardSaveReDto", blob);

    imageList.forEach((image) => {
      data.append("imageList", image);
    });

    axios
      .post("http://localhost:8090/saveReview", data)
      .then((Response) => {
        console.log(Response);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              후기 작성
            </h1>
            <p className="text-white mt-1 ml-56">Give 해주세요</p>
            <div className="flex justify-center lg:justify-start mt-6 ">
              <button
                className="ml-60 hover:bg-[#719E71] hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-black mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                onClick={onCancelClick}
              >
                {" "}
                뒤로가기{" "}
              </button>
              <button
                className="ml-4 hover:bg-[#719E71] hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-black mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                onClick={onSubmitClick}
              >
                {" "}
                작성완료{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full lg:w-3/5 justify-center items-center bg-gray-50 space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-40">
            <div className="mt-8 flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <input
                id="text"
                className=" pl-2 w-full outline-none border-none"
                type="text"
                value={title}
                onChange={onTitle}
                placeholder="후기 주제."
              />
            </div>

            <ContentsRe changeContents={changeContents} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentsOfProjectReview;
