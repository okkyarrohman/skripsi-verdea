import GuruLayout from "@/Layouts/GuruLayout";
import { Link, useForm } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const EditReferensi = (props) => {
    const { data, setData, post } = useForm({
        _method: "patch",
        id: props.referensis.id,
        judul: props.referensis.judul,
        pdf: props.referensis.pdf,
        deskripsi: props.referensis.deskripsi,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("referensi-guru.update", { id: props.referensis.id }), {
            data,
        });
    };

    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("referensi-guru.index")}>Referensi</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Edit Referensi
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Edit Referensi</h1>
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
                            Judul Referensi
                        </label>
                        <input
                            id="judul"
                            type="text"
                            placeholder="Masukkan Judul Referensi"
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
                            Deskripsi Referensi
                        </label>
                        <textarea
                            id="deskripsi"
                            placeholder="Masukkan Deskripsi Referensi"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                            value={data.deskripsi}
                            onChange={(e) =>
                                setData("deskripsi", e.target.value)
                            }
                        />
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        <Link
                            href={route("referensi-guru.index")}
                            className="bg-white px-8 py-2.5 rounded-lg text-[#F97316] border-2 border-[#F97316] font-semibold"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold"
                        >
                            Edit Referensi
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};

export default EditReferensi;
