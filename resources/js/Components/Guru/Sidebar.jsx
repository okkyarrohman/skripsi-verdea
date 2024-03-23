import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { LuBookOpen } from "react-icons/lu";
import { LuBookMinus } from "react-icons/lu";
import {
    MdOutlineRoomPreferences,
    MdQuestionAnswer,
} from "react-icons/md";
import { IoChevronDownSharp } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { CgOptions } from "react-icons/cg";
import { BsQuestionOctagon } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa6";

const Sidebar = ({ isOpen }) => {
    const [activeMenuIndex, setActiveMenuIndex] = useState(null);

    const toggleSubMenu = (index) => {
        setActiveMenuIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const menuItems = [
        {
            icon: <RxDashboard size={20} className="mr-4" />,
            text: "Dashboard",
            url: "dashboard",
        },
        {
            icon: <LuBookOpen size={20} className="mr-4" />,
            text: "Materi",
            url: "category",
        },
        {
            icon: <LuBookMinus size={20} className="mr-4" />,
            text: "Tugas",
            url: "research",
        },
        {
            icon: <MdQuestionAnswer size={20} className="mr-4" />,
            text: "Kuis",
            submenu: [
                {
                    text: "Kategori",
                    url: "quiz/category",
                    icon: <MdOutlineCategory size={20} className="mr-4" />,
                },
                {
                    text: "Soal",
                    url: "quiz/question",
                    icon: <BsQuestionOctagon size={20} className="mr-4" />,
                },
                {
                    text: "Opsi",
                    url: "quiz/options",
                    icon: <CgOptions size={20} className="mr-4" />,
                },
                {
                    text: "Hasil",
                    url: "quiz/results",
                    icon: <FaChartLine size={20} className="mr-4" />,
                },
            ],
        },
        {
            icon: <MdOutlineRoomPreferences size={20} className="mr-4" />,
            text: "Referensi",
            url: "task",
        },
    ];

    return (
        <>
            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
                    isOpen ? "" : "-translate-x-full"
                } bg-white border-r border-gray-200 sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
                    <ul className="space-y-2 font-medium">
                        {menuItems.map((menuItem, index) => (
                            <li
                                key={index}
                                className={`relative ${
                                    index === activeMenuIndex ? "z-50" : ""
                                }`}
                            >
                                <a
                                    href={menuItem.url}
                                    className="flex items-center p-2 text-[#64748B] rounded-lg hover:bg-gray-100 group"
                                    onClick={() =>
                                        menuItem.submenu && toggleSubMenu(index)
                                    }
                                >
                                    {menuItem.icon}
                                    <span className="flex-1 ms-2 whitespace-nowrap">
                                        {menuItem.text}
                                    </span>
                                    {menuItem.submenu && (
                                        <IoChevronDownSharp
                                            size={20}
                                            className={`ml-auto transition duration-200 ${
                                                index === activeMenuIndex
                                                    ? "transform rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    )}
                                </a>
                                {menuItem.submenu &&
                                    index === activeMenuIndex && (
                                        <ul className="pl-10">
                                            {menuItem.submenu.map(
                                                (subMenuItem, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        className="relative"
                                                    >
                                                        <a
                                                            href={
                                                                subMenuItem.url
                                                            }
                                                            className="flex items-center p-2 text-base text-[#64748B] transition duration-200 rounded-lg group hover:bg-gray-100"
                                                        >
                                                            {subMenuItem.icon}
                                                            <span className="flex-1 ms-2 whitespace-nowrap">
                                                                {
                                                                    subMenuItem.text
                                                                }
                                                            </span>
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
