import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const DetailHasil = (props) => {
    console.log(props)
    const dataabsen = [
        {
            nama: "Andre",
            point: 20,
        },
    ];

    const columns = [
        {
            name: "No",
            selector: (_, index) => index + 1,
        },
        {
            name: "Nama",
            selector: (row) => row.nama,
        },
        {
            name: "Point",
            selector: (row) => row.total_points,
        },
    ];

    return (
        <GuruLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("kategori.index")}>Kuis</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href={route("hasil.index")}>Hasil</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Hasil Kuis RPL 01
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3"> Hasil Kuis RPL 01</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <DataTable columns={columns} data={props.hasils} />
            </div>
        </GuruLayout>
    );
};

export default DetailHasil;
