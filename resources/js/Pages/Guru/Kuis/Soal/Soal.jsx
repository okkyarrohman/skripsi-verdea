import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoImageOutline } from "react-icons/io5";

const Soal = () => {
    const dataabsen = [
        {
            kategori: "Matematika",
            pertanyaan: "Apa Itu RPL",
            gambar: "Gambar-RPL.Jpg",
        },
    ];

    const columns = [
        {
            name: "No",
            selector: (_, index) => index + 1,
        },
        {
            name: "Kategori",
            selector: (row) => row.kategori,
        },
        {
            name: "Pertanyaan",
            selector: (row) => row.pertanyaan,
        },
        {
            name: "Gambar",
            cell: (row) => (
                <div className="flex items-center">
                    <IoImageOutline size={20} className="mr-2" />
                    {row.gambar}
                </div>
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
                    <p className="mt-1  text-4xl font-bold">
                        Jangan Lupa Tambahkan Soal
                    </p>
                </div>
                <div className="w-1/2 flex justify-end">
                    <Link className="py-2.5 px-8 font-semibold text-white bg-[#F97316] rounded-lg">
                        Tambah Soal +
                    </Link>
                </div>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <DataTable columns={columns} data={dataabsen} />
            </div>
        </GuruLayout>
    );
};

export default Soal;
