import SiswaLayout from "@/Layouts/SiswaLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const DetailTutorial = (props) => {
    console.log(props);
    return (
        <SiswaLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("tutorial.index")}>Tutorial</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Detail Tutorial
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">Detail Tutorial</h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <h1 className="text-2xl font-bold mb-3">
                    {props.tutorials.judul}
                </h1>
                <p className="justify-center">{props.tutorials.deskripsi}</p>
                <div className="mt-5">
                    <iframe
                        width="100%"
                        height="500px"
                        src={props.tutorials.link}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        className="rounded-xl"
                    ></iframe>
                </div>
            </div>
        </SiswaLayout>
    );
};
export default DetailTutorial;
