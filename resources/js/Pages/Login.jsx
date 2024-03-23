import { VscAccount } from "react-icons/vsc";
import { PiStudentLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "@inertiajs/react";

const Login = () => {
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
                            Login
                        </h1>
                        <p className="text-lg tracking-wide text-[#64748B] text-center mt-5">
                            Masuk untuk melanjutkan pembelajaran
                        </p>

                        <form action="" className="px-12">
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
                                        className="rounded-md border-2 border-[#D8DBDF] bg-[#FBFBFB] focus:border-gray-300 pl-10 pr-2 h-8 xl:h-10 w-full"
                                    />
                                </div>
                            </div>
                            <button className="py-2.5 mx-auto text-center w-full my-4 bg-[#F97316] rounded-lg text-white">
                                Login
                            </button>
                            <p className="text-lg tracking-wide text-center text-[#5B616E]">
                                Belum memiliki akun?{" "}
                                <Link href="/registrasi" className="text-[#F97316]">
                                    Registrasi
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
