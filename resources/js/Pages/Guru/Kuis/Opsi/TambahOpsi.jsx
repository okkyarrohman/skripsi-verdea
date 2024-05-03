import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const TambahOpsi = (props) => {
    const soal = props.soals;

    const [soal_id, setSoalId] = useState("");
    const [opsi, setOpsi] = useState("");
    const [point, setPoint] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("soal_id", soal_id);
        formData.append("opsi", opsi);
        formData.append("point", point);

        Inertia.post(route("opsi.store"), formData);
    };

    return (
        <GuruLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href="/">Kuis</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href={route("opsi.index")}>Opsi</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Tambah Opsi Jawaban Kuis
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">
                    {" "}
                    Tambah Opsi Jawaban Kuis
                </h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form action="" className="my-6" onSubmit={handleSubmit}>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="pertanyaan"
                            className="font-semibold text-lg"
                        >
                            Pertanyaan
                        </label>
                        <select
                            id="pertanyaan"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            onChange={(e) => setSoalId(e.target.value)}
                        >
                            <option value="">Pilih Pertanyaan</option>
                            {soal.map((soal) => (
                                <option key={soal.id} value={soal.id}>
                                    {soal.soal}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label htmlFor="opsi" className="font-semibold text-lg">
                            Opsi Jawaban
                        </label>
                        <input
                            id="opsi"
                            type="text"
                            placeholder="Masukkan Opsi Jawaban"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            onChange={(e) => setOpsi(e.target.value)}
                            value={opsi}
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="point"
                            className="font-semibold text-lg"
                        >
                            Point
                        </label>
                        <input
                            id="point"
                            type="number"
                            className="border-2 border-[#D8DBDF]  bg-[#FBFBFB] rounded-lg"
                            placeholder="Masukkan Point Jawaban"
                            min={1}
                            onChange={(e) => setPoint(e.target.value)}
                            value={point}
                        />
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        <Link
                            href={route("opsi.index")}
                            className="bg-white px-8 py-2.5 rounded-lg text-[#F97316] border-2 border-[#F97316] font-semibold"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold"
                        >
                            Tambah Opsi
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};
export default TambahOpsi;
