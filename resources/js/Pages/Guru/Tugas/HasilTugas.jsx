import GuruLayout from "@/Layouts/GuruLayout";
import { Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { MdKeyboardArrowRight } from "react-icons/md";

const HasilTugas = () => {
      const dataabsen = [
          {
              nama: "Agung Setia Abadi",
              waktu: "19.00",
              nilai: 90,
          },
      ];

      const columns = [
          {
              name: "No",
              selector: (_, index) => index + 1,
          },
          {
              name: "Nama Siswa",
              selector: (row) => row.nama,
          },
          {
              name: "Waktu Pengumpulan",
              selector: (row) => row.waktu,
          },
          {
              name: "Nilai",
              selector: (row) => row.nilai,
          },
          {
              name: "Hasil",
              selector: (row) => (
                  <Link
                      href={`/detail-absensi/${row.id}`}
                      className="block  bg-[#F97316] text-white px-5 py-2 rounded-lg font-semibold"
                  >
                     Detail Jawaban
                  </Link>
              ),
          },
      ];
    return (
        <GuruLayout>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                    <Link href={route("tugas-guru.index")}>Tugas</Link>
                    <MdKeyboardArrowRight size={25} />
                    <Link href="" className="text-[#F97316]">
                        Hasil Tugas
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-3">
                    Detail Hasil Tugas Membuat Candi
                </h1>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <DataTable columns={columns} data={dataabsen} />
            </div>
        </GuruLayout>
    );
};
export default HasilTugas;
