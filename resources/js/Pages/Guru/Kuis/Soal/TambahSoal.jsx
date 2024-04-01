import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const TambahSoal = (props) => {
    const kategori = props.kategoris;

    const [kategori_kuis_id, setKategoriKuisId] = useState("");
    const [gambar, setGambar] = useState(null);
    const [soal, setSoal] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("kategori_kuis_id", kategori_kuis_id);
        formData.append("gambar", gambar);
        formData.append("soal", soal);

        Inertia.post(route("soal.store"), formData);
    };

    const handleGambarChange = (e) => {
        setGambar(e.target.files[0]);
    };

    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href="/">Kuis</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href={route("soal.index")}>Soal</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Tambah Soal Kuis
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Tambah Soal Kuis</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form onSubmit={handleSubmit} className="my-6">
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="kategori"
                            className="font-semibold text-lg"
                        >
                            Kategori Kuis
                        </label>
                        <select
                            id="kategori"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            onChange={(e) => setKategoriKuisId(e.target.value)}
                            value={kategori_kuis_id}
                        >
                            <option value="">Pilih Kategori</option>
                            {kategori.map((kategori) => (
                                <option key={kategori.id} value={kategori.id}>
                                    {kategori.nama}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="pertanyaan"
                            className="font-semibold text-lg"
                        >
                            Pertanyaan
                        </label>
                        <textarea
                            id="pertanyaan"
                            placeholder="Masukkan Pertanyaan"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                            value={soal}
                            onChange={(e) => setSoal(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="gambar"
                            className="font-semibold text-lg"
                        >
                            Gambar (Opsional)
                        </label>
                        <input
                            id="gambar"
                            type="file"
                            className="border-2 border-[#D8DBDF] p-2 bg-[#FBFBFB] rounded-lg"
                            placeholder="Upload File"
                            onChange={handleGambarChange}
                        />
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        <Link
                            href={route("soal.index")}
                            className="bg-white px-8 py-2.5 rounded-lg text-[#F97316] border-2 border-[#F97316] font-semibold"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold"
                        >
                            Tambah Soal
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};

export default TambahSoal;
