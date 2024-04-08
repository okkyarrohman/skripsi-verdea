import React, { useState } from "react";
import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteModal from "@/Components/Guru/Tugas/DeleteModal";

const Tugas = (props) => {
    console.log(props);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);

    const dataabsen = [
        {
            id: 1,
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
            selector: (row) => row.nama,
        },
        {
            name: "Tenggat Waktu",
            selector: (row) => {
                const uploadDate = new Date(row.tenggat);
                const formattedDate = `${uploadDate.getDate()}/${
                    uploadDate.getMonth() + 1
                }/${uploadDate.getFullYear()}`;
                return formattedDate;
            },
        },
        {
            name: "Siswa Mengumpulkan",
            selector: (row) => row.total,
        },
        {
            name: "Hasil",
            selector: (row) => (
                <Link
                    href={route("tugas-guru.show",row.id)}
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
                        href={route("tugas-guru.edit",row.id)}
                        className="text-white bg-[#FB8A3C] p-2 rounded-md"
                    >
                        <FiEdit size={17} />
                    </Link>
                    <button
                        className="text-[#FB8A3C] bg-white border border-[#FB8A3C] p-2 rounded-md"
                        onClick={() => {
                            setDeleteItemId(row.id);
                            setModalIsOpen(true);
                        }}
                    >
                        <RiDeleteBinLine size={17} />
                    </button>
                </div>
            ),
        },
    ];

    const handleDelete = () => {
        console.log("Menghapus item dengan ID:", deleteItemId);
        setModalIsOpen(false);
    };

    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 flex items-center rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="text-start w-1/2 py-5">
                    <h1 className="text-4xl font-bold">Hi, Guru 👋🏻</h1>
                    <p className="mt-1 text-4xl font-bold">
                        Jangan Lupa Kerjakan Kuis!
                    </p>
                </div>
                <div className="w-1/2 flex justify-end">
                    <Link
                        href={route("tugas-guru.create")}
                        className="py-2.5 px-8 font-semibold text-white bg-[#F97316] rounded-lg"
                    >
                        Tambah Tugas +
                    </Link>
                </div>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <DataTable columns={columns} data={props.tugases} />
            </div>

            <DeleteModal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                handleDelete={handleDelete}
            />
        </GuruLayout>
    );
};

export default Tugas;
