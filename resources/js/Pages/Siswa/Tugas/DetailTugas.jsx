import SiswaLayout from "@/Layouts/SiswaLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const DetailTugas = (props) => {
    return (
        <SiswaLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("tugas.index")}>Tugas</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Detail Tugas
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Detail Tugas</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form action="" className="my-6">
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
                        <input
                            type="file"
                            className="border-2 rounded-lg p-2"
                        />
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
        </SiswaLayout>
    );
};
export default DetailTugas;
