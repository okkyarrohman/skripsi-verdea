import Navbar from "@/Components/Navbar";
import { LuBookMinus } from "react-icons/lu";
const Home = () => {
    return (
        <>
            <Navbar />
            <div
                id="home"
                className="flex mt-14 justify-center items-center mb-10"
            >
                <div className="w-1/2  px-24">
                    <div className="flex items-center text-lg gap-x-3 text-[#F97316]">
                        {" "}
                        <LuBookMinus size={25} />
                        <p className="font-semibold">
                            Belajar Seru Dengan Eduhouse
                        </p>
                    </div>
                    <h1 className="text-6xl font-extrabold mt-3">
                        Belajar Mudah Bersama{" "}
                        <span className="text-[#F97316]">Eduhouse</span>
                    </h1>
                    <p className="text-[#333333] text-lg tracking-wide mt-4">
                        Temukan Kemudahan Belajar Bersama Eduhouse: Solusi
                        Terbaik untuk Perjalanan Belajar Anda
                    </p>
                    <button className="mt-5 px-6 py-3 tracking-wide bg-[#F97316] text-white rounded-xl">
                        Belajar Sekarang!
                    </button>
                </div>
                <div className="w-1/2">
                    <img src="hero1.svg" alt="" />
                </div>
            </div>
            <div id="menu" className="mt-36">
                <h1 className="text-5xl font-bold text-center">Menu</h1>
                <div className="border-b-4 border-[#F97316] mt-4 w-36 mx-auto"></div>
                <div className="grid grid-cols-3 gap-20 mt-56 px-20">
                    <div className="bg-white border-2 shadow-sm rounded-2xl ">
                        <img
                            src="menu1.svg"
                            alt=""
                            className="mx-auto -mt-40 w-[20rem]"
                        />
                        <h1 className="text-4xl font-bold text-center mt-10">
                            Materi
                        </h1>
                        <p className="text-lg px-10 text-center text-[#777777] mt-7 mb-8">
                            Pembelajaran interaktif dengan akses mudah untuk
                            penggunaan optimal platform pembelajaran
                        </p>
                    </div>
                    <div className="bg-white border-2 shadow-sm rounded-2xl ">
                        <img
                            src="menu2.svg"
                            alt=""
                            className="mx-auto -mt-40 w-[20rem]"
                        />
                        <h1 className="text-4xl font-bold text-center mt-10">
                            Tugas dan Kuis
                        </h1>
                        <p className="text-lg px-10 text-center text-[#777777] mt-7 mb-8">
                            Meningkatkan pemahaman melalui platform pembelajaran
                            yang fleksibel dan menarik
                        </p>
                    </div>
                    <div className="bg-white border-2 shadow-sm rounded-2xl ">
                        <img
                            src="menu2.svg"
                            alt=""
                            className="mx-auto -mt-40 w-[20rem]"
                        />
                        <h1 className="text-4xl font-bold text-center mt-10">
                            Refrensi dan Tutor
                        </h1>
                        <p className="text-lg px-10 text-center text-[#777777] mt-7 mb-8">
                            Sumber Belajar dan Bimbingan: Memperluas wawasan
                            dengan referensi lengkap dan panduan
                        </p>
                    </div>
                </div>
            </div>
            <div id="tentang" className="mt-36">
                <h1 className="text-5xl font-bold text-center">
                    Tentang Eduhouse
                </h1>
                <div className="border-b-4 border-[#F97316] mt-4 w-80 mx-auto"></div>
            </div>
            <div className="flex mt-20 justify-center items-center">
                <div className="w-1/2 px-20 py-5 mx-auto">
                    <img src="hero2.svg" alt="" className="w-[30rem] mx-auto" />
                </div>
                <div className="w-1/2  px-24">
                    <div className="flex items-center text-lg gap-x-3 text-[#F97316]">
                        {" "}
                        <img src="logo.png" alt="" />
                        <p className="font-extrabold text-3xl">Eduhouse</p>
                    </div>
                    <p className="text-[#333333] text-lg tracking-wide mt-4">
                        "Eduhouse: Platform pembelajaran daring yang menyediakan
                        sumber belajar untuk meningkatkan pengetahuan dan
                        keterampilan Anda secara fleksibel dan interaktif
                    </p>
                    <button className="mt-5 px-6 py-3 tracking-wide bg-[#F97316] text-white rounded-xl">
                        Belajar Sekarang!
                    </button>
                </div>
            </div>
            <div className="mt-32 bg-[#F97316] text-xl tracking-wider font-bold text-center text-white py-6">
                Copyright - Eduhouse 2024
            </div>
        </>
    );
};
export default Home;
