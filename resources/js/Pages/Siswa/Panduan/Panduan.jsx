import SiswaLayout from "@/Layouts/SiswaLayout";

const Panduan = () => {
    return (
        <SiswaLayout>
            <div className="py-9 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <h1 className="text-2xl font-bold mb-3">
                    Panduan Penggunaan Website Eduhouse
                </h1>

                <div className="mt-5">
                    <embed
                        src="silabus.pdf"
                        type="application/pdf"
                        width="100%"
                        height="500px"
                    />
                </div>
            </div>
        </SiswaLayout>
    );
};
export default Panduan;
