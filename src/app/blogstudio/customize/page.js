"use client";
import { useState, useEffect } from 'react';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch all uploaded images from the server
        fetch('/api/upload')
            .then((response) => response.json())
            .then((data) => setImages(data))
            .catch((error) => console.log('Error fetching images:', error));
    }, []);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('image', file);

            // Upload the image to the server
            fetch('/api/upload', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Image uploaded successfully:', data);
                    // Add the uploaded image to the state
                    setImages((prevImages) => [...prevImages, { _id: data.id }]);
                })
                .catch((error) => console.log('Error uploading image:', error));
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('image', file);

            // Upload the image to the server
            fetch('/api/upload', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Image uploaded successfully:', data);
                    // Add the uploaded image to the state
                    setImages((prevImages) => [...prevImages, { _id: data.id }]);
                })
                .catch((error) => console.log('Error uploading image:', error));
        }
    };

    return (
        <div>
            <h1>Image Upload</h1>
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                style={{
                    border: '1px solid #ddd',
                    padding: '20px',
                    borderRadius: '4px',
                }}
            >
                <input type="file" onChange={handleFileUpload} />
                <p>Drag and drop an image here</p>
            </div>
            <div>
                {images.map((image) => (
                    <img
                        key={image._id}
                        src={`/api/upload/${image._id}`}
                        alt="Uploaded Image"
                        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageUpload;
