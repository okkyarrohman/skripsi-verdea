import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";

const NotfoundHasil = (props) => {
    return (
        <GuruLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 flex items-center rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="text-start w-2/3 py-5">
                    <h1 className="text-4xl font-bold">Hi, Guru 👋🏻</h1>
                    <p className="mt-1  text-4xl font-bold">
                        Jangan Lupa Lihat Hasil Kuis Siswa
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center  mt-14">
                <img src="notfoundabsen.svg" alt="" />
                <div className="text-center w-96 mt-6">
                    <h2 className="text-2xl font-bold tracking-wide">
                        Belum Terdapat Hasil Kuis Siswa!
                    </h2>
                    <p className="text-lg text-[#64748B] w-4/5 text-center mx-auto mt-3">
                        Harap Mengingatkan siswa untuk mengerjakan kuis
                    </p>
                </div>
            </div>
        </GuruLayout>
    );
};

export default NotfoundHasil;
