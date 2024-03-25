import SiswaLayout from "@/Layouts/SiswaLayout";
import { Link } from "@inertiajs/react";
import { MdQuestionAnswer } from "react-icons/md";

const Kuis = () => {
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
                    <img src="kuis1.svg" alt="" className="float-right w-80" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-7">
                <div className="max-w-sm bg-white rounded-2xl shadow p-5 flex flex-col justify-between">
                    <h3 className="text-[#F97316] text-lg font-semibold tracking-wide flex items-center space-x-2">
                        <MdQuestionAnswer className="text-lg" />
                        <span>Kuis</span>
                    </h3>
                    <div className="">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                Kuis 01-RPL
                            </h5>
                        </Link>
                        <div className="mt-3 text-gray-700 mb-5 flex flex-col gap-y-2 text-lg">
                            <p>Soal : 30</p>
                            <p>Waktu : 60 Menit</p>
                            <p>Nilai : 100</p>
                        </div>
                    </div>
                    <Link
                        href="#"
                        className="w-full bg-[#F97316] text-center py-2 text-white tracking-wide rounded-lg inline-flex items-center justify-center mt-auto"
                    >
                        Kerjakan
                    </Link>
                </div>

                <div className="max-w-sm bg-white rounded-2xl shadow p-5 flex flex-col justify-between">
                    <h3 className="text-[#F97316] text-lg font-semibold tracking-wide flex items-center space-x-2">
                        <MdQuestionAnswer className="text-lg" />
                        <span>Kuis</span>
                    </h3>
                    <div className="">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                Kuis 01-RPL
                            </h5>
                        </Link>
                        <div className="mt-3 text-gray-700 mb-5 flex flex-col gap-y-2 text-lg">
                            <p>Soal : 30</p>
                            <p>Waktu : 60 Menit</p>
                        </div>
                    </div>
                    <Link
                        href="#"
                        className="w-full bg-[#F97316] text-center py-2 text-white tracking-wide rounded-lg inline-flex items-center justify-center mt-auto"
                    >
                        Kerjakan
                    </Link>
                </div>
                <div className="max-w-sm bg-white rounded-2xl shadow p-5 flex flex-col justify-between">
                    <h3 className="text-[#F97316] text-lg font-semibold tracking-wide flex items-center space-x-2">
                        <MdQuestionAnswer className="text-lg" />
                        <span>Kuis</span>
                    </h3>
                    <div className="">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                Kuis 01-RPL
                            </h5>
                        </Link>
                        <div className="mt-3 text-gray-700 mb-5 flex flex-col gap-y-2 text-lg">
                            <p>Soal : 30</p>
                            <p>Waktu : 60 Menit</p>
                        </div>
                    </div>
                    <Link
                        href="#"
                        className="w-full bg-[#F97316] text-center py-2 text-white tracking-wide rounded-lg inline-flex items-center justify-center mt-auto"
                    >
                        Kerjakan
                    </Link>
                </div>
            </div>
        </SiswaLayout>
    );
};

export default Kuis;
