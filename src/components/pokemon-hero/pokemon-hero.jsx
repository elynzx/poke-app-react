export const PokemonHero = ({ id, name, imageUrl }) => {
    const formattedId = `#${id.toString().padStart(3, "0")}`;

    return (
        <div className="flex flex-col items-center animate-fadeIn">
            <div className="relative">
                <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full scale-125 transition-transform duration-1000"></div>
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-28 h-28 md:w-30 md:h-30 object-contain relative z-20 drop-shadow-lg transition-transform hover:scale-110"
                />
            </div>
            <div className="mt-4 md:mt-12 text-center">
                <div className="inline-block bg-white/50 backdrop-blur-sm border border-white px-5 md:py-0.5 rounded-md mb-3 shadow-sm">
                    <span className="text-[10px] font-black text-bgDarkGray/60 tracking-widest">
                        POKEMON {formattedId}
                    </span>
                </div>
                <h1 className="text-2xl mt-2 font-black capitalize text-bgDarkGray tracking-tight leading-none">
                    {name}
                </h1>
            </div>
        </div>
    );
};
