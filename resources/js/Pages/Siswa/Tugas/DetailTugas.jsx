import { useState } from "react";
import SiswaLayout from "@/Layouts/SiswaLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const DetailTugas = ({ auth, tugasUser }) => {
    const steps = [
        { id: 1, nama: "Penentuan Proyek" },
        { id: 2, nama: "Menyusun Proyek" },
        { id: 3, nama: "Menyusun Jadwal Proyek" },
        { id: 4, nama: "Monitoring" },
        { id: 5, nama: "Penyusunan Hasil" },
        { id: 6, nama: "Evaluasi Pengalaman" },
    ];

    const [activeStep, setActiveStep] = useState(1);

    const handleStepClick = (stepId) => {
        setActiveStep(stepId);
    };

    console.log(tugasUser[`tugas${activeStep}`]);

    const isLastStep = activeStep === steps.length;

    return (
        <SiswaLayout auth={auth}>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("tugas.index")}>Tugas</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Detail Tugas
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Detail Tugas</h1>
            </div>
            <div className="p-4 rounded-xl mt-3 ">
                <div className="flex gap-x-3 overflow-x-scroll flex-nowrap min-w-[100%]">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`min-w-64 p-3 rounded-lg flex flex-col gap-y-1 ${
                                step.id === activeStep
                                    ? "bg-[#F97316] cursor-pointer"
                                    : "bg-gray-200 text-black cursor-pointer"
                            }`}
                            onClick={() => handleStepClick(step.id)}
                        >
                            <p
                                className={`text-sm font-light ${
                                    step.id === activeStep
                                        ? "text-white"
                                        : "text-gray-500"
                                }`}
                            >
                                Step {step.id}
                            </p>
                            <p
                                className={`font-medium ${
                                    step.id === activeStep
                                        ? "text-white"
                                        : "text-black"
                                }`}
                            >
                                {step.nama}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form action="" className="my-6">
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Deskripsi Tugas</p>
                        <p className="text-[#64748B] text-justify">
                            {tugasUser.tugas[`soal${activeStep}`]}
                        </p>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Jawaban</p>
                        <textarea
                            className=" text-justify h-48 rounded-lg border-2 border-gray-300"
                            placeholder="Masukkan jawaban anda"
                            value={tugasUser[`tugas${activeStep}`]}
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Tugas Siswa</p>
                        <input
                            type="file"
                            className="border-2 rounded-lg p-2"
                        />
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        {isLastStep ? (
                            <button
                                type="submit"
                                className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold"
                            >
                                Kirim
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => setActiveStep(activeStep + 1)}
                                className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold"
                            >
                                Selanjutnya
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </SiswaLayout>
    );
};

export default DetailTugas;
