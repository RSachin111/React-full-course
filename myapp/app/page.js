"use client"
import axios from 'axios';
import React, { useState } from 'react';
// import Header from '@/Components/Header';

const Page = () => {
  const [images, setImages] = useState([]);

  const getImages = () => {
    axios.get("https://picsum.photos/v2/list")
      .then((response) => {
        console.log(response.data);
        setImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    // <div>
    //   <Header />
    //   {/* This is home page */}
    // </div>
    <div>
      <button onClick={getImages}>Get images</button>
      {images.map(image => (
        <img key={image.id} src={image.download_url} alt={`Image ${image.id}`} />
      ))}
    </div>
  );
};

export default Page;
