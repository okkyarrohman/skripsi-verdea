import StartKuis from "@/Components/Siswa/Kuis/StartKuis";
import SiswaLayout from "@/Layouts/SiswaLayout";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { MdQuestionAnswer } from "react-icons/md";

const Kuis = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    console.log(props);

    const handleQuizStart = () => {
        // Tambahkan logika untuk memulai kuis di sini
        console.log("Memulai kuis...");
        // Setelah memulai kuis, buka modal
        setModalIsOpen(true);
    };

    return (
        <SiswaLayout>
            <div className="p-4 border-2 border-gray-200 flex items-center rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="text-start w-1/2">
                    <h1 className="text-4xl font-bold">Hi, Oky Anugrah 👋🏻</h1>
                    <h1 className="text-4xl font-bold">
                        Jangan Lupa Kerjakan Kuis!
                    </h1>
                    <p className="mt-3 mb-7 text-lg">
                        Ayo ikuti kuis dengan jawaban yang tepat dan sesuai
                        tenggat yang diberikan
                    </p>
                </div>
                <div className="w-1/2">
                    <img src="/kuis1.svg" alt="" className="float-right w-80" />
                </div>
            </div>
            {props.kategori.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-7">
                    {props.kategori.map((category, index) => (
                        <div
                            key={index}
                            className="max-w-sm bg-white rounded-2xl shadow p-5 flex flex-col justify-between"
                        >
                            <h3 className="text-[#F97316] text-lg font-semibold tracking-wide flex items-center space-x-2">
                                <MdQuestionAnswer className="text-lg" />
                                <span>Kuis</span>
                            </h3>
                            <div className="">
                                <Link href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                        {category.nama}
                                    </h5>
                                </Link>
                                <div className="mt-3 text-gray-700 mb-5 flex flex-col gap-y-2 text-lg">
                                    <p>Soal : {category.soal.length}</p>
                                    <p>Waktu : {category.durasi} Menit</p>
                                    <p>Nilai : 100</p>
                                </div>
                            </div>
                            <button
                                className="w-full bg-[#F97316] text-center py-2 text-white tracking-wide rounded-lg inline-flex items-center justify-center mt-auto"
                                onClick={handleQuizStart}
                            >
                                Kerjakan
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {props.kategori && props.kategori.length === 0 && (
                <div className="flex flex-col items-center justify-center  mt-14">
                    <img src="/notfoundabsen.svg" alt="" />
                    <div className="text-center w-96 mt-6">
                        <h2 className="text-2xl font-bold tracking-wide">
                            Belum Terdapat Kuis!
                        </h2>
                        <p className="text-lg text-[#64748B] w-4/5 text-center mx-auto mt-3">
                            Cek selalu Kuis dan jangan sampai terlewatkan
                        </p>
                    </div>
                </div>
            )}
            <StartKuis
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
            />
        </SiswaLayout>
    );
};

export default Kuis;
