import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { MdKeyboardArrowRight } from "react-icons/md";

const DetailAbsensi = (props) => {
    console.log(props)
    const columnabsen = [
        {
            name: "Pertemuan",
            selector: (row) => "Pertemuan " + row.pertemuan,
        },
        {
            name: "Tanggal",
            selector: (row) => {
                const parts = row.tanggal.split("/"); 
                const day = parseInt(parts[0], 10); 
                const month = parseInt(parts[1], 10);
                const year = parseInt(parts[2], 10); 
                const uploadDate = new Date(year, month - 1, day);
                const formattedDate = `${day}/${month}/${year}`;
                return formattedDate;
            },
        },

        // {
        //     name: "Kehadiran",
        //     selector: (row) => row.kehadiran,
        //     cell: (row) => (
        //         <div>
        //             <div className="flex items-center">
        //                 <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
        //                 {getAttendanceNumber(row.kehadiran)} Siswa Hadir
        //             </div>
        //             <div className="flex items-center">
        //                 <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
        //                 {getAlphaNumber(row.kehadiran)} Siswa Alpha
        //             </div>
        //         </div>
        //     ),
        // },
        {
            name: "Aksi",
            selector: (row) => (
                <Link
                    href={route("absen-guru.show", { id: row.id })}
                    className="block  bg-[#F97316] text-white px-5 py-2 rounded-lg font-semibold"
                >
                    Lihat Detail
                </Link>
            ),
        },
    ];

    const dataabsen = [
        {
            id: 1,
            pertemuan: "Pertemuan 1",
            tanggal: "12/02/2024",
            kehadiran: {
                hadir: 12,
                alpha: 3,
            },
        },
        {
            id: 2,
            pertemuan: "Pertemuan 2",
            tanggal: "13/02/2024",
            kehadiran: {
                hadir: 10,
                alpha: 10,
            },
        },
        {
            id: 3,
            pertemuan: "Pertemuan 3",
            tanggal: "25/02/2024",
            kehadiran: {
                hadir: 1,
                alpha: 10,
            },
        },
    ];

    const getAttendanceNumber = (kehadiran) => {
        return kehadiran.hadir;
    };

    const getAlphaNumber = (kehadiran) => {
        return kehadiran.alpha;
    };

    return (
        <GuruLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("dashbboard.guru")}>Dashboard</Link>
                    <MdKeyboardArrowRight size={25} />
                    <p className="text-[#F97316]">Absensi</p>
                </div>
                <h1 className="text-xl font-bold mb-3">Absensi</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-wide">
                        Absensi
                    </h2>
                    <Link
                        className="bg-[#F97316] text-white px-5 py-3 rounded-lg font-semibold"
                        href={route("absen-guru.create")}
                    >
                        Tambah Absensi
                    </Link>
                </div>
                <DataTable
                    columns={columnabsen}
                    data={props.absens}
                    className="mt-5"
                    center
                />
            </div>
        </GuruLayout>
    );
};

export default DetailAbsensi;
