import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import GuruLayout from "@/Layouts/GuruLayout";
import { Inertia } from "@inertiajs/inertia";

const TambahKategori = (props) => {
    const today = new Date().toISOString().split("T")[0];
    const [nama, setNama] = useState("");
    const [tenggat, setTenggat] = useState("");
    const [durasi, setDurasi] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post(route("kategori.store"), {
            nama,
            tenggat,
            durasi,
        });
    };

    return (
        <GuruLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href="/">Kuis</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href={route("kategori.index")}>Kategori</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Tambah Kategori Kuis
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Tambah Kategori Kuis</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form onSubmit={handleSubmit} className="my-6">
                    <div className="my-5 flex flex-col gap-y-2">
                        <label htmlFor="nama" className="font-semibold text-lg">
                            Nama Kuis
                        </label>
                        <input
                            id="nama"
                            type="text"
                            placeholder="Masukkan Nama Kuis"
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
                            Tenggat Kuis
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
                            htmlFor="durasi"
                            className="font-semibold text-lg"
                        >
                            Durasi Kuis (Menit)
                        </label>
                        <input
                            id="durasi"
                            type="number"
                            placeholder="Masukkan Durasi Kuis"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            min={0}
                            value={durasi}
                            onChange={(e) => setDurasi(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        <Link
                            href={route("kategori.index")}
                            className="bg-white px-8 py-2.5 rounded-lg text-[#F97316] border-2 border-[#F97316] font-semibold"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold"
                        >
                            Tambah Kuis
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};
export default TambahKategori;
