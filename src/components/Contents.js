import { useEffect, useState } from "react";

function Contents({ changeContents }) {
  const [image_name, setImage] = useState("");
  const [image_name2, setImage2] = useState("");
  const [image_name3, setImage3] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [contents, setContents] = useState("");
  const [subtitle2, setSubtitle2] = useState("");
  const [contents2, setContents2] = useState("");
  const [subtitle3, setSubtitle3] = useState("");
  const [contents3, setContents3] = useState("");

  //이미지 뷰어
  const [imageSrc, setImageSrc] = useState("");
  const [imageSrc2, setImageSrc2] = useState("");
  const [imageSrc3, setImageSrc3] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  //리스트
  const [context, setContext] = useState([{}, {}, {}]);
  const [imageList, setImageList] = useState([]);

  // 이미지src 가 onche
  useEffect(() => {
    setLoading(true);
  }, [imageSrc]);

  useEffect(() => {
    setLoading2(true);
  }, [imageSrc2]);

  useEffect(() => {
    setLoading3(true);
  }, [imageSrc3]);

  useEffect(() => {
    changeContents(context, imageList);
  }, [imageList, context]);

  //   null 값을 넣어줘야 순서 오버랩 안됨.
  useEffect(() => {
    const list = [];
    if (image_name !== "") {
      list.push(image_name);
    } else {
      list.push(null);
    }
    if (image_name2 !== "") {
      list.push(image_name2);
    } else {
      list.push(null);
    }
    if (image_name3 !== "") {
      list.push(image_name3);
    } else {
      list.push(null);
    }
    setImageList(list);
  }, [image_name, image_name2, image_name3]);

  useEffect(() => {
    // 변화된 데이터를 객체로 만든다.
    const mine = { subtitle: subtitle, contents: contents };

    // 빈 배열을 만든다.
    const list = [];

    // 변화된 데이터가 몇 번째인지 확인하고 그 순서에 집어 넣는다.
    list.push(mine);
    list.push(context.at(1));
    list.push(context.at(2));
    // context에 새롭게 만든 배열을 집어넣는다.
    setContext(list);
  }, [subtitle, contents]);

  useEffect(() => {
    const mine = { subtitle: subtitle2, contents: contents2 };
    const list = [];
    list.push(context.at(0));
    list.push(mine);
    list.push(context.at(2));
    setContext(list);
    console.log(context);
  }, [subtitle2, contents2]);

  useEffect(() => {
    const mine = { subtitle: subtitle3, contents: contents3 };
    const list = [];
    list.push(context.at(0));
    list.push(context.at(1));
    list.push(mine);
    setContext(list);
  }, [subtitle3, contents3]);

  const onImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    setImage(e.target.files[0]);
  };

  const onImage2 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImageSrc2(reader.result);
    };
    setImage2(e.target.files[0]);
  };

  const onImage3 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImageSrc3(reader.result);
    };
    setImage3(e.target.files[0]);
  };

  const onSubTitle = (e) => {
    setSubtitle(e.target.value);
  };

  const onContents = (e) => {
    setContents(e.target.value);
  };
  const onSubTitle2 = (e) => {
    setSubtitle2(e.target.value);
  };

  const onContents2 = (e) => {
    setContents2(e.target.value);
  };
  const onSubTitle3 = (e) => {
    setSubtitle3(e.target.value);
  };

  const onContents3 = (e) => {
    setContents3(e.target.value);
  };

  return (
    <>
      <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl ">
        <input
          className="pl-2 w-full outline-none border-none"
          type="text"
          value={subtitle}
          id="subTitle"
          onChange={onSubTitle}
          placeholder="부제목을 입력하세요."
        />
      </div>
      <div className=" mx-auto w-full max-w-[600px] bg-white">
        <input
          type="file"
          id="file"
          className="sr-only"
          onChange={onImage}
          accept="image/*" //난 이미지만 올릴거야.
        />
        <label
          htmlFor="file"
          className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
        >
          <div>
            <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400">
              {/* 로딩이 트루면 이미지태그를 뱉어라 */}
              {loading && <img src={imageSrc} alt="-Browse" />}
            </span>
          </div>
        </label>
      </div>
      <div className="mt-5 mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-[#07074D]"
        ></label>
        <textarea
          rows="4"
          name="message"
          id="message"
          value={contents}
          onChange={onContents}
          placeholder="Type"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>

        <details>
          <summary
            className=" rounded-md bg-[#719E71] px-1 py-1 transition duration-700 hover:bg-gray-400 space-x-1 text-white mt-5 mb-3"
            align="center"
          >
            추가 작성 1
          </summary>

          <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl ">
            <input
              className="pl-2 w-full outline-none border-none"
              type="text"
              value={subtitle2}
              onChange={onSubTitle2}
              id="subTitle"
              placeholder="부제목을 입력하세요."
            />
          </div>

          <div className="mx-auto w-full max-w-[600px] bg-white">
            <input
              type="file"
              onChange={onImage2}
              id="file2"
              className="sr-only"
            />
            <label
              htmlFor="file2"
              className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
            >
              <div>
                <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400">
                  {loading2 && <img src={imageSrc2} alt="-Browse" />}
                </span>
              </div>
            </label>
          </div>

          <div className="mt-5 mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            ></label>
            <textarea
              onChange={onContents2}
              value={contents2}
              rows="4"
              name="message"
              id="message"
              placeholder="Type"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
        </details>

        <details>
          <summary
            className="rounded-md bg-[#719E71] px-1 py-1 transition duration-700 hover:bg-gray-400 space-x-1 text-white mt-1 "
            align="center"
          >
            추가 작성 2
          </summary>

          <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl ">
            <input
              className="pl-2 w-full outline-none border-none"
              type="text"
              value={subtitle3}
              onChange={onSubTitle3}
              id="subTitle"
              placeholder="부제목을 입력하세요."
            />
          </div>

          <div className="mx-auto w-full max-w-[600px] bg-white">
            <input
              type="file"
              onChange={onImage3}
              id="file3"
              className="sr-only"
            />
            <label
              htmlFor="file3"
              className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
            >
              <div>
                <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400">
                  {loading3 && <img src={imageSrc3} alt="-Browse" />}
                </span>
              </div>
            </label>
          </div>

          <div className="mt-5 mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            ></label>
            <textarea
              onChange={onContents3}
              value={contents3}
              rows="4"
              name="message"
              id="message"
              placeholder="Type"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
        </details>
      </div>
    </>
  );
}
export default Contents;
