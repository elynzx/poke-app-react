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
                : "text-bgDarkgray/80 hover:text-white hover:bg-bgGray/40"
        }`;

    return (
        <header className="absolute left-1/2 -translate-x-1/2 -top-3 md:top-4 z-40 w-[85%] md:w-[80%]">
            <div
                className={`z-10 w-full backdrop-blur-3xl rounded-2xl px-4 md:px-8 py-1.5 md:py-1 mt-6 flex items-center justify-between border-4  shadow-xl relative ${isOpen ? "bg-bgDarkGray border-white/90" : "border-white/40"}`}
            >
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full flex justify-between">
                        <img
                            src={Logo}
                            alt="PokeAPI"
                            className="h-10 md:h-14 object-contain"
                        />

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`flex md:hidden p-2  hover:bg-white/20 rounded-lg transition-colors ${isOpen ? "text-white" : "text-bgDarkGray"}`}
                        >
                            <MenuSquare />
                        </button>
                    </div>
                    {isOpen && (
                        <div className="flex mt-2 w-full bg-white backdrop-blur-xl rounded-lg border-4 border-white/40 shadow-2xl p-4 md:hidden fadeIn duration-200 mb-3">
                            <nav className="flex flex-col justify-center w-full">
                                <Link
                                    to="/"
                                    onClick={() => setIsOpen(false)}
                                    className={linkStyle("/")}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/pokemons"
                                    onClick={() => setIsOpen(false)}
                                    className={linkStyle("/pokemons")}
                                >
                                    Dex
                                </Link>
                                <Link
                                    to="/compare"
                                    onClick={() => setIsOpen(false)}
                                    className={linkStyle("/compare")}
                                >
                                    Compare
                                </Link>
                                <Link
                                    to="/favorites"
                                    onClick={() => setIsOpen(false)}
                                    className={linkStyle("/favorites")}
                                >
                                    Favorites
                                </Link>
                            </nav>
                        </div>
                    )}
                </div>

                <div className="hidden md:flex">
                    <nav className="flex justify-center gap-6">
                        <Link to="/" className={linkStyle("/")}>
                            Home
                        </Link>
                        <Link to="/pokemons" className={linkStyle("/pokemons")}>
                            Dex
                        </Link>
                        <Link to="/compare" className={linkStyle("/compare")}>
                            Compare
                        </Link>
                        <Link
                            to="/favorites"
                            className={linkStyle("/favorites")}
                        >
                            Favorites
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};
