import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, usePage } from "@inertiajs/react";

const navigation = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Tentang", href: "#tentang" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const location = usePage();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const isTop = scrollTop < 100;

            setIsScrolled(!isTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Disclosure
            as="nav"
            className={`bg-white shadow-sm sticky top-0 z-50 ${
                isScrolled ? "bg-white bg-opacity-90" : ""
            }`}
        >
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex justify-between items-center h-20">
                            {/* Logo and Title */}
                            <div className="flex items-center space-x-2">
                                <img src="logo.png" alt="" className="w-9" />
                                <h1 className="text-lg font-bold text-[#F97316]">
                                    Eduhouse
                                </h1>
                            </div>

                            {/* Desktop menu */}
                            <div className="hidden md:flex md:space-x-4 md:items-center">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            location.hash === item.href
                                                ? "text-[#A4074D]"
                                                : "text-[#1A2434]",
                                            "hover:text-[#F97316] rounded-md px-3 py-2 text-base font-medium"
                                        )}
                                        aria-current={
                                            location.hash === item.href
                                                ? "page"
                                                : undefined
                                        }
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            {/* Desktop login and register buttons */}
                            <div className="hidden md:flex md:items-center md:space-x-4">
                                <Link
                                    href="/registrasi"
                                    className="bg-white font-semibold text-[#F97316] px-6 py-2 rounded-lg border-2 border-[#F97316]"
                                >
                                    SignUp
                                </Link>
                                <Link
                                    href="/masuk"
                                    className="bg-[#F97316] font-semibold text-white px-6 py-2 rounded-lg"
                                >
                                    Login
                                </Link>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[#A4074D] hover:text-[#a4074e65] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        location.hash === item.href
                                            ? "text-[#A4074D]"
                                            : "text-[#1A2434]",
                                        "hover:text-[#F97316] rounded-md px-3 py-2 text-base font-medium block"
                                    )}
                                    aria-current={
                                        location.hash === item.href
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    {item.name}
                                </a>
                            ))}
                            {/* Mobile login and register buttons */}
                            <div className="flex justify-center space-x-4 mt-4">
                                <Link
                                    href="/registrasi"
                                    className="bg-white font-semibold text-[#A4074D] px-6 py-2 rounded-lg border-2 border-[#A4074D]"
                                >
                                    Register
                                </Link>
                                <Link
                                    href="/masuk"
                                    className="bg-[#A4074D] font-semibold text-white px-6 py-2 rounded-lg"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
