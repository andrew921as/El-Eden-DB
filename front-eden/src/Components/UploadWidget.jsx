import React, { useEffect, useRef } from "react";
import {Button} from '@mui/material';

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
		const handleUpload = (event) => {
			event.preventDefault();
			widgetRef.current.open();
		}
    return (
        <div>
            <Button
							sx={{ border: '3px solid #5C1508', borderRadius: 10, width:'100%', ':hover': { border: '3px solid #A51C03' } }}
              onClick={ handleUpload }
            >
                Upload Image
            </Button>
        </div>
    );
}
export default UploadWidget;