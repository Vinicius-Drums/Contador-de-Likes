// Importando o React e a função useState do módulo 'react'
import React, { useState } from "react";

// Importando a imagem de curtida
import likeImage from "../assets/LogoLike.png";

// Definindo o componente funcional LikeButton
const LikeButton = () => {
  // Definindo o estado 'likes' para controlar o número de curtidas
  const [likes, setLikes] = useState(0); // Aqui  o useState para definir o estado 'likes' inicializado com o valor 0

  // Função para lidar com o clique no botão de curtir
  const handleLikeClick = () => {
    // Incrementando o número de curtidas ao clicar no botão
    setLikes(likes + 1); // Aqui  a função setLikes para atualizar o estado 'likes' incrementando seu valor em 1
  };

  // Retorno do componente renderizado
  return (
    <div className="like-button-container">
      <img src={likeImage} alt="Ícone de Curtida" /> {/* Imagem de curtida */}
      <h1>Meu Contador de Likes</h1> {/* Título do contador de curtidas */}
      <p>Número de Likes ❤️: {likes}</p> {/* Exibição do número atual de curtidas */}
      <button onClick={handleLikeClick}>Curtir</button> {/* Botão para adicionar uma curtida */}
    </div>
  );
};

export default LikeButton; // Exportando o componente LikeButton para ser usado em outros arquivos
