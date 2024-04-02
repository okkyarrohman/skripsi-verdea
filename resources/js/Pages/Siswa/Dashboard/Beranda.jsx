import DataTable from "react-data-table-component";
import { Link } from "@inertiajs/react";
import { LuBookOpen } from "react-icons/lu";
import SiswaLayout from "@/Layouts/SiswaLayout";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const Beranda = (props) => {
    console.log(props)
    const columnabsen = [
        {
            name: "Pertemuan",
            selector: "pertemuan",
            cell: (row) => <span className="font-bold">{row.pertemuan}</span>,
        },
        {
            name: "Kehadiran",
            selector: "status",
            cell: (row) => (
                <span
                    className={`inline-flex items-center ${
                        row.status === "Hadir"
                            ? "bg-green-100 text-green-800 border border-green-600"
                            : row.status === "Belum Absen"
                            ? "bg-gray-100 text-gray-800 border border-gray-600"
                            : "bg-red-100 text-red-800 border border-red-600"
                    } text-xs font-medium px-5 py-1 rounded-full`}
                >
                    <span
                        className={`h-2 w-2 rounded-full mr-2 ${
                            row.status === "Hadir"
                                ? "bg-green-500"
                                : row.status === "Belum Absen"
                                ? "bg-gray-500"
                                : "bg-red-500"
                        }`}
                    ></span>
                    {row.status}
                </span>
            ),
        },
    ];

    const dataabsen = [
        {
            id: 1,
            pertemuan: (
                <>
                    <span className="font-bold text-lg">Pertemuan 1</span>
                    <br />
                    <span className="font-normal">12/02/2024</span>
                </>
            ),
            status: "Hadir",
        },
        {
            id: 2,
            pertemuan: (
                <>
                    <span className="font-bold text-lg">Pertemuan 2</span>
                    <br />
                    <span className="font-normal">12/02/2024</span>
                </>
            ),
            status: "Belum Absen",
        },
        {
            id: 3,
            pertemuan: (
                <>
                    <span className="font-bold text-lg">Pertemuan 3</span>
                    <br />
                    <span className="font-normal">12/02/2024</span>
                </>
            ),
            status: "Alpha",
        },
    ];

    return (
        <>
            <SiswaLayout>
                <div className="p-4 border-2 border-gray-200 flex items-center rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <div className="text-start w-1/2">
                        <h1 className="text-4xl font-bold">
                            Hi, Selamat Datang {props.auth.user.name} 👋🏻
                        </h1>
                        <p className="mt-3 mb-7 text-lg">
                            Ayo tingkatkan belajarmu dengan pembelajaran yang
                            menyenangkan bersama Eduhouse!
                        </p>
                    </div>
                    <div className="w-1/2">
                        <img src="/dsguru1.svg" alt="" className="float-right" />
                    </div>
                </div>
                <div className="grid grid-cols-2  gap-4 mb-4 mt-5">
                    <div className=" py-8 px-14  rounded-lg border-2 bg-white">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold tracking-wide">
                                Absensi
                            </h2>
                            <Link className="bg-[#F97316] text-white px-5 py-3 rounded-lg font-semibold">
                                Saya Hadir!
                            </Link>
                        </div>
                        <DataTable
                            columns={columnabsen}
                            data={dataabsen}
                            className="mt-5"
                            noTableHead
                        ></DataTable>
                        <div className="flex justify-center mt-8">
                            <Link className="bg-[#F97316] text-white px-5 py-2.5 rounded-lg font-semibold flex items-center">
                                Lihat Semua Pertemuan
                                <FaArrowRightLong className="ml-2" />
                            </Link>
                        </div>
                    </div>
                    <div className=" py-8 px-14 rounded-lg border-2 bg-white">
                        <h3 className="text-2xl font-bold tracking-wide">
                            Materi Terbaru
                        </h3>
                        <div className="mt-6 flex flex-col gap-y-5">
                            <Link className="hover:bg-gray-50 rounded-lg p-2">
                                <div className="flex gap-x-3 text-[#64748B] items-center text-lg">
                                    {" "}
                                    <LuBookOpen size={23} />
                                    <p>Materi</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h2 className="font-bold text-xl">
                                        Nama Materi ada disini ya teman teman
                                    </h2>
                                    <FaChevronRight
                                        size={17}
                                        className="text-[#64748B]"
                                    />
                                </div>
                            </Link>
                            <Link className="hover:bg-gray-50 rounded-lg p-2">
                                <div className="flex gap-x-3 text-[#64748B] items-center text-lg">
                                    {" "}
                                    <LuBookOpen size={23} />
                                    <p>Materi</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h2 className="font-bold text-xl">
                                        Nama Materi ada disini ya teman teman
                                    </h2>
                                    <FaChevronRight
                                        size={17}
                                        className="text-[#64748B]"
                                    />
                                </div>
                            </Link>
                            <Link className="hover:bg-gray-50 rounded-lg p-2">
                                <div className="flex gap-x-3 text-[#64748B] items-center text-lg">
                                    {" "}
                                    <LuBookOpen size={23} />
                                    <p>Materi</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h2 className="font-bold text-xl">
                                        Nama Materi ada disini ya teman teman
                                    </h2>
                                    <FaChevronRight
                                        size={17}
                                        className="text-[#64748B]"
                                    />
                                </div>
                            </Link>
                            <div className="flex justify-center mt-4">
                                <Link className="bg-[#F97316] text-white px-5 py-2.5 rounded-lg font-semibold flex items-center">
                                    Lihat Semua Materi
                                    <FaArrowRightLong className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SiswaLayout>
        </>
    );
};

export default Beranda;
