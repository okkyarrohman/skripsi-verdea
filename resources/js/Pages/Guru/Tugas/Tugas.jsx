import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";

const Tugas = () => {
    const dataabsen = [
        {
            judul: "Tugas Buat candi",
            waktu: "12/02/2024",
            total: 20,
        },
    ];

    const columns = [
        {
            name: "No",
            selector: (_, index) => index + 1,
        },
        {
            name: "Judul Tugas",
            selector: (row) => row.judul,
        },
        {
            name: "Tenggat Waktu",
            selector: (row) => row.waktu,
        },
        {
            name: "Siswa Mengumpulkan",
            selector: (row) => row.total,
        },
        {
            name: "Hasil",
            selector: (row) => (
                <Link
                    href={`/detail-absensi/${row.id}`}
                    className="block  bg-[#F97316] text-white px-5 py-2 rounded-lg font-semibold"
                >
                    Lihat Hasil
                </Link>
            ),
        },
        {
            name: "Aksi",
            cell: (row) => (
                <div className="flex space-x-2">
                    <Link
                        href={`/edit-materi/${row.id}`}
                        className="text-white bg-[#FB8A3C] p-2 rounded-md"
                    >
                        <FiEdit size={17} />
                    </Link>
                    <Link
                        href={`/delete-materi/${row.id}`}
                        className="text-[#FB8A3C] bg-white border border-[#FB8A3C] p-2 rounded-md"
                    >
                        <RiDeleteBinLine size={17} />
                    </Link>
                </div>
            ),
        },
    ];

    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 flex items-center rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="text-start w-1/2 py-5">
                    <h1 className="text-4xl font-bold">Hi, Guru 👋🏻</h1>
                    <p className="mt-1 text-4xl font-bold">
                        Jangan Lupa Tambah Materi!
                    </p>
                </div>
                <div className="w-1/2 flex justify-end">
                    <Link className="py-2.5 px-8 font-semibold text-white bg-[#F97316] rounded-lg">
                        Tambah Materi +
                    </Link>
                </div>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <DataTable columns={columns} data={dataabsen} />
            </div>
        </GuruLayout>
    );
};

export default Tugas;
