import {
    ChevronLeft2,
    SquareChevronLeft,
    SquareChevronRight,
} from "pixelarticons/react";

export const Pagination = ({
    currentPage,
    firstPage,
    onPrevPage,
    onNextPage,
    isSearching,
}) => {
    const isDisabled = isSearching;
    return (
        <div className="flex items-center justify-between text-white tracking-wide font-item text-[12px] h-16 px-4 md:px-12 bg-bgDarkGray w-full mt-auto rounded-b-xl border-t border-white/5">
            <button
                className="flex items-center w-10 md:w-full gap-1 uppercase disabled:opacity-30 hover:text-bgDarkPink transition-all active:scale-95"
                onClick={firstPage}
                disabled={isDisabled || currentPage === 1}
            >
                <ChevronLeft2 size={24} />
                <span className="hidden md:inline">First</span>
            </button>
            <div className="flex items-center gap-3 md:gap-6">
                <button
                    className="disabled:opacity-30 hover:text-bgDarkPink transition-transform active:scale-90 cursor-pointer"
                    onClick={onPrevPage}
                    disabled={isDisabled || currentPage === 1}
                >
                    <SquareChevronLeft size={28} />
                </button>
                <div className="bg-white/10 px-3 py-1 rounded-lg select-none border border-white/10 shadow-inner">
                    <span className="font-bold uppercase whitespace-nowrap">
                        {currentPage}
                    </span>
                </div>
                <button
                    className="disabled:opacity-30 hover:text-bgDarkPink transition-transform active:scale-90 cursor-pointer"
                    onClick={onNextPage}
                    disabled ={isDisabled}
                >
                    <SquareChevronRight size={28} />
                </button>
            </div>
            <div className="w-10 md:w-auto flex items-center justify-end opacity-0 pointer-events-none md:pointer-events-auto md:opacity-0">
                <span className="hidden md:block uppercase">Next</span>
            </div>
        </div>
    );
};
