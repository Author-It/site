import { useState } from 'react';
import Dropzone from 'react-dropzone';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileUpload = (files) => {
        setSelectedFile(files[0]);
    };

    return (
        <div>
            <h1>Image Upload</h1>
            <Dropzone onDrop={handleFileUpload}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} style={{ border: '1px dashed black', padding: '20px', marginBottom: '20px' }}>
                        <input {...getInputProps()} />
                        <p>Drag and drop an image here, or click to select a file</p>
                    </div>
                )}
            </Dropzone>
            {selectedFile && (
                <div>
                    <h2>Selected Image:</h2>
                    <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ maxWidth: '100%', marginBottom: '20px' }} />
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
