import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const TambahTugas = () => {
    const today = new Date().toISOString().split("T")[0];

    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href="/">Tugas</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Tambah Tugas
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Tambah Tugas</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form action="" className="my-6">
                    <div className="my-5 flex flex-col gap-y-2">
                        <label htmlFor="nama" className="font-semibold text-lg">
                            Nama Tugas
                        </label>
                        <input
                            id="nama"
                            type="text"
                            placeholder="Masukkan Nama Tugas"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
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
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soalpertama"
                            className="font-semibold text-lg"
                        >
                            Soal Pertama
                        </label>
                        <textarea
                            id="soalpertama"
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soalkedua"
                            className="font-semibold text-lg"
                        >
                            Soal Kedua
                        </label>
                        <textarea
                            id="soalkedua"
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soalketiga"
                            className="font-semibold text-lg"
                        >
                            Soal Ketiga
                        </label>
                        <textarea
                            id="soalketiga"
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soalkeempat"
                            className="font-semibold text-lg"
                        >
                            Soal Keempat
                        </label>
                        <textarea
                            id="soalkeempat"
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soalkelima"
                            className="font-semibold text-lg"
                        >
                            Soal Kelima
                        </label>
                        <textarea
                            id="soalkelima"
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soalkeenam"
                            className="font-semibold text-lg"
                        >
                            Soal Keenam
                        </label>
                        <textarea
                            id="soalkeenam"
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        <button className="bg-white px-8 py-2.5 rounded-lg text-[#F97316] border-2 border-[#F97316] font-semibold">
                            Batal
                        </button>
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
