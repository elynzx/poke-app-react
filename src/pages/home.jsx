import { Link } from "react-router";
import {
    GithubLogoIcon,
    LinkedinLogoIcon,
    HeartIcon,
    Browser,
    Database,
    Lightning,
    ShieldCheck,
} from "@phosphor-icons/react";
import Logo from "../assets/logo-gray.png";
import { CustomPokeball } from "../components/custom-pokeball/custom-pokeball";

const APP_FEATURES = [
    {
        title: "Global State",
        icon: <Database weight="duotone" size={24} />,
        description:
            "Powered by Zustand with persistence to create a fast local cache.",
        highlight: "Zustand",
    },
    {
        title: "Data Fetching",
        icon: <Browser weight="duotone" size={24} />,
        description: "Using Axios for structured RESTful API requests.",
        highlight: "Axios",
    },
    {
        title: "Smart Search",
        icon: <Lightning weight="duotone" size={24} />,
        description:
            "Implemented use-debounce and Regex cleaning to filter data only when typing stops.",
        highlight: "use-debounce",
    },
    {
        title: "Responsive UI",
        icon: <ShieldCheck weight="duotone" size={24} />,
        description:
            "Styled with Tailwind CSS using dynamic viewport units (dvh).",
        highlight: "Tailwind CSS",
    },
];

const LINK_DETAILS = [
    {
        url: "https://github.com/elynzx/poke-app-react",
        icon: <GithubLogoIcon size={18} weight="duotone" />,
        title: "Repository",
    },
    {
        url: "https://www.linkedin.com/in/evelynpascualc/",
        icon: <LinkedinLogoIcon size={18} weight="duotone" />,
        title: "Creator Profile",
    },
];

export function HomePage() {
    return (
        <div className="flex flex-col h-full w-full rounded-t-xl overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5 z-0">
                <div className="absolute -right-20 top-20">
                    <CustomPokeball size={400} />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hide">
                <div className=" flex flex-col items-center justify-center relative z-10 py-8">
                    <img
                        src={Logo}
                        alt="PokeAPI"
                        className="h-20 md:h-42 object-contain"
                    />
                    <div className="text-center px-8 md:px-0 max-w-2xl">
                        <p className="text-sm md:text-base text-bgDarkGray/80 font-semibold leading-relaxed">
                            A high-performance Pokémon discovery tool. Built for
                            quick collection browsing, side-by-side comparison,
                            and database-style exploration.
                        </p>
                        <Link
                            to="/pokemons"
                            className="inline-block mt-6 w-50 py-3 bg-bgDarkPink text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform uppercase text-xs tracking-widest font-item"
                        >
                            Explore Pokedex
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mt-8 md:mt-12 px-6 md:px-0">
                        {APP_FEATURES.map((feature) => (
                            <div
                                key={feature.title}
                                className="flex gap-4 px-4 py-3 md:p-5 backdrop-blur-md rounded-lg md:rounded-3xl border-2 border-white/20 shadow-md shadow-white/20  hover:bg-white/40 transition-all font-item"
                            >
                                <div className="text-bgDarkPink shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[12px] font-black uppercase tracking-widest text-bgDarkPink">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[12px] text-bgDarkGray/80 font-bold">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="bg-bgDarkGray font-item w-full h-16 flex flex-col md:flex-row items-center justify-center md:justify-between border-t border-white/5 shrink-0 px-14 gap-2">
                <div className="flex items-center md:justify-start gap-2 text-[10px] text-white/80 uppercase font-black tracking-widest">
                    <span>Built with</span>
                    <HeartIcon
                        weight="fill"
                        size={14}
                        className="text-bgDarkPink animate-pulse"
                    />
                    <span>by Elynzx</span>
                </div>
                <div className="flex items-center md:justify-end gap-4 md:gap-8">
                    {LINK_DETAILS.map((link) => (
                        <a
                            key={link.title}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-white/80 hover:text-white transition-all group"
                        >
                            <span className="group-hover:text-bgDarkPink transition-colors">
                                {link.icon}
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">
                                {link.title}
                            </span>
                        </a>
                    ))}
                </div>
            </footer>
        </div>
    );
}
