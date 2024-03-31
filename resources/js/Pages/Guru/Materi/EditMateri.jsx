import GuruLayout from "@/Layouts/GuruLayout";
import { Link, useForm } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const EditMateri = (props) => {
    const { data, setData, put } = useForm({
        id: props.materis.id,
        judul: props.materis.judul,
        pdf: props.materis.pdf,
        deskripsi: props.materis.deskripsi,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("materi-guru.update", { id: props.materis.id }), {
            data,
        });
    };

    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("materi-guru.index")}>Materi</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Edit Materi
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Edit Materi</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form
                    action=""
                    className="my-6"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="judul"
                            className="font-semibold text-lg"
                        >
                            Judul Materi
                        </label>
                        <input
                            id="judul"
                            type="text"
                            placeholder="Masukkan Judul materi"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            value={data.judul}
                            onChange={(e) => setData("judul", e.target.value)}
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label htmlFor="pdf" className="font-semibold text-lg">
                            File (PDF)
                        </label>
                        <input
                            id="pdf"
                            type="file"
                            accept=".pdf"
                            className="border-2 border-[#D8DBDF] p-2 bg-[#FBFBFB] rounded-lg"
                            placeholder="Upload File"
                            onChange={(e) => setData("pdf", e.target.files[0])}
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="deskripsi"
                            className="font-semibold text-lg"
                        >
                            Deskripsi Materi
                        </label>
                        <textarea
                            id="deskripsi"
                            placeholder="Masukkan Deskripsi materi"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                            value={data.deskripsi}
                            onChange={(e) =>
                                setData("deskripsi", e.target.value)
                            }
                        />
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        <Link
                            href={route("materi-guru.index")}
                            className="bg-white px-8 py-2.5 rounded-lg text-[#F97316] border-2 border-[#F97316] font-semibold"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold"
                        >
                            Edit Materi
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};

export default EditMateri;
