import { useEffect, useState } from "react";
import SiswaLayout from "@/Layouts/SiswaLayout";
// import { Link } from "@inertiajs/react";
import FinishKuis from "@/Components/Siswa/Kuis/FinishKuis";
import Countdown from "react-countdown";
import { Inertia } from "@inertiajs/inertia";

const AwalKuis = (props) => {
    console.log(props);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [userAnswers, setUserAnswers] = useState({});

    const questionsFromLocalStorage = JSON.parse(
        localStorage.getItem("questions")
    );
    const [questions, setQuestions] = useState(
        questionsFromLocalStorage || props.kategori[0].soal
    );

    const duration = props.kategori[0].durasi;
    let endTime = parseInt(localStorage.getItem("endTime"), 10); // Ambil endTime dari localStorage
    if (!endTime) {
        // Jika endTime belum ada di localStorage, buat dan simpan
        endTime = new Date().getTime() + duration * 60000;
        localStorage.setItem("endTime", endTime.toString()); // Simpan endTime sebagai string
    }

    useEffect(() => {
        if (!questionsFromLocalStorage) {
            localStorage.setItem(
                "questions",
                JSON.stringify(props.kategori[0].soal)
            );
        }
    }, [questionsFromLocalStorage, props.kategori]);
    useEffect(() => {
        // Periksa apakah jawaban sudah ada di localStorage
        const storedAnswer = localStorage.getItem(
            `question_${questions[currentQuestionIndex].id}`
        );

        // Jika jawaban sudah ada, atur sebagai opsi yang dipilih
        if (storedAnswer !== null) {
            setSelectedOption(storedAnswer);
        } else {
            // Jika tidak ada jawaban yang disimpan, atur opsi yang dipilih menjadi null
            setSelectedOption(null);
        }
    }, [questions, currentQuestionIndex]);

    const handleFinishQuiz = () => {
        setModalIsOpen(true);
        console.log("Menyelesaikan kuis...");

        const userAnswersArray = questions.map((question) => ({
            question_id: question.id,
            option_id: localStorage.getItem(`question_${question.id}`),
        }));
        setUserAnswers(userAnswers);

        console.log(userAnswers);

        Inertia.post(route("kuis.store"), {
            kategori_kuis_id: props.kategori[0].id,
            soal: userAnswersArray,
        });

        localStorage.removeItem("endTime");
        localStorage.removeItem("questions");
        questions.forEach((question) => {
            localStorage.removeItem(`question_${question.id}`);
        });
    };

    const handleOptionChange = (option) => {
        localStorage.setItem(`question_${currentQuestion.id}`, option);

        setSelectedOption(option);
    };

    console.log(selectedOption);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
        } else {
            console.log("Ini soal terakhir");
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOption(null);
        } else {
            setCurrentQuestionIndex(questions.length - 1);
            setSelectedOption(null);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];
    return (
        <SiswaLayout auth={props.auth}>
            <div className="py-10 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                <div className="text-center">
                    <h3 className="text-[#64748B]">Sisa Waktu</h3>
                    <Countdown
                        className="font-semibold text-lg text-black"
                        date={endTime}
                        renderer={({ minutes, seconds, completed }) => {
                            if (completed) {
                                return <span>00:00</span>;
                            } else {
                                return (
                                    <span>
                                        {minutes < 10 ? `0${minutes}` : minutes}
                                        :
                                        {seconds < 10 ? `0${seconds}` : seconds}
                                    </span>
                                );
                            }
                        }}
                    />
                </div>
                <div className="flex items-center text-lg font-semibold mt-5">
                    <h3 className="uppercase">KUIS {props.kategori[0].nama}</h3>
                    <h3 className="ml-auto">
                        {currentQuestionIndex + 1} /{" "}
                        {props.kategori[0].soal.length}
                    </h3>
                </div>
                <div className="mt-5">
                    {currentQuestion.gambar && (
                        <div className="flex items-center justify-center mb-8">
                            <img
                                src={currentQuestion.gambar}
                                alt=""
                                className="min-w-96 max-w-lg"
                            />
                        </div>
                    )}
                    <p className="text-justify">{currentQuestion.soal}</p>
                    <div className="mt-4 flex flex-col gap-y-4">
                        {currentQuestion.opsi.map((opsi, index) => (
                            <div
                                key={index}
                                className={`flex items-center border-2 rounded-xl p-3 ${
                                    selectedOption == opsi.id
                                        ? "border-[#FB8A3C] text-[#FB8A3C]"
                                        : "border-white text-black"
                                }`}
                            >
                                <input
                                    type="radio"
                                    id={`option${index + 1}`}
                                    name="options"
                                    value={opsi.id}
                                    className="hidden" // Sembunyikan input radio
                                    onChange={() => handleOptionChange(opsi.id)}
                                />
                                <label
                                    htmlFor={`option${index + 1}`}
                                    className={`font-medium relative cursor-pointer ${
                                        selectedOption == opsi.id
                                            ? "text-[#FB8A3C]"
                                            : ""
                                    }`}
                                >
                                    <span
                                        className={`w-4 h-4 inline-block rounded-full border border-solid mr-2 ${
                                            selectedOption == opsi.id
                                                ? "bg-[#FB8A3C] border-[#FB8A3C]"
                                                : "bg-white border-black"
                                        }`}
                                    ></span>
                                    {opsi.opsi}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div
                        className={`flex ${
                            currentQuestionIndex === 0
                                ? "justify-end"
                                : "justify-between"
                        } my-8`}
                    >
                        {currentQuestionIndex > 0 && (
                            <button
                                onClick={handlePreviousQuestion}
                                className="bg-white px-5 py-2 text-[#FB8A3C] border-2 border-[#FB8A3C] rounded-lg"
                            >
                                Kembali
                            </button>
                        )}
                        {currentQuestionIndex ===
                        props.kategori[0].soal.length - 1 ? (
                            <button
                                onClick={handleFinishQuiz}
                                className="bg-[#FB8A3C] px-5 py-2 text-white rounded-lg"
                            >
                                Selesai
                            </button>
                        ) : (
                            <button
                                onClick={handleNextQuestion}
                                className="bg-[#FB8A3C] px-5 py-2 text-white rounded-lg"
                            >
                                Selanjutnya
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <FinishKuis
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                onFinish={handleFinishQuiz}
            />
        </SiswaLayout>
    );
};

export default AwalKuis;
