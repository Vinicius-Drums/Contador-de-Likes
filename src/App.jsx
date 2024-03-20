import React from "react"; // Importando o módulo 'react'
import LikeButton from "./components/LikeButton"; // Importando o componente LikeButton
import "./App.css"; // Importando o estilo CSS associado ao aplicativo

// Definição do componente funcional App
const App = () => {
  return (
    <div>
      <h1> 🚀 Meu Aplicativo de Likes 🚀 </h1> {/* Título do aplicativo */}
      <LikeButton /> {/* Renderizando o componente LikeButton */}
    </div>
  );
};

export default App; // Exportando o componente App para ser usado em outros arquivos
