import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { MdKeyboardArrowRight } from "react-icons/md";

const DetailAbsensiPerhari = (props) => {
    console.log(props)
    const columnabsen = [
        {
            name: "Nama",
            selector: (row) => row.nama,
        },
        {
            name: "Waktu Absensi",
            selector: (row) => row.waktu,
        },
        {
            name: "Kehadiran",
            selector: (row) => (
                <span
                    className={`inline-flex items-center ${
                        row.kehadiran === "Hadir"
                            ? "bg-green-100 text-green-800 border border-green-600"
                            : "bg-red-100 text-red-800 border border-red-600"
                    } text-xs font-medium px-5 py-1 rounded-full`}
                >
                    <span
                        className={`h-2 w-2 rounded-full mr-2 ${
                            row.kehadiran === "Hadir"
                                ? "bg-green-500"
                                : "bg-red-500"
                        }`}
                    ></span>
                    {row.kehadiran}
                </span>
            ),
        },
    ];

    const dataabsen = [
        {
            nama: "John Doe",
            waktu: "12.14",
            kehadiran: "Hadir",
        },
        {
            nama: "John Doe",
            waktu: "12.14",
            kehadiran: "Hadir",
        },
        {
            nama: "John Doe",
            waktu: "12.14",
            kehadiran: "Alpha",
        },
    ];

    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("dashbboard.guru")}>Dashboard</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href={route("absen-guru.index")}>Absensi</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Detail Absensi
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">
                    Pertemuan 3, 12/02/2024
                </h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <DataTable
                    columns={columnabsen}
                    data={dataabsen}
                    className="mt-5"
                />
            </div>
        </GuruLayout>
    );
};

export default DetailAbsensiPerhari;
