import GuruLayout from "@/Layouts/GuruLayout";
import { useForm } from "@inertiajs/react";
import { Link, router } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const EditTutorial = (props) => {
    const { data, setData, put } = useForm({
        id: props.tutorials.id,
        judul: props.tutorials.judul,
        link: props.tutorials.link,
        deskripsi: props.tutorials.deskripsi,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("tutorial-guru.update", { id: props.tutorials.id }), {
            data,
        });
    };

    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("tutorial-guru.index")}>Tutorial</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Edit Tutorial
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Edit Tutorial</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <form onSubmit={handleSubmit} className="my-6">
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="judul"
                            className="font-semibold text-lg"
                        >
                            Judul Tutorial
                        </label>
                        <input
                            id="judul"
                            type="text"
                            value={data.judul}
                            name="judul"
                            onChange={(e) => setData("judul", e.target.value)}
                            placeholder="Masukkan Judul Tutorial"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label htmlFor="link" className="font-semibold text-lg">
                            Link Tutorial
                        </label>
                        <input
                            id="link"
                            type="text"
                            value={data.link}
                            name="link"
                            onChange={(e) => setData("link", e.target.value)}
                            placeholder="Masukkan Link Tutorial"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                        />
                    </div>
                    <div className="my-5 flex flex-col gap-y-2">
                        <label
                            htmlFor="deskripsi"
                            className="font-semibold text-lg"
                        >
                            Deskripsi Tutorial
                        </label>
                        <textarea
                            id="deskripsi"
                            value={data.deskripsi}
                            name="deskripsi"
                            onChange={(e) =>
                                setData("deskripsi", e.target.value)
                            }
                            placeholder="Masukkan Deskripsi Tutorial"
                            className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg h-36"
                        ></textarea>
                    </div>
                    <div className="flex justify-end mt-6 gap-x-4">
                        <Link
                            href={route("tutorial-guru.index")}
                            className="bg-white px-8 py-2.5 rounded-lg text-[#F97316] border-2 border-[#F97316] font-semibold"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            className="bg-[#F97316] px-8 py-2.5 rounded-lg text-white font-semibold"
                        >
                            Edit Tutorial
                        </button>
                    </div>
                </form>
            </div>
        </GuruLayout>
    );
};
export default EditTutorial;
