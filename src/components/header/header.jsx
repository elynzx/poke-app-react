import { Link, useLocation } from "react-router";
import { CustomPokeball } from "../custom-pokeball/custom-pokeball";
import Logo from "../../assets/logo-white.png";
import { MenuSquare } from "pixelarticons/react";
import { useState } from "react";

export const Header = () => {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const linkStyle = (path) =>
        `px-4 py-1 rounded-md transition-all duration-300 font-item font-bold text-[10px] uppercase ${
            pathname === path
                ? "bg-bgDarkGray text-white shadow-md scale-105"
                : "text-bgDarkgray/80 hover:text-white hover:bg-white/30"
        }`;

    return (
        <header className="absolute left-1/2 -translate-x-1/2 -top-10 md:-top-5 z-40 w-[85%] md:w-[80%]">
            <div className="z-10 w-full backdrop-blur-3xl rounded-2xl px-4 md:px-8 py-1.5 md:py-1 mt-6 flex items-center justify-between border-4 border-white/40 shadow-xl">
                <img
                    src={Logo}
                    alt="PokeAPI"
                    className="h-10 md:h-14 object-contain"
                />
                <button onClick={setIsOpen} className="flex md:hidden">
                    <MenuSquare />
                </button>
                <div className="hidden md:flex">
                    <nav className="flex justify-center gap-6">
                        <Link to="/" className={linkStyle("/")}>
                            Home
                        </Link>
                        <Link to="/pokemons" className={linkStyle("/pokemons")}>
                            Dex
                        </Link>
                        <Link to="/pokemons" className={linkStyle("/compare")}>
                            Compare
                        </Link>
                        <Link to="/pokemons" className={linkStyle("/compare")}>
                            Favorites
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};
