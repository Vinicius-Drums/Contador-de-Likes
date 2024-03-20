import React from 'react'; // Importando o módulo 'react' para lidar com elementos React
import ReactDOM from 'react-dom'; // Importando o módulo 'react-dom' para renderizar componentes no DOM
import App from './App.jsx'; // Importando o componente principal 'App'
import './index.css'; // Importando o estilo CSS global

// Utilizando ReactDOM.createRoot para renderizar o aplicativo dentro do elemento com o id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Renderizando o componente 'App' dentro de um 'StrictMode' */}
  </React.StrictMode>
);
