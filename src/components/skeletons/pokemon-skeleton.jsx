export const PokemonCardSkeleton = () => {
    return (
        <div className="flex flex-col p-4 bg-gray-500/60 w-46 h-54 rounded-2xl border border-white/5">
            <div className="w-full h-28 bg-gray-600/50 rounded-lg animate-pulse flex justify-center items-center p-2">
                <div className="w-full h-full rounded-full"></div>
            </div>

            <div className="flex flex-col justify-center items-center p-2 gap-1 mt-2">
                <div className="h-2 w-12 bg-gray-600/50 rounded-sm animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-600/50 rounded-sm animate-pulse"></div>
                <div className="h-5 w-16 bg-gray-600/50 mt-2 rounded-sm animate-pulse"></div>
            </div>
        </div>
    );
};