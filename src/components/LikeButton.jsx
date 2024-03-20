import React, { useState } from "react"; // Importando o módulo 'react' e a função 'useState' para gerenciar o estado
import "./LikeButton.jsx"; // Importando o estilo CSS do componente (embora a extensão .jsx não seja comum para arquivos de estilo)
import likeImage from "../assets/LogoLike.png"; // Importando a imagem de curtida

// Definição do componente funcional LikeButton
const LikeButton = () => {
  const [likes, setLikes] = useState(0); // Definindo o estado 'likes' com o valor inicial de 0 e o método 'setLikes' para atualizá-lo

  // Função para lidar com o clique no botão de curtir
  const handleLikeClick = () => {
    setLikes(likes + 1); // Incrementando o número de likes ao clicar no botão
  };

  // Retorno do componente renderizado
  return (
    <div className="like-button-container">
      <img src={likeImage} alt="Ícone de Curtida" /> {/* Imagem de curtida */}
      <h1>Meu Contador de Likes</h1> {/* Título do contador de likes */}
      <p>Número de Likes ❤️: {likes}</p> {/* Exibição do número atual de likes */}
      <button onClick={handleLikeClick}>Curtir</button> {/* Botão para adicionar um like */}
    </div>
  );
};

export default LikeButton; // Exportando o componente LikeButton para ser usado em outros arquivos
