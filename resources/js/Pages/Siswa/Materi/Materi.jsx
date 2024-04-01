import SiswaLayout from "@/Layouts/SiswaLayout";
import { Link } from "@inertiajs/react";

const Materi = (props) => {
    console.log(props.materis);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString();
        return `${day}/${month}/${year}`;
    };

    return (
        <>
            <SiswaLayout>
                <div className="p-4 border-2 border-gray-200 flex items-center rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <div className="text-start w-1/2">
                        <h1 className="text-4xl font-bold">
                            Hi, Oky Anugrah 👋🏻
                        </h1>
                        <h1 className="text-4xl font-bold">
                            Jangan Lupa Membaca{" "}
                        </h1>
                        <p className="mt-3 mb-7 text-lg">
                            Ayo tingkatkan literasi dengan materi yang ada
                            bersama EduHouse!
                        </p>
                    </div>
                    <div className="w-1/2">
                        <img
                            src="/sismateri.svg"
                            alt=""
                            className="float-right w-96"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-7">
                    {props.materis.map((materi, index) => (
                        <Link
                            href={route("materi.show", materi.id)}
                            key={index}
                            className="max-w-sm bg-white rounded-2xl shadow p-5"
                        >
                            <div>
                                <img
                                    className="rounded-t-xl w-full"
                                    src="/materi.png"
                                    alt={materi.judul}
                                />
                            </div>
                            <div className="p-5">
                                <div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                        {materi.judul}
                                    </h5>
                                </div>
                                <p className="mb-3 font-normal text-gray-700 line-clamp-2">
                                    {materi.deskripsi}
                                </p>
                                <div className="mt-3 text-gray-700">
                                    <p>
                                        Diupload :{" "}
                                        {formatDate(materi.created_at)}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </SiswaLayout>
        </>
    );
};

export default Materi;
