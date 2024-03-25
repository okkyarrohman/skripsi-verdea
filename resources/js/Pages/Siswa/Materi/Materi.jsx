import SiswaLayout from "@/Layouts/SiswaLayout";
import { Link } from "@inertiajs/react";

const Materi = () => {
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
                            src="sismateri.svg"
                            alt=""
                            className="float-right w-96"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-7">
                    <div className="max-w-sm bg-white rounded-2xl shadow p-5">
                        <Link href="#">
                            <img
                                className="rounded-t-xl w-full"
                                src="materi.png"
                                alt=""
                            />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                    Nama Materi ada disini ya teman teman
                                </h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 ">
                                Some quick example text to build on the card
                                title and make up the of.
                            </p>
                            <div className="mt-3 text-gray-700">
                                <p>Diupload : 12/02/2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-2xl shadow p-5">
                        <Link href="#">
                            <img
                                className="rounded-t-xl w-full"
                                src="materi.png"
                                alt=""
                            />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                    Nama Materi ada disini ya teman teman
                                </h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 ">
                                Some quick example text to build on the card
                                title and make up the of.
                            </p>
                            <div className="mt-3 text-gray-700">
                                <p>Diupload : 12/02/2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-2xl shadow p-5">
                        <Link href="#">
                            <img
                                className="rounded-t-xl w-full"
                                src="materi.png"
                                alt=""
                            />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                    Nama Materi ada disini ya teman teman
                                </h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 ">
                                Some quick example text to build on the card
                                title and make up the of.
                            </p>
                            <div className="mt-3 text-gray-700">
                                <p>Diupload : 12/02/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SiswaLayout>
        </>
    );
};
export default Materi;
