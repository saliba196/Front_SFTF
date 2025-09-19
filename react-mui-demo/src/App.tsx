import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/700.css";
//import Home from "./pages/Home";
//import Login from "./pages/login";
import './App.css';

// Criação do tema global
const theme = createTheme({
  palette: {
    text: {
      primary: "#66BB6A", // Texto branco por padrão
    },
    background: {
      default: "linear-gradient(to bottom right, #F5F5F0 30%, #F5F5F0 )", // Fundo global
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif", // Fonte Nunito global
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          background: "linear-gradient(to bottom right, #F5F5F0 5 30%, #F5F5F0 )", // Fundo global
          overflowX: "hidden", // Remove rolagem horizontal
        },
      },
    },
  },
});

function App() {
  return (
   <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Aplica estilos globais */}
      {/*<Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/perfil" element={<PaginaPerfil />} />
        </Routes>
      </Router>
      */}
    </ThemeProvider>
  );
}

export default App;





