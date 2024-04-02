import SiswaLayout from "@/Layouts/SiswaLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const DetailReferensi = (props) => {
    const UrlBase = "http://localhost:8000";
    return (
        <SiswaLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("referensi.index")}>Referensi</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Detail Referensi
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Detail Referensi</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <h1 className="text-2xl font-bold mb-3">
                    {props.referensis.judul}
                </h1>
                <p className="justify-center">{props.referensis.deskripsi}</p>
                <div className="mt-5">
                    <embed
                        src={`${UrlBase}/storage/referensi/pdf/${props.referensis.pdf}`}
                        type="application/pdf"
                        width="100%"
                        height="500px"
                    />
                </div>
            </div>
        </SiswaLayout>
    );
};
export default DetailReferensi;
