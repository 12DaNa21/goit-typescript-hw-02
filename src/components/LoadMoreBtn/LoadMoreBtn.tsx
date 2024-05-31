import React from 'react';
import css from "./LoadMoreBtn.module.css";
import { BsChevronDoubleDown } from "react-icons/bs";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={onClick}>
      <BsChevronDoubleDown size="18" />
      Load more</button>
    </div>
  );
};

export default LoadMoreBtn;