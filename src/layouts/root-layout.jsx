import { Outlet } from "react-router";
import { Header } from "../components/header/header";

export function RootLayout() {
    return (
        <div className="flex items-center justify-center h-dvh w-full font-[Karla] bg-linear-to-b from-bgPink to-bgGreen overflow-hidden">
            <div className="relative w-full max-w-7xl h-full flex flex-col p-4 md:py-12">
                <Header />
                <main className="flex-1 flex flex-col min-h-0 w-full mt-8 md:mt-10">
                    <div className="flex-1 flex flex-col p-3 md:p-6 rounded-3xl bg-white/30 backdrop-blur-xl border-4 border-white/40 shadow-2xl relative min-h-0">
                        <div className="relative mt-4 flex-1 flex flex-col rounded-2xl border-2 border-bgDarkGray bg-white/10 shadow-inner overflow-y-auto scrollbar-hide">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
