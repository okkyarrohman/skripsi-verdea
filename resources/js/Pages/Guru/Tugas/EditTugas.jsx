import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useForm } from "@inertiajs/react";

const EditTugas = (props) => {
    const today = new Date().toISOString().split("T")[0];
    const { data, setData, post, processing } = useForm({
        _method: "patch",
        id: props.tugases.id,
        nama: props.tugases.nama,
        tenggat: props.tugases.tenggat,
        soal1: props.tugases.soal1,
        soal2: props.tugases.soal2,
        soal3: props.tugases.soal3,
        soal4: props.tugases.soal4,
        soal5: props.tugases.soal5,
        soal6: props.tugases.soal6,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("tugas-guru.update", { id: props.tugases.id }), {
            data,
        });
    };

    return (
        <GuruLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("tugas-guru.index")}>Tugas</Link>
                    <MdKeyboardArrowRight size={25} />
                    <p className="text-[#F97316]">Edit Tugas</p>
                </div>
                <h1 className="text-xl font-bold mb-3">Edit Tugas</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form onSubmit={handleSubmit} className="my-6">
                    <div className="my-5 flex flex-col gap-y-2">
                        <label htmlFor="nama" className="font-semibold text-lg">
                            Nama Tugas
                        </label>
                        <input
                            id="nama"
                            name="nama"
                            type="text"
                            value={data.nama}
                            onChange={(e) => setData("nama", e.target.value)}
                            placeholder="Masukkan Nama Tugas"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="tenggat"
                            className="font-semibold text-lg"
                        >
                            Tenggat Tugas
                        </label>
                        <input
                            id="tenggat"
                            name="tenggat"
                            type="date"
                            value={data.tenggat}
                            onChange={(e) => setData("tenggat", e.target.value)}
                            placeholder="Masukkan Tenggat Tugas"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            min={today}
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soal1"
                            className="font-semibold text-lg"
                        >
                            Soal Pertama
                        </label>
                        <textarea
                            id="soal1"
                            name="soal1"
                            value={data.soal1}
                            onChange={(e) => setData("soal1", e.target.value)}
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soal2"
                            className="font-semibold text-lg"
                        >
                            Soal Kedua
                        </label>
                        <textarea
                            id="soal2"
                            name="soal2"
                            value={data.soal2}
                            onChange={(e) => setData("soal2", e.target.value)}
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soal3"
                            className="font-semibold text-lg"
                        >
                            Soal Ketiga
                        </label>
                        <textarea
                            id="soal3"
                            name="soal3"
                            value={data.soal3}
                            onChange={(e) => setData("soal3", e.target.value)}
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soal4"
                            className="font-semibold text-lg"
                        >
                            Soal Keempat
                        </label>
                        <textarea
                            id="soal4"
                            name="soal4"
                            value={data.soal4}
                            onChange={(e) => setData("soal4", e.target.value)}
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soal5"
                            className="font-semibold text-lg"
                        >
                            Soal Kelima
                        </label>
                        <textarea
                            id="soal5"
                            name="soal5"
                            value={data.soal5}
                            onChange={(e) => setData("soal5", e.target.value)}
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="soal6"
                            className="font-semibold text-lg"
                        >
                            Soal Keenam
                        </label>
                        <textarea
                            id="soal6"
                            name="soal6"
                            value={data.soal6}
                            onChange={(e) => setData("soal6", e.target.value)}
                            placeholder="Masukkan Soal"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        <Link
                            href={route("tugas-guru.index")}
                            className="bg-white px-8 py-2.5 rounded-lg text-[#F97316] border-2 border-[#F97316] font-semibold"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold"
                            disabled={processing}
                        >
                            {processing ? "Memproses..." : "Edit Tugas"}
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};

export default EditTugas;
