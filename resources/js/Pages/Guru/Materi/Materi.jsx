import React, { useState } from "react";
import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteModal from "@/Components/Guru/Materi/DeleteModal";
import { Inertia } from "@inertiajs/inertia";

const Materi = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);

    const dataabsen = [
        {
            id: 1,
            judul: "Materi 02. Pengertian Jaringan dan Kabel",
            waktu: "12/02/2024",
        },
        {
            id: 2,
            judul: "Materi 02. Pengertian Jaringan dan Kabel",
            waktu: "12/02/2024",
        },
        {
            id: 3,
            judul: "Materi 02. Pengertian Jaringan dan Kabel",
            waktu: "12/02/2024",
        },
    ];

    const columns = [
        {
            name: "No",
            selector: (_, index) => index + 1,
        },
        {
            name: "Judul Materi",
            selector: (row) => row.judul,
        },
        {
            name: "Waktu Upload",
            selector: (row) => {
                const uploadDate = new Date(row.created_at);
                const formattedDate = `${uploadDate.getDate()}/${
                    uploadDate.getMonth() + 1
                }/${uploadDate.getFullYear()}`;
                return formattedDate;
            },
        },
        {
            name: "Aksi",
            cell: (row) => (
                <div className="flex space-x-2">
                    <Link
                        href={route("materi-guru.edit", { id: row.id })}
                        className="text-white bg-[#FB8A3C] p-2 rounded-md"
                    >
                        <FiEdit />
                    </Link>
                    <Link
                        href={route("materi-guru.show", { id: row.id })}
                        className="text-[#FB8A3C] bg-white border border-[#FB8A3C] p-2 rounded-md"
                    >
                        <LuEye />
                    </Link>
                    <button
                        onClick={() => {
                            setDeleteItemId(row.id);
                            setModalIsOpen(true);
                        }}
                        className="text-[#FB8A3C] bg-white border border-[#FB8A3C] p-2 rounded-md"
                    >
                        <RiDeleteBinLine />
                    </button>
                </div>
            ),
        },
    ];

    const handleDelete = () => {
        Inertia.delete(route("materi-guru.destroy", deleteItemId))
            .then(() => {
                setModalIsOpen(false);
                setDeleteItemId(null);
                console.log("Menghapus item dengan ID:", deleteItemId);
            })
            .catch((error) => {
                console.error("Error deleting materi:", error);
            });
    };

    return (
        <GuruLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 flex items-center rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="text-start w-1/2 py-5">
                    <h1 className="text-4xl font-bold">
                        Hi,{" "}
                        {props.auth.user.firstname +
                            " " +
                            props.auth.user.lastname}{" "}
                        👋🏻
                    </h1>
                    <p className="mt-1 text-4xl font-bold">
                        Jangan Lupa Tambah Materi!
                    </p>
                </div>
                <div className="w-1/2 flex justify-end">
                    <Link
                        href={route("materi-guru.create")}
                        className="py-2.5 px-8 font-semibold text-white bg-[#F97316] rounded-lg"
                    >
                        Tambah Materi +
                    </Link>
                </div>
            </div>
            {props.materis && props.materis.length === 0 && (
                <div className="flex flex-col items-center justify-center  mt-14">
                    <img src="/notfoundabsen.svg" alt="" />
                    <div className="text-center w-96 mt-6">
                        <h2 className="text-2xl font-bold tracking-wide">
                            Belum Terdapat Materi!
                        </h2>
                        <p className="text-lg text-[#64748B] w-4/5 text-center mx-auto mt-3">
                            Tambahkan Materi Segera
                        </p>
                    </div>
                </div>
            )}
            {props.materis.length > 0 && (
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <DataTable columns={columns} data={props.materis} pagination/>
                </div>
            )}

            <DeleteModal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                handleDelete={handleDelete}
            />
        </GuruLayout>
    );
};

export default Materi;
