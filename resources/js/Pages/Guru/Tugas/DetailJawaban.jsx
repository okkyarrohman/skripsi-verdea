import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import moment from "moment";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const DetailJawaban = (props) => {
    console.log(props);
    moment.locale("id");
    const [status, setStatus] = useState();
    const [nilai, setNilai] = useState();
    const [feedback, setFeedback] = useState();

    const tugasItems = [
        {
            label: "Deskripsi Tugas 1",
            value: props.tugas.soal1,
        },
        {
            label: "Tugas Siswa 1",
            value: props.jawaban.tugas1,
        },
        {
            label: "Deskripsi Tugas 2",
            value: props.tugas.soal2,
        },
        {
            label: "Tugas Siswa 2",
            value: props.jawaban.tugas2,
        },
        {
            label: "Deskripsi Tugas 3",
            value: props.tugas.soal3,
        },
        {
            label: "Tugas Siswa 3",
            value: props.jawaban.tugas3,
        },
        {
            label: "Deskripsi Tugas 4",
            value: props.tugas.soal4,
        },
        {
            label: "Tugas Siswa 4",
            value: props.jawaban.tugas4,
        },
        {
            label: "Deskripsi Tugas 5",
            value: props.tugas.soal5,
        },
        {
            label: "Tugas Siswa 5",
            value: props.jawaban.tugas5,
        },
        {
            label: "Deskripsi Tugas 6",
            value: props.tugas.soal6,
        },
        {
            label: "Tugas Siswa 6",
            value: props.jawaban.tugas6,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("status", status);
        formData.append("nilai", nilai);
        formData.append("feedback", feedback);

        console.log(formData);
        Inertia.post(route("update-status.tugas"), {
            id: props.tugas.id,
            ...Object.fromEntries(formData),
        });
    };

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
                <form action="" className="my-6" onSubmit={handleSubmit}>
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
                        <p className="font-semibold text-lg">Deadline</p>
                        <p className="text-red-500 text-justify">
                            {moment(props.tugas.tenggat).format(
                                "dddd, DD MMMM YYYY HH:mm"
                            )}
                        </p>
                    </div>
                    <div className="my-5">
                        {tugasItems.map((item, index) => (
                            <div
                                key={index}
                                className="my-5 flex flex-col gap-y-2"
                            >
                                <p className="font-semibold text-lg">
                                    {item.label}
                                </p>
                                <p className="text-[#64748B] text-justify">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <p className="font-semibold text-lg">Status</p>
                        <select
                            value={props.jawaban.status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="border-2 rounded-lg border-[#D8DBDF] bg-[#FBFBFB]"
                        >
                            <option value="">Pilih Status</option>
                            {props.statusTugas.map((status, index) => (
                                <option key={index} value={status}>
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
                            value={props.jawaban.nilai}
                            onChange={(e) => setNilai(e.target.value)}
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
                            value={props.jawaban.feedback}
                            onChange={(e) => setFeedback(e.target.value)}
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
