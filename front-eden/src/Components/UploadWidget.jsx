import React, { useEffect, useRef } from "react";

const UploadWidget = ({setUrlImage}) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: "dpi9ixsws",
                uploadPreset: "tabzocst",
            },
            (error, result) => {
                if (result && result.event === "success") {
                    setUrlImage(result.info.url);
                }
            }
        );
    }, []);
    return (
        <div>
            <button
                onClick={() => {
                    widgetRef.current.open();
                }}
            >
                Upload
            </button>
        </div>
    );
}
export default UploadWidget;