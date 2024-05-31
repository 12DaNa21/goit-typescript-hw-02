import React from 'react';
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";


interface User {
  name: string;
}

interface Urls {
  small: string;
  regular: string;
}

interface Photo {
  id: string;
  alt_description: string;
  urls: Urls;
  likes: number;
  user: User;
}

interface ImageGalleryProps {
  items: Photo[];
  onImgClick: (url: string, likes: number, name: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImgClick }) => {
  return (
    <div>
      <ul className={css.list}>
        {items.map((item) => (
          <li className={css.item} key={item.id}>
            <ImageCard onImgClick={onImgClick} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;