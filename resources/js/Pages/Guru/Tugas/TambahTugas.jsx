import GuruLayout from "@/Layouts/GuruLayout";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const TambahTugas = () => {
    const today = new Date().toISOString().split("T")[0];
    const [nama, setNama] = useState("");
    const [tenggat, setTenggat] = useState("");
    const [soal1, setSoal1] = useState("");
    const [soal2, setSoal2] = useState("");
    const [soal3, setSoal3] = useState("");
    const [soal4, setSoal4] = useState("");
    const [soal5, setSoal5] = useState("");
    const [soal6, setSoal6] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post(route("tugas-guru.store"), {
            nama,
            tenggat,
            soal1,
            soal2,
            soal3,
            soal4,
            soal5,
            soal6,
        });
    };

    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("tugas-guru.index")}>Tugas</Link>
                    <MdKeyboardArrowRight size={25} />
                    <p className="text-[#F97316]">Tambah Tugas</p>
                </div>
                <h1 className="text-xl font-bold mb-3">Tambah Tugas</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form onSubmit={handleSubmit} className="my-6">
                    <div className="my-5 flex flex-col gap-y-2">
                        <label htmlFor="nama" className="font-semibold text-lg">
                            Judul Tugas
                        </label>
                        <input
                            id="nama"
                            type="text"
                            placeholder="Masukkan Judul Tugas"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="tenggat"
                            className="font-semibold text-lg"
                        >
                            Tenggat Tugas
                        </label>
                        <input
                            id="tenggat"
                            type="date"
                            placeholder="Masukkan Tenggat Tugas"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            min={today}
                            value={tenggat}
                            onChange={(e) => setTenggat(e.target.value)}
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soal1"
                            className="font-semibold text-lg"
                        >
                            Soal Pertama
                        </label>
                        <textarea
                            id="soal1"
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                            value={soal1}
                            onChange={(e) => setSoal1(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soal2"
                            className="font-semibold text-lg"
                        >
                            Soal Kedua
                        </label>
                        <textarea
                            id="soal2"
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                            value={soal2}
                            onChange={(e) => setSoal2(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soal3"
                            className="font-semibold text-lg"
                        >
                            Soal Ketiga
                        </label>
                        <textarea
                            id="soal3"
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                            value={soal3}
                            onChange={(e) => setSoal3(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soal4"
                            className="font-semibold text-lg"
                        >
                            Soal Keempat
                        </label>
                        <textarea
                            id="soal4"
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                            value={soal4}
                            onChange={(e) => setSoal4(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soal5"
                            className="font-semibold text-lg"
                        >
                            Soal Kelima
                        </label>
                        <textarea
                            id="soal5"
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                            value={soal5}
                            onChange={(e) => setSoal5(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soal6"
                            className="font-semibold text-lg"
                        >
                            Soal Keenam
                        </label>
                        <textarea
                            id="soal6"
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                            value={soal6}
                            onChange={(e) => setSoal6(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        <Link
                            href={route("tugas-guru.index")}
                            className="bg-white px-8 py-2.5 rounded-lg text-[#F97316] border-2 border-[#F97316] font-semibold"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold"
                        >
                            Tambah Tugas
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};

export default TambahTugas;
