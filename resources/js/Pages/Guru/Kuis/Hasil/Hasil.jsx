import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";

const Hasil = (props) => {
    const dataabsen = [
        {
            kuis: "Kuis RPL 01",
        },
    ];

    const columns = [
        {
            name: "No",
            selector: (_, index) => index + 1,
        },
        {
            name: "Kuis",
            selector: (row) => row.kuis,
        },
        {
            name: "Aksi",
            selector: (row) => (
                <Link
                    href={`/detail-absensi/${row.id}`}
                    className="block  bg-[#F97316] text-white px-5 py-2 rounded-lg font-semibold"
                >
                    Detail
                </Link>
            ),
        },
    ];

    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 flex items-center rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="text-start w-2/3 py-5">
                    <h1 className="text-4xl font-bold">Hi, Guru 👋🏻</h1>
                    <p className="mt-1 text-4xl font-bold">
                        Jangan Lupa Lihat Hasil Kuis Siswa
                    </p>
                </div>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <DataTable columns={columns} data={dataabsen} />
            </div>
        </GuruLayout>
    );
};

export default Hasil;
