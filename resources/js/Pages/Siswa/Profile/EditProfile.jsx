import React, { useState } from "react";
import SiswaLayout from "@/Layouts/SiswaLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";

const EditProfile = () => {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setProfileImage(URL.createObjectURL(imageFile));
    };
    return (
        <>
            <SiswaLayout>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                        <Link href="/">Dashboard</Link>
                        <MdKeyboardArrowRight size={25} />
                        <Link href="/">Data Diri Siswa</Link>
                        <MdKeyboardArrowRight size={25} />
                        <Link href="" className="text-[#F97316]">
                            Edit Data Diri Siswa
                        </Link>
                    </div>
                    <h1 className="text-xl font-bold mb-3">
                        Edit Data Diri Siswa
                    </h1>
                </div>
                <form className="py-9 border-2 flex items-start gap-x-10 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <div className="w-2/6 flex flex-col justify-center">
                        <label htmlFor="fileInput" className="cursor-pointer">
                            <img
                                src={
                                    profileImage ? profileImage : "profile.svg"
                                }
                                alt=""
                                className=" mb-4 mx-auto"
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                            <div className="bg-[#F97316] text-white w-40 mx-auto py-2 rounded-md text-center flex items-center justify-center gap-x-2">
                                <IoImageOutline /> Ganti Profile
                            </div>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            className="hidden"
                            onChange={handleImageChange}
                            accept="image/*"
                        />
                    </div>
                    <div className="w-full">
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                className="font-semibold text-lg"
                                htmlFor="namadepan"
                            >
                                Nama Depan
                            </label>
                            <input
                                id="namadepan"
                                name="namadepan"
                                className=" text-justify rounded-lg border-gray-300"
                            />
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                className="font-semibold text-lg"
                                htmlFor="namabelakang"
                            >
                                Nama Belakang
                            </label>
                            <input
                                id="namabelakang"
                                name="namabelakang"
                                className=" text-justify rounded-lg border-gray-300"
                            />
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                className="font-semibold text-lg"
                                htmlFor="kelas"
                            >
                                Kelas
                            </label>
                            <input
                                id="kelas"
                                name="kelas"
                                className=" text-justify rounded-lg border-gray-300"
                            />
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                className="font-semibold text-lg"
                                htmlFor="no"
                            >
                                No Absen
                            </label>
                            <input
                                id="no"
                                name="no"
                                type="number"
                                min={1}
                                className=" text-justify rounded-lg border-gray-300"
                            />
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                className="font-semibold text-lg"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className=" text-justify rounded-lg border-gray-300"
                            />
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                className="font-semibold text-lg"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className=" text-justify rounded-lg border-gray-300"
                            />
                        </div>
                        <div className="flex justify-end mt-7 gap-x-4">
                            <Link className="text-[#F97316] border-2 border-[#F97316] rounded-lg bg-white px-5 py-2">
                                Batal
                            </Link>
                            <Link className="text-white rounded-lg bg-[#F97316] px-5 py-2">
                                Perbarui Data
                            </Link>
                        </div>
                    </div>
                </form>
            </SiswaLayout>
        </>
    );
};
export default EditProfile;
