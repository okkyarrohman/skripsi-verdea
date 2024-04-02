import { useState } from "react";
import SiswaLayout from "@/Layouts/SiswaLayout";
import { Link } from "@inertiajs/react";

const AwalKuis = () => {
    // State untuk melacak opsi yang dipilih
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <>
            <SiswaLayout>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <div className="text-center">
                        <h3 className="text-[#64748B]">Sisa Waktu</h3>
                        <h3 className="font-semibold text-lg">10:00</h3>
                    </div>
                    <div className="flex items-center text-lg font-semibold mt-5">
                        <h3>KUIS RPL 02</h3>
                        <h3 className="ml-auto">01 / 10</h3>
                    </div>
                    <div className="mt-5">
                        <div className="flex items-center justify-center mb-8">
                            <img src="materi.png" alt="" className="w-96" />
                        </div>
                        <p className="text-justify">
                            Figma ipsum component variant main layer. Effect
                            boolean scrolling community plugin vertical select
                            scale comment italic. Shadow edit team text list
                            outline frame group bullet. Auto figma device
                            boolean hand. Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Animi facere iusto at
                            rem incidunt culpa nobis, voluptates magnam
                            distinctio dolorem reprehenderit. Est nesciunt
                            voluptatibus quaerat beatae dolores, autem
                            voluptatum laudantium?
                        </p>
                        <div className="mt-4 flex flex-col gap-y-4">
                            <div
                                className={`flex items-center border-2 rounded-xl p-3 ${
                                    selectedOption === "option1"
                                        ? "border-[#FB8A3C] text-[#FB8A3C]"
                                        : "border-white text-black"
                                }`}
                            >
                                <input
                                    type="radio"
                                    id="option1"
                                    name="options"
                                    value="option1"
                                    className="w-4 h-4 text-[#FB8A3C] focus:ring-[#FB8A3C] focus:border-[#FB8A3C]"
                                    onChange={() =>
                                        setSelectedOption("option1")
                                    } // Mengatur opsi yang dipilih ke 'option1' saat input berubah
                                />
                                <label
                                    htmlFor="option1"
                                    className="ms-2 font-medium"
                                >
                                    Option 1
                                </label>
                            </div>
                            <div
                                className={`flex items-center border-2 rounded-xl p-3 ${
                                    selectedOption === "option2"
                                        ? "border-[#FB8A3C] text-[#FB8A3C]"
                                        : "border-white text-black"
                                }`}
                            >
                                <input
                                    type="radio"
                                    id="option2"
                                    name="options"
                                    value="option2"
                                    className="w-4 h-4 text-[#FB8A3C] focus:ring-[#FB8A3C] focus:border-[#FB8A3C]"
                                    onChange={() =>
                                        setSelectedOption("option2")
                                    } // Mengatur opsi yang dipilih ke 'option2' saat input berubah
                                />
                                <label
                                    htmlFor="option2"
                                    className="ms-2 font-medium"
                                >
                                    Option 2
                                </label>
                            </div>
                            <div
                                className={`flex items-center border-2 rounded-xl p-3 ${
                                    selectedOption === "option3"
                                        ? "border-[#FB8A3C] text-[#FB8A3C]"
                                        : "border-white text-black"
                                }`}
                            >
                                <input
                                    type="radio"
                                    id="option3"
                                    name="options"
                                    value="option3"
                                    className="w-4 h-4 text-[#FB8A3C] focus:ring-[#FB8A3C] focus:border-[#FB8A3C]"
                                    onChange={() =>
                                        setSelectedOption("option3")
                                    }
                                />
                                <label
                                    htmlFor="option3"
                                    className="ms-2 font-medium"
                                >
                                    Option 3
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end my-8">
                            <Link className="bg-[#FB8A3C] px-5 py-2 text-white rounded-lg">
                                Selanjutnya
                            </Link>
                        </div>
                    </div>
                </div>
            </SiswaLayout>
        </>
    );
};

export default AwalKuis;
