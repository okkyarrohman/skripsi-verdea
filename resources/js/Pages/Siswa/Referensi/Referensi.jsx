import SiswaLayout from "@/Layouts/SiswaLayout";
import { Link } from "@inertiajs/react";
import { MdOutlineRoomPreferences } from "react-icons/md";

const Referensi = (props) => {
    console.log(props.referensis);

    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString();
        return `${day}/${month}/${year}`;
    };

    return (
        <SiswaLayout>
            <div className="p-4 border-2 border-gray-200 flex items-center rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="text-start w-1/2">
                    <h1 className="text-4xl font-bold">Hi, Oky Anugrah 👋🏻</h1>
                    <h1 className="text-4xl font-bold">Jangan Lupa Membaca</h1>
                    <p className="mt-3 mb-7 text-lg">
                        Ayo tingkatkan literasi dengan materi yang ada bersama
                        Eduhouse!
                    </p>
                </div>
                <div className="w-1/2">
                    <img
                        src="/referensi1.svg"
                        alt=""
                        className="float-right w-96"
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-7">
                {props.referensis.map((referensi, index) => (
                    <div
                        key={index}
                        className="max-w-sm bg-white rounded-2xl shadow p-5 flex flex-col justify-between"
                    >
                        <h3 className="text-[#F97316] text-lg font-semibold tracking-wide flex items-center space-x-2">
                            <MdOutlineRoomPreferences
                                className="text-lg"
                                size={23}
                            />
                            <span>Referensi</span>
                        </h3>
                        <div className="">
                            <div href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                    {referensi.judul}
                                </h5>
                            </div>
                        </div>
                        <div>
                            <div className="mt-3 text-gray-700 mb-5 flex flex-col gap-y-2 text-lg">
                                <p>
                                    Diupload :{" "}
                                    {formatDate(referensi.created_at)}
                                </p>
                            </div>
                            <Link
                                href={route("referensi.show", referensi.id)}
                                className="w-full bg-[#F97316] text-center py-2 text-white tracking-wide rounded-lg inline-flex items-center justify-center mt-auto"
                            >
                                Lihat Referensi
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </SiswaLayout>
    );
};

export default Referensi;
