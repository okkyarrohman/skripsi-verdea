import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiDownload } from "react-icons/fi";

const DetailJawaban = () => {
    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href="/">Detail</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="/">Hasil Tugas</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Jawaban
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">
                    Jawaban Tugas Agung Setia Abadi
                </h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form action="" className="my-6">
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Nama Siswa</p>
                        <p className="text-[#64748B] text-justify">
                            Agung Setia Abadi
                        </p>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Tugas</p>
                        <p className="text-[#64748B] text-justify">
                            Keamanan Jaringan dan Infrastruktur Komputer pada
                            Lab
                        </p>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Deskripsi</p>
                        <p className="text-[#64748B] text-justify">
                            Figma ipsum component variant main layer. Effect
                            boolean scrolling community plugin vertical select
                            scale comment italic. Shadow edit team text list
                            outline frame group bullet. Auto figma device
                            boolean hand. Vector share bold background style
                            layout. Bold flatten boolean comment ellipse
                            comment. Ipsum draft move ipsum invite polygon
                            shadow. Team outline draft flatten scrolling bold
                            horizontal object shadow. Subtract union slice
                            vector bullet group. Mask edit content overflow
                            plugin invite layout layout content stroke.
                        </p>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Deadline</p>
                        <p className="text-[#EF4444] text-justify">
                            Sabtu, 32 Maret 2024 23.00
                        </p>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Tugas Siswa</p>
                        <button className="flex justify-start items-center gap-x-2 bg-[#FB8A3C] px-8 w-44 text-white font-semibold rounded-lg py-2.5">
                            <FiDownload size={20} />
                            <p>Unduh FIle</p>
                        </button>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="nilai"
                            className="font-semibold text-lg"
                        >
                            Nilai
                        </label>
                        <input
                            id="nilai"
                            type="number"
                            placeholder="Masukkan Nilai"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="feedback"
                            className="font-semibold text-lg"
                        >
                            Feedback Tugas
                        </label>
                        <textarea
                            id="feedback"
                            placeholder="Masukkan Feedback Tugas"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        <button
                            type="submit"
                            className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};
export default DetailJawaban;
