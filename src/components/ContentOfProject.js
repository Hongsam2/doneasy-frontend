import { useEffect, useState } from "react";

function ContentOfProject({contents}) {
    const [id, setId] = useState(0);
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");
    const [image_name, setImage_name] = useState("");
    const [order_num, setOrder_num] = useState(0);

    useEffect(() => {
        setId(contents.id);
        setSubtitle(contents.subtitle);
        setContent(contents.content)
        setImage_name(contents.image_name)
        setOrder_num(contents.order_num);
    }, []); 
    return (
        <>
            <div className="w-700 mt-0 m-auto">
                <span className="mt-12 block text-xl text-slate-900 break-all">{subtitle}</span>
                <span className="block mt-4 m-auto text-base leading-7 text-slate-700 whitespace-pre-line break-all">
                    <p>
                        {content}
                    </p>
                </span>
                <span className="block h-96 bg-no-repeat bg-center bg-cover bg-dog-shelter1"></span>
            </div>
        </>
    );
}

export default ContentOfProject;