import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import moment from "moment";

const DetailJawaban = (props) => {
    console.log(props);
    moment.locale("id");
    return (
        <GuruLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("tugas-guru.index")}>Tugas</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link
                        href={route("tugas-guru.show", props.jawaban.tugas_id)}
                    >
                        Hasil Tugas
                    </Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Jawaban
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">
                    Jawaban Tugas{" "}
                    {props.jawaban.user.firstname +
                        " " +
                        props.jawaban.user.lastname}
                </h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form action="" className="my-6">
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Nama Siswa</p>
                        <p className="text-[#64748B] text-justify">
                            {props.jawaban.user.firstname +
                                " " +
                                props.jawaban.user.lastname}
                        </p>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Tugas</p>
                        <p className="text-[#64748B] text-justify">
                            {props.tugas.nama}
                        </p>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Deskripsi</p>
                        <p className="text-[#64748B] text-justify">
                            {props.tugas.soal1}
                        </p>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Deadline</p>
                        <p className="text-[#EF4444] text-justify">
                            {moment(props.tugas.tenggat).format(
                                "dddd, DD MMMM YYYY HH:mm"
                            )}
                        </p>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Tugas Siswa</p>
                        <p className="text-[#64748B] text-justify">
                            {props.jawaban.tugas1}
                        </p>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Status</p>
                        <select className=" border-2 rounded-lg border-[#D8DBDF] bg-[#FBFBFB] ">
                            <option className="text-[#64748B] text-justify">
                                Pilih Status
                            </option>
                            {props.statusTugas.map((status, index) => (
                                <option
                                    key={index}
                                    className="text-[#64748B] text-justify"
                                >
                                    {status}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="nilai"
                            className="font-semibold text-lg"
                        >
                            Nilai
                        </label>
                        <input
                            id="nilai"
                            type="number"
                            placeholder="Masukkan Nilai"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="feedback"
                            className="font-semibold text-lg"
                        >
                            Feedback Tugas
                        </label>
                        <textarea
                            id="feedback"
                            placeholder="Masukkan Feedback Tugas"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        <button
                            type="submit"
                            className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};
export default DetailJawaban;
