import { useEffect, useState } from 'react';

function ContentOfProject({ contents }) {
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');
    const [image_name, setImage_name] = useState('');

    useEffect(() => {
        setSubtitle(contents.subtitle);
        setContent(contents.content);
        setImage_name(contents.image);
    }, []);
    return (
        <>
            <div className="w-700 mt-0 m-auto">
                <span className="w-full mt-12 block text-xl text-slate-900 break-all">
                    {subtitle}
                </span>
                <span className="w-full block mt-4 m-auto text-base leading-7 text-slate-700 whitespace-pre-line break-all">
                    <p>{content}</p>
                </span>
                <img
                    src={`data:image/*;base64,${image_name}`}
                    alt="image1"
                    className="w-full block h-96 bg-no-repeat bg-center bg-cover"
                ></img>
            </div>
        </>
    );
}

export default ContentOfProject;
