import SiswaLayout from "@/Layouts/SiswaLayout";

const NotfoundTugas = () => {
    return (
        <SiswaLayout>
            <div className="p-4 border-2 border-gray-200 flex items-center rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="text-start w-1/2">
                    <h1 className="text-4xl font-bold">Hi, Oky Anugrah 👋🏻</h1>
                    <h1 className="text-4xl font-bold">
                        Jangan Lupa Kerjakan Tugasmu!
                    </h1>
                    <p className="mt-3 mb-7 text-lg">
                        Ayo kerjakan tugasmu dengan jawaban yang tepat dan
                        sesuai tenggat yang diberikan
                    </p>
                </div>
                <div className="w-1/2">
                    <img src="tugassiswa1.svg" alt="" className="float-right" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center  mt-14">
                <img src="notfoundabsen.svg" alt="" />
                <div className="text-center w-96 mt-6">
                    <h2 className="text-2xl font-bold tracking-wide">
                        Belum Terdapat Tugas!
                    </h2>
                    <p className="text-lg text-[#64748B] w-4/5 text-center mx-auto mt-3">
                        Cek selalu tugasmu dan jangan sampai terlewatkan
                    </p>
                </div>
            </div>
        </SiswaLayout>
    );
};

export default NotfoundTugas;
