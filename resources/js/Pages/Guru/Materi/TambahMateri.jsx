import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { MdKeyboardArrowRight } from "react-icons/md";

const TambahMateri = (props) => {
    const [judul, setJudul] = useState("");
    const [pdf, setPdf] = useState(null);
    const [deskripsi, setDeskripsi] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("judul", judul);
        formData.append("pdf", pdf);
        formData.append("deskripsi", deskripsi);

        Inertia.post(route("materi-guru.store"), formData);
    };

    const handlePdfChange = (e) => {
        setPdf(e.target.files[0]);
    };

    return (
        <GuruLayout auth={props.auth}>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("materi-guru.index")}>Materi</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Tambah Materi
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Tambah materi</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form
                    onSubmit={handleSubmit}
                    className="my-6"
                    encType="multipart/form-data"
                >
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="judul"
                            className="font-semibold text-lg"
                        >
                            Judul materi
                        </label>
                        <input
                            id="judul"
                            type="text"
                            value={judul}
                            onChange={(e) => setJudul(e.target.value)}
                            placeholder="Masukkan Judul materi"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
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
                            onChange={handlePdfChange}
                            className="border-2 border-[#D8DBDF] p-2 bg-[#FBFBFB] rounded-lg"
                            placeholder="Upload File"
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
                            value={deskripsi}
                            onChange={(e) => setDeskripsi(e.target.value)}
                            placeholder="Masukkan Deskripsi materi"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
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
                            Tambah materi
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};

export default TambahMateri;
