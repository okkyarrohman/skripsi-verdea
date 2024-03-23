import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const DetailMateri = () => {
    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href="/">Materi</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Detail Materi
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Detail Materi</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <h1 className="text-2xl font-bold mb-3">
                    Materi 02. Pengertian Jaringan dan Kabel
                </h1>
                <p className="justify-center">
                    Figma ipsum component variant main layer. Effect boolean
                    scrolling community plugin vertical select scale comment
                    italic. Shadow edit team text list outline frame group
                    bullet. Auto figma device boolean hand. Vector share bold
                    background style layout. Bold flatten boolean comment
                    ellipse comment. Ipsum draft move ipsum invite polygon
                    shadow. Team outline draft flatten scrolling bold horizontal
                    object shadow. Subtract union slice vector bullet group.
                    Mask edit content overflow plugin invite layout layout
                    content stroke.
                </p>
                <div className="mt-5">
                    <embed
                        src="silabus.pdf"
                        type="application/pdf"
                        width="100%"
                        height="500px"
                    />
                </div>
            </div>
        </GuruLayout>
    );
};
export default DetailMateri;
