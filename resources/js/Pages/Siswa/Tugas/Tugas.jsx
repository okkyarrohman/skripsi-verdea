import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuBookMinus } from "react-icons/lu";
import SiswaLayout from "@/Layouts/SiswaLayout";

const Tugas = ({ auth, tugases }) => {
    const [userTugases, setUserTugases] = useState([]);
    console.log(tugases)

    useEffect(() => {
        const filteredTugases = tugases.filter((tugas) =>
            tugas.tugas_user.some(
                (userTugas) => userTugas.user_id === auth.user.id
            )
        );
        setUserTugases(filteredTugases);
    }, [auth.user.id, tugases]);

    const formatTenggat = (tenggat) => {
        const date = new Date(tenggat);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${day}/${month}/${year} | ${hours}.${minutes}`;
    };

    return (
        <SiswaLayout auth={auth}>
            {/* Konten tugas */}
            {tugases.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-7">
                    {tugases.map((tugas, index) => (
                        <div
                            key={index}
                            className="max-w-sm bg-white rounded-2xl shadow p-5 flex flex-col justify-between"
                        >
                            <h3 className="text-[#F97316] text-lg font-semibold tracking-wide flex items-center space-x-2">
                                <LuBookMinus className="text-lg" />
                                <span>Tugas</span>
                            </h3>
                            <div>
                                <Link href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                        {tugas.nama}
                                    </h5>
                                </Link>
                                <div className="mt-3 text-gray-700 mb-5 flex flex-col gap-y-2 text-lg">
                                    <p>
                                        Tenggat : {formatTenggat(tugas.tenggat)}
                                    </p>
                                    {tugas.tugas_user.map((userTugas) => {
                                        if (
                                            auth.user.id === userTugas.user_id
                                        ) {
                                            return (
                                                <div key={userTugas.id}>
                                                    {userTugas.status && (
                                                        <p>
                                                            Status :{" "}
                                                            {userTugas.status}
                                                        </p>
                                                    )}
                                                    {userTugas.nilai && (
                                                        <p>
                                                            Nilai :{" "}
                                                            {userTugas.nilai}
                                                        </p>
                                                    )}
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                            {tugas.tugas_user.some(
                                (userTugas) =>
                                    userTugas.user_id === auth.user.id
                            ) ? (
                                <div
                                    className="w-full bg-[#F97316] text-center py-2 text-white tracking-wide rounded-lg inline-flex items-center justify-center mt-auto cursor-not-allowed opacity-50 disabled"
                                    disabled
                                >
                                    Detail Tugas{" "}
                                    <FaArrowRightLong className="ml-2" />
                                </div>
                            ) : (
                                <Link
                                    href={route("tugas.edit", tugas.id)}
                                    className="w-full bg-[#F97316] text-center py-2 text-white tracking-wide rounded-lg inline-flex items-center justify-center mt-auto"
                                >
                                    Detail Tugas{" "}
                                    <FaArrowRightLong className="ml-2" />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </SiswaLayout>
    );
};

export default Tugas;
