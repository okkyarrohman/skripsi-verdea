import DataTable from "react-data-table-component";
import { Link } from "@inertiajs/react";
import { RiBook2Line } from "react-icons/ri";
import { RiArrowRightLine } from "react-icons/ri";
import GuruLayout from "@/Layouts/GuruLayout";

const Beranda = (props) => {
    const dataSiswa = props.dataSiswa;
    const tugass = props.tugases;
    console.log(props);
    const columnabsen = [
        {
            name: "Pertemuan",
            selector: (row) => "Pertemuan " + row.pertemuan,
        },
        {
            name: "Tanggal",
            selector: (row) => formatTanggal(row.tanggal),
        },
        {
            name: "Kehadiran",
            cell: (row) => (
                <div>
                    <div className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                        {row.hadir} Siswa Hadir
                    </div>
                    <div className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                        {row.alpha} Siswa Alpha
                    </div>
                </div>
            ),
        },
    ];

    const formatTanggal = (tenggat) => {
        const date = new Date(tenggat);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString();
        return `${day}/${month}/${year}`;
    };
    const formatTenggat = (tenggat) => {
        const date = new Date(tenggat);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${day}/${month}/${year} | ${hours}.${minutes}`;
    };

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
            id: 1,
            pertemuan: "Pertemuan 1",
            tanggal: "13/02/2024",
            kehadiran: {
                hadir: 10,
                alpha: 10,
            },
        },
        {
            id: 1,
            pertemuan: "Pertemuan 1",
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

    const columnsiswa = [
        {
            name: "No",
            selector: (row, index) => index + 1,
        },
        {
            name: "Nama Siswa",
            selector: (row) => row.firstname + " " + row.lastname,
        },
        {
            name: "Status",
            selector: (row) => (
                <span
                    className={`inline-flex items-center ${
                        row.session_login_at !== null
                            ? "bg-green-100 text-green-800 border border-green-600"
                            : "bg-gray-100 text-gray-800 border border-gray-600"
                    } text-xs font-medium px-5 py-1 rounded-full`}
                >
                    <span
                        className={`h-2 w-2 rounded-full mr-2 ${
                            row.session_login_at !== null
                                ? "bg-green-500"
                                : "bg-gray-500"
                        }`}
                    ></span>
                    {row.session_login_at !== null ? "Login" : "Logout"}
                </span>
            ),
        },
        {
            name: "Waktu Login",
            selector: (row) =>
                row.total_login_time ? row.total_login_time : "-",
        },
    ];

    return (
        <>
            <GuruLayout auth={props.auth}>
                <div className="p-4 border-2 border-gray-200 flex items-center rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <div className="text-start w-1/2">
                        <h1 className="text-4xl font-bold">
                            Hi, Selamat Datang{" "}
                            {props.auth.user.firstname +
                                " " +
                                props.auth.user.lastname}
                            👋🏻
                        </h1>
                        <p className="mt-3 mb-7 text-lg">
                            Ayo update selalu materi, Refrensi dan tutorial
                            serta cek selalu perkembangan tugas siswa!
                        </p>
                    </div>
                    <div className="w-1/2">
                        <img
                            src="/dsguru1.svg"
                            alt=""
                            className="float-right"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2  gap-4 mb-4 mt-5">
                    <div className=" py-8 px-14  rounded-lg border-2 bg-white">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold tracking-wide">
                                Absensi
                            </h2>
                            <Link
                                href={route("absen-guru.index")}
                                className="bg-[#F97316] text-white px-5 py-3 rounded-lg font-semibold"
                            >
                                Detail Absensi
                            </Link>
                        </div>
                        <DataTable
                            columns={columnabsen}
                            data={props.infoPertemuan}
                            className="mt-5"
                        ></DataTable>
                    </div>
                    <div className=" py-8 px-14 rounded-lg border-2 bg-white">
                        <h3 className="text-2xl font-bold tracking-wide">
                            Tugas Siswa Terbaru
                        </h3>
                        <div className="flex text-[#F97316] items-center text-lg gap-x-3 my-3">
                            <RiBook2Line size={23} />
                            <p className="font-semibold">Tugas</p>
                        </div>
                        <p className="text-lg font-bold">{tugass[0].nama}</p>
                        <div className=" text-[#64748B] mt-3">
                            <h3>
                                Tenggat : {formatTenggat(tugass[0].tenggat)}
                            </h3>
                            <h3>Pengumpulan : </h3>

                            <div className="w-full bg-[#D9D9D9] rounded-full mt-2 mb-4 ">
                                <div
                                    className="bg-[#F97316] text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                                    style={{
                                        width: `${props.outputProgressbar}%`,
                                    }}
                                >
                                    {props.outputProgressbar}%
                                </div>
                            </div>
                            <div className="flex justify-center mt-7">
                                <Link className="bg-[#F97316] rounded-xl py-2.5 w-full text-center text-white flex items-center justify-center">
                                    Detail Tugas
                                    <RiArrowRightLine className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-8 border-2 border-gray-200  rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <h1 className="text-2xl font-bold tracking-wide">
                        Daftar Siswa
                    </h1>

                    <div>
                        <DataTable
                            columns={columnsiswa}
                            data={dataSiswa}
                        ></DataTable>
                    </div>
                </div>
            </GuruLayout>
        </>
    );
};

export default Beranda;
