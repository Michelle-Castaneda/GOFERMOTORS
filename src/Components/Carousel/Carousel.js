import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

const MyCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;
    const folderId = process.env.REACT_APP_GOOGLE_DRIVE_FOLDER_ID;
  
    const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`;
  
    axios.get(apiUrl)
      .then(response => {
        const fetchedImages = response.data.files.map(file => ({
          url: file.webContentLink,
          caption: file.name,
        }));
        setImages(fetchedImages);
      })
      .catch(error => {
        console.error('Error fetching images:', error.response ? error.response.data : error.message);
      });
  }, []);
  

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.url}
            alt={`Slide ${index}`}
          />
          <Carousel.Caption>
            <h3>{image.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
