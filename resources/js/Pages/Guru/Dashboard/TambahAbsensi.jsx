import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { MdKeyboardArrowRight } from "react-icons/md";

const TambahAbsensi = (props) => {
    const [pertemuan, setPertemuan] = useState("");
    const [tanggal, setTanggal] = useState(null);
    const [tenggat, setTenggat] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("pertemuan", pertemuan);
        formData.append("tanggal", tanggal);
        formData.append("tenggat", tenggat);

        Inertia.post(route("absen-guru.store"), formData);
    };
    return (
        <GuruLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("dashbboard.guru")}>Dashboard</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href={route("absen-guru.index")}>Absensi</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Tambah Absensi
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Tambah Absensi</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form action="" className="my-6" onSubmit={handleSubmit}>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="pertemuan"
                            className="font-semibold text-lg"
                        >
                            Pertemuan
                        </label>
                        <input
                            id="pertemuan"
                            type="number"
                            min={1}
                            placeholder="Masukkan pertemuan ke berapa"
                            value={pertemuan}
                            onChange={(e) => setPertemuan(e.target.value)}
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="tanggal"
                            className="font-semibold text-lg"
                        >
                            Tanggal Pertemuan
                        </label>
                        <input
                            id="tanggal"
                            type="date"
                            value={tanggal}
                            onChange={(e) => setTanggal(e.target.value)}
                            placeholder="Masukkan pertemuan ke berapa"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="tanggal"
                            className="font-semibold text-lg"
                        >
                            Tenggat
                        </label>
                        <input
                            id="tanggal"
                            type="date"
                            value={tenggat}
                            onChange={(e) => setTenggat(e.target.value)}
                            placeholder="Masukkan pertemuan ke berapa"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                        />
                    </div>
                    <div className="flex justify-end mt-6">
                        <button className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold">
                            Tambah Absensi Baru
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};
export default TambahAbsensi;
