import SiswaLayout from "@/Layouts/SiswaLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
const Profile = () => {
    return (
        <>
            <SiswaLayout>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                        <Link href="/">Dashboard</Link>
                        <MdKeyboardArrowRight size={25} />
                        <Link href="" className="text-[#F97316]">
                            Data Diri Siswa
                        </Link>
                    </div>
                    <h1 className="text-xl font-bold mb-3">Data Diri Siswa</h1>
                </div>
                <div className="py-9 border-2 flex items-start gap-x-10 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <img src="profile.svg" alt="" className="w-1/6" />
                    <div className="w-full">
                        <div className="my-5 flex flex-col gap-y-2">
                            <p className="font-semibold text-lg">Nama Depan</p>
                            <p className=" text-justify">Daffa</p>
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <p className="font-semibold text-lg">
                                Nama Belakang
                            </p>
                            <p className=" text-justify">Eka Yudha</p>
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <p className="font-semibold text-lg">Kelas</p>
                            <p className=" text-justify">12 RPL</p>
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <p className="font-semibold text-lg">No Absen</p>
                            <p className=" text-justify">24</p>
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <p className="font-semibold text-lg">Email</p>
                            <p className=" text-justify">dono@gmail.com</p>
                        </div>
                        <div className="flex justify-end mt-7">
                            <Link className="text-white rounded-lg bg-[#F97316] px-5 py-2">Perbarui Data</Link>
                        </div>
                    </div>
                </div>
            </SiswaLayout>
        </>
    );
};
export default Profile;
