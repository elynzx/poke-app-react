import { Outlet } from "react-router";
import { Header } from "../components/header/header";

export function RootLayout() {
    return (

        <div className="flex items-center justify-center min-h-screen w-full font-[Karla] bg-linear-to-b from-bgPink to-bgGreen md:px-6 px-5">
            <div className="relative w-full max-w-300 h-[92vh] md:h-[90vh] flex flex-col">
                <Header />
                <main className="flex-1 flex flex-col min-h-0 w-full mt-10 md:mt-16">
                    <div className="flex-1 flex flex-col p-3 md:p-6 rounded-3xl bg-white/30 backdrop-blur-xl border-4 border-white/40 shadow-2xl relative overflow-hidden">
                        <div className="relative mt-4 md:mt-0 flex-1 flex flex-col rounded-2xl border-2 border-bgDarkGray bg-white/10 shadow-inner overflow-y-auto scrollbar-hide">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
