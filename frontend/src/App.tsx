import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Artist } from "./pages/artist";
import { Artists } from "./pages/artists";
import { Home } from "./pages/home";
import { Song } from "./pages/song";
import { Songs } from "./pages/songs";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />

        <Route path="/songs" Component={Songs} />
        <Route path="/artists" Component={Artists} />

        <Route path="/song/:id" Component={Song} />
        <Route path="/artist/:id" Component={Artist} />
      </Routes>
    </BrowserRouter>
  );
}

