import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const TambahMateri = () => {
    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href="/">Materi</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Tambah Materi
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Tambah Materi</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form action="" className="my-6">
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="judul"
                            className="font-semibold text-lg"
                        >
                            Judul Materi
                        </label>
                        <input
                            id="judul"
                            type="text"
                            min={1}
                            placeholder="Masukkan Judul Materi"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="deskripsi"
                            className="font-semibold text-lg"
                        >
                            Deskripsi Materi
                        </label>
                        <textarea
                            id="deskripsi"
                            placeholder="Masukkan Deskripsi Materi"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        <button className="bg-white px-8 py-2.5 rounded-lg text-[#F97316] border-2 border-[#F97316] font-semibold">
                            Batal
                        </button>
                        <button className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold">
                            Tambah Materi
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};
export default TambahMateri;
