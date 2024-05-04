import GuruLayout from "@/Layouts/GuruLayout";
import { Link, useForm } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const EditKategori = (props) => {
    const today = new Date().toISOString().split("T")[0];
     const { data, setData, put } = useForm({
         id: props.kategoris.id,
         nama: props.kategoris.nama,
         tenggat: props.kategoris.tenggat,
         durasi: props.kategoris.durasi,
     });

     const handleSubmit = (e) => {
         e.preventDefault();

         put(route("kategori.update", { id: props.kategoris.id }), {
             data,
         });
     };

    return (
        <GuruLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href="/">Kuis</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href={route("kategori.index")}>Kategori</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Edit Kategori Kuis
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3"> Edit Kategori Kuis</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form action="" className="my-6" onSubmit={handleSubmit}>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label htmlFor="nama" className="font-semibold text-lg">
                            Nama Kuis
                        </label>
                        <input
                            id="nama"
                            type="text"
                            placeholder="Masukkan Nama Kuis"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            onChange={(e) => setData("nama", e.target.value)}
                            value={data.nama}
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="tenggat"
                            className="font-semibold text-lg"
                        >
                            Tenggat Kuis
                        </label>
                        <input
                            id="tenggat"
                            type="date"
                            placeholder="Masukkan Tenggat Tugas"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            min={today}
                            onChange={(e) => setData("tenggat", e.target.value)}
                            value={data.tenggat}
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="durasi"
                            className="font-semibold text-lg"
                        >
                            Durasi Kuis (Menit)
                        </label>
                        <input
                            id="durasi"
                            type="number"
                            placeholder="Masukkan Durasi Kuis"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            min={today}
                            onChange={(e) => setData("durasi", e.target.value)}
                            value={data.durasi}
                        />
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        <Link
                            href={route("kategori.index")}
                            className="bg-white px-8 py-2.5 rounded-lg text-[#F97316] border-2 border-[#F97316] font-semibold"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold"
                        >
                            Edit Kuis
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};
export default EditKategori;
