import Navbar from "@/Components/Guru/Navbar";

const GuruLayout = ({ children,auth }) => {
    return (
        <>
            <Navbar auth={auth} />
            <div className="py-8 px-4 sm:ml-64 mt-14 bg-[#F6F7F9] min-h-screen">
                {children}
            </div>
        </>
    );
};
export default GuruLayout;
