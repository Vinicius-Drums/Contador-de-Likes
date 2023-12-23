import React, { useState } from "react";
import "./LikeButton.jsx";
import likeImage from "../assets/LogoLike.png";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="like-button-container">
      <img src={likeImage} alt="Ícone de Curtida" />
      <h1>Meu Contador de Likes</h1>
      <p>Número de Likes ❤️: {likes}</p>
      <button onClick={handleLikeClick}>Curtir</button>
    </div>
  );
};

export default LikeButton;
