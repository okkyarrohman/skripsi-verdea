import GuruLayout from "@/Layouts/GuruLayout";
import { Link, useForm } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const EditSoal = (props) => {
    const kategori = props.kategoris;
    const { data, setData, post } = useForm({
        _method: "patch",
        id: props.soals.id,
        soal: props.soals.soal,
        gambar: props.soals.gambar,
        kategori_kuis_id: props.soals.kategori_kuis_id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("soal.update", { id: props.soals.id }), {
            data,
        });
    };

    return (
        <GuruLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href="/">Kuis</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href={route("soal.index")}>Soal</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Edit Soal Kuis
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3"> Edit Soal Kuis</h1>
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
                            onChange={(e) =>
                                setData("kategori_kuis_id", e.target.value)
                            }
                            value={data.kategori_kuis_id}
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
                            onChange={(e) => setData("soal", e.target.value)}
                            value={data.soal}
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
                            onChange={(e) =>
                                setData("gambar", e.target.files[0])
                            }
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
                            Edit Soal
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};
export default EditSoal;
