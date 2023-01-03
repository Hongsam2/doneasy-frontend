import { useEffect, useState } from 'react';

function ModifyContent({ value }) {
    const [subtitle, setSubtitle] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [content, setContent] = useState('');
    useEffect(() => {
        setSubtitle(value.subtitle);
        if (value.image !== null) {
            setImageSrc(value.image);
        }
        setContent(value.content);
    }, []);

    const onSubtitleChange = (e) => {
        setSubtitle(e.target.value);
    };
    const onContentChange = (e) => {
        setContent(e.target.value);
    };
    return (
        <>
            <div className="w-full mx-auto">
                <div className="text-2xl tracking-wide my-4">
                    <input
                        type="text"
                        placeholder="소제목"
                        value={subtitle}
                        onChange={onSubtitleChange}
                        className="w-3/4 border rounded-md h-8 px-3 text-lg my-2 placeholder:text-center"
                    />
                </div>
                <div className="w-5/12 max-w-fit mx-auto my-4">
                    <img
                        src={`data:image/jpeg;base64,${imageSrc}`}
                        alt="error"
                    />
                </div>
                <div className="text-xl tracking-wide text-gray-700 mb-20">
                    <textarea
                        placeholder="본문"
                        value={content}
                        onChange={onContentChange}
                        className="resize-none w-3/4 px-3 text-md h-32 my-2 border placeholder:text-center placeholder:text-xl"
                    />
                </div>
            </div>
        </>
    );
}
export default ModifyContent;
