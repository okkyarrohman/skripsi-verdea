import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const DeleteModal = ({ isOpen, onClose, handleDelete }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);
    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 relative">
                        <IoMdClose
                            className="absolute top-0 right-0 m-4 cursor-pointer"
                            onClick={onClose}
                            size={20}
                            color="#6B7280"
                        />
                        <img
                            src="/deletemodal1.svg"
                            alt=""
                            className="mx-auto mb-4"
                        />
                        <p className="text-xl font-bold mb-4 text-center">
                            Hapus Tugas
                        </p>
                        <p className="text-[#6B7280]">
                            Apakah Anda yakin ingin menghapus Tugas?
                        </p>
                        <div className="mt-4 flex justify-end">
                            <button
                                className="bg-white text-[#F97316] border-2 border-[#F97316] px-4 py-2 rounded-lg mr-4"
                                onClick={onClose}
                            >
                                Batal
                            </button>
                            <button
                                className="bg-[#F97316] text-white px-4 py-2 rounded-lg"
                                onClick={handleDelete}
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeleteModal;
