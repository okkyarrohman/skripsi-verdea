import { VscAccount } from "react-icons/vsc";
import { PiStudentLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: "",
        email: "",
        password: "",
        kelas: "",
        absen: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };
    return (
        <>
            <div className="flex justify-center min-h-screen items-center">
                <div className="w-1/2 px-20">
                    <div className="flex items-center text-lg gap-x-3 text-[#F97316]">
                        {" "}
                        <img src="logo.png" alt="" />
                        <p className="font-extrabold text-3xl">Eduhouse</p>
                    </div>
                    <p className="text-lg w-64 tracking-wide text-[#64748B] font-semibold">
                        Selamat datang di Website Eduhouse
                    </p>
                    <img src="hero2.svg" alt="" className="mx-auto w-[30rem]" />
                </div>
                <div className="w-1/2 px-20">
                    <div className="mx-auto border-2 rounded-xl py-12">
                        <h1 className="text-5xl font-extrabold text-center">
                            Registrasi
                        </h1>
                        <p className="text-lg tracking-wide text-[#64748B] text-center mt-5">
                            Daftar untuk memulai pembelajaran
                        </p>

                        <form action="" className="px-12" onSubmit={submit}>
                            <div className="flex flex-col my-4 relative w-full">
                                {" "}
                                <label
                                    htmlFor="nama"
                                    className="mb-2 font-semibold"
                                >
                                    Nama
                                </label>
                                <div className="relative">
                                    <VscAccount
                                        className="absolute top-1/2 transform -translate-y-1/2 left-3 text-[#292D32]"
                                        size={23}
                                    />
                                    <input
                                        type="text"
                                        id="firstname"
                                        placeholder="Masukkan nama anda"
                                        name="firstname"
                                        value={data.firstname}
                                        className="rounded-md border-2 border-[#D8DBDF] bg-[#FBFBFB] focus:border-gray-300 pl-10 pr-2 h-8 xl:h-10 w-full"
                                        onChange={(e) =>
                                            setData("firstname", e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex gap-x-5 my-4">
                                <div className="flex flex-col relative w-1/2 order-2">
                                    <label
                                        htmlFor="no"
                                        className="mb-2 font-semibold"
                                    >
                                        No Absen
                                    </label>
                                    <div className="relative">
                                        <PiStudentLight
                                            className="absolute top-1/2 transform -translate-y-1/2 left-3 text-[#292D32]"
                                            size={23}
                                        />
                                        <input
                                            type="number"
                                            id="no"
                                            placeholder="Masukkan absen"
                                            onChange={(e) =>
                                                setData("absen", e.target.value)
                                            }
                                            className="rounded-md border-2 border-[#D8DBDF] bg-[#FBFBFB] focus:border-gray-300 pl-10 pr-2 h-8 xl:h-10 w-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col relative w-1/2 order-1">
                                    <label
                                        htmlFor="kelas"
                                        className="mb-2 font-semibold"
                                    >
                                        Kelas
                                    </label>
                                    <div className="relative">
                                        <PiStudentLight
                                            className="absolute top-1/2 transform -translate-y-1/2 left-3 text-[#292D32]"
                                            size={23}
                                        />
                                        <input
                                            type="text"
                                            id="kelas"
                                            placeholder="Masukkan kelas anda"
                                            onChange={(e) =>
                                                setData("kelas", e.target.value)
                                            }
                                            className="rounded-md border-2 border-[#D8DBDF] bg-[#FBFBFB] focus:border-gray-300 pl-10 pr-2 h-8 xl:h-10 w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col my-4 relative w-full">
                                {" "}
                                <label
                                    htmlFor="email"
                                    className="mb-2 font-semibold"
                                >
                                    Email
                                </label>
                                <div className="relative">
                                    <TfiEmail
                                        className="absolute top-1/2 transform -translate-y-1/2 left-3 text-[#292D32]"
                                        size={23}
                                    />
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Masukkan email anda"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                        className="rounded-md border-2 border-[#D8DBDF] bg-[#FBFBFB] focus:border-gray-300 pl-10 pr-2 h-8 xl:h-10 w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col my-4 relative w-full">
                                {" "}
                                <label
                                    htmlFor="password"
                                    className="mb-2 font-semibold"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <RiLockPasswordLine
                                        className="absolute top-1/2 transform -translate-y-1/2 left-3 text-[#292D32]"
                                        size={23}
                                    />
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="*********"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                        className="rounded-md border-2 border-[#D8DBDF] bg-[#FBFBFB] focus:border-gray-300 pl-10 pr-2 h-8 xl:h-10 w-full"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="py-2.5 mx-auto text-center w-full my-4 bg-[#F97316] rounded-lg text-white"
                            >
                                Registrasi
                            </button>
                        </form>
                        <p className="text-lg tracking-wide text-center text-[#5B616E]">
                            Sudah memiliki akun?{" "}
                            <Link href="/masuk" className="text-[#F97316]">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
