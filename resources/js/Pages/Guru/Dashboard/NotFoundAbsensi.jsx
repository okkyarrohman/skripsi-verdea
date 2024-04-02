import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { MdKeyboardArrowRight } from "react-icons/md";

const NotfoundAbsensi = () => {


    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href="/">Dashboard</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="">Absensi</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Detail Absensi
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">
                    Pertemuan 3, 12/02/2024
                </h1>
            </div>
            <div className="flex flex-col items-center justify-center  mt-14">
                <img src="notfoundabsen.svg" alt="" />
                <div className="text-center w-96 mt-6">
                    <h2 className="text-2xl font-bold tracking-wide">
                        Siswa Belum Melakukan Absensi
                    </h2>
                    <p className="text-lg text-[#64748B] w-4/5 text-center mx-auto mt-3">
                        Harap Mengingatkan siswa untuk melakukan absensi
                    </p>
                </div>
            </div>
        </GuruLayout>
    );
};

export default NotfoundAbsensi;
