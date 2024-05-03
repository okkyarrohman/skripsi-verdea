import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoImageOutline } from "react-icons/io5";
import { useState } from "react";
import DeleteModal from "@/Components/Guru/Kuis/Soal/DeleteModal";
import { Inertia } from "@inertiajs/inertia";

const Soal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);
    console.log(props.soals);
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
            selector: (row) => row.kategori_kuis.nama,
        },
        {
            name: "Pertanyaan",
            selector: (row) => row.soal,
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
                        href={route("soal.edit", { id: row.id })}
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
        Inertia.delete(route("soal.destroy", deleteItemId))
            .then(() => {
                setModalIsOpen(false);
                setDeleteItemId(null);
                console.log("Menghapus item dengan ID:", deleteItemId);
            })
            .catch((error) => {
                console.error("Error deleting soal:", error);
            });
    };

    return (
        <GuruLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 flex items-center rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="text-start w-1/2 py-5">
                    <h1 className="text-4xl font-bold">Hi, Guru 👋🏻</h1>
                    <p className="mt-1  text-4xl font-bold">
                        Jangan Lupa Tambahkan Soal
                    </p>
                </div>
                <div className="w-1/2 flex justify-end">
                    <Link
                        href={route("soal.create")}
                        className="py-2.5 px-8 font-semibold text-white bg-[#F97316] rounded-lg"
                    >
                        Tambah Soal +
                    </Link>
                </div>
            </div>
            {props.soals && props.soals.length === 0 && (
                <div className="flex flex-col items-center justify-center  mt-14">
                    <img src="/notfoundabsen.svg" alt="" />
                    <div className="text-center w-96 mt-6">
                        <h2 className="text-2xl font-bold tracking-wide">
                            Belum Terdapat Soal!
                        </h2>
                        <p className="text-lg text-[#64748B] w-4/5 text-center mx-auto mt-3">
                            Tambahkan Soal Untuk Kategori Kuis Segera
                        </p>
                    </div>
                </div>
            )}
            {props.soals.length > 0 && (
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <DataTable
                        columns={columns}
                        data={props.soals}
                        pagination
                    />
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

export default Soal;
