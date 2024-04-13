import SiswaLayout from "@/Layouts/SiswaLayout";
import { Link } from "@inertiajs/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuBookMinus } from "react-icons/lu";

const Tugas = (props) => {
     const formatTenggat = (tenggat) => {
         const date = new Date(tenggat);
         const day = date.getDate().toString().padStart(2, "0");
         const month = (date.getMonth() + 1).toString().padStart(2, "0");
         const year = date.getFullYear().toString();
         const hours = date.getHours().toString().padStart(2, "0");
         const minutes = date.getMinutes().toString().padStart(2, "0");
         return `${day}/${month}/${year} | ${hours}.${minutes}`;
     };
    console.log(props);
    return (
        <SiswaLayout>
            <div className="p-4 border-2 border-gray-200 flex items-center rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="text-start w-1/2">
                    <h1 className="text-4xl font-bold">Hi, Oky Anugrah 👋🏻</h1>
                    <h1 className="text-4xl font-bold">
                        Jangan Lupa Kerjakan Tugasmu!
                    </h1>
                    <p className="mt-3 mb-7 text-lg">
                        Ayo kerjakan tugasmu dengan jawaban yang tepat dan
                        sesuai tenggat yang diberikan
                    </p>
                </div>
                <div className="w-1/2">
                    <img
                        src="/tugassiswa1.svg"
                        alt=""
                        className="float-right"
                    />
                </div>
            </div>
            {props.tugases && props.tugases.length === 0 && (
                <div className="flex flex-col items-center justify-center  mt-14">
                    <img src="/notfoundabsen.svg" alt="" />
                    <div className="text-center w-96 mt-6">
                        <h2 className="text-2xl font-bold tracking-wide">
                            Belum Terdapat Tugas!
                        </h2>
                        <p className="text-lg text-[#64748B] w-4/5 text-center mx-auto mt-3">
                            Cek selalu tugasmu dan jangan sampai terlewatkan
                        </p>
                    </div>
                </div>
            )}

            {props.tugases.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-7">
                    {props.tugases.map((tugas, index) => (
                        <div className="max-w-sm bg-white rounded-2xl shadow p-5 flex flex-col justify-between">
                            <h3 className="text-[#F97316] text-lg font-semibold tracking-wide flex items-center space-x-2">
                                <LuBookMinus className="text-lg" />
                                <span>Tugas</span>
                            </h3>
                            <div className="">
                                <Link href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                        {tugas.nama}
                                    </h5>
                                </Link>
                                <div className="mt-3 text-gray-700 mb-5 flex flex-col gap-y-2 text-lg">
                                    <p>Tenggat : {formatTenggat(tugas.tenggat)}</p>

                                    <p>Nilai : 100</p>
                                    <p>Status : Selesai</p>
                                </div>
                            </div>
                            <Link
                                href="#"
                                className="w-full bg-[#F97316] text-center py-2 text-white tracking-wide rounded-lg inline-flex items-center justify-center mt-auto"
                            >
                                Detail Tugas{" "}
                                <FaArrowRightLong className="ml-2" />
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </SiswaLayout>
    );
};

export default Tugas;
