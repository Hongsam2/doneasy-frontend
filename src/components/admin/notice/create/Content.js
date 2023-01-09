import { useEffect, useState } from 'react';

function Content({ index, changeContent, deleteContent, changeImage }) {
    const [subtitle, setSubtitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [imagesrc, setImagesrc] = useState('');
    const [context, setContext] = useState({});

    // useEffect(() => {
    //     setContext({ subtitle, content, index });
    // }, [subtitle, content]);

    useEffect(() => {
        changeContent({ subtitle, content, index });
    }, [subtitle, content]);

    useEffect(() => {
        changeImage(index, image);
    }, [image]);

    const onSubtitleChange = (e) => {
        setSubtitle(e.target.value);
    };
    const onContentChange = (e) => {
        setContent(e.target.value);
    };
    const onImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        convertImage(file);
    };

    const convertImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagesrc(reader.result);
        };
    };

    const onDeleteClick = () => {
        deleteContent(index);
    };
    return (
        <>
            <div className="bg-gray-50 border-t">
                <div>
                    <input
                        type="text"
                        placeholder="소제목"
                        value={subtitle}
                        onChange={onSubtitleChange}
                        className="w-3/4 border rounded-md h-8 px-3 text-lg my-2 placeholder:text-center"
                    />
                </div>
                <div className="my-2">
                    {imagesrc !== '' && (
                        <img
                            src={imagesrc}
                            alt="your img"
                            className="w-64 mx-auto mb-4"
                        />
                    )}
                    <label
                        htmlFor={`image${index}`}
                        className="px-3 py-1.5 bg-gray-100 rounded-lg duration-150 hover:duration-150 hover:bg-gray-200"
                    >
                        이미지 선택
                    </label>
                    <input
                        id={`image${index}`}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={onImageChange}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="본문"
                        value={content}
                        onChange={onContentChange}
                        className="resize-none w-3/4 px-3 text-md h-32 my-2 border placeholder:text-center placeholder:text-xl"
                    />
                </div>
                <div className="py-2">
                    <button
                        className="bg-red-200 px-3 py-1.5 tracking-wider rounded-lg duration-150 hover:bg-red-300 hover:duration-150"
                        onClick={onDeleteClick}
                    >
                        DELETE
                    </button>
                </div>
            </div>
        </>
    );
}
export default Content;
