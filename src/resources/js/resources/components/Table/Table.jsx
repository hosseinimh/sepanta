import React, { useEffect, useState } from "react";
import { general } from "../../constants/strings/fa";
import { NavLink } from "react-router-dom";

const data = [
    { id: 1, name: "iman", family: "akhondi" },
    { id: 2, name: "naghi", family: "akhondi" },
    { id: 3, name: "kasra", family: "akhondi" },
    { id: 4, name: "darya", family: "akhondi" },
    { id: 5, name: "iman", family: "akhondi" },
    { id: 6, name: "iman", family: "akhondi" },
    { id: 7, name: "iman", family: "akhondi" },
    { id: 8, name: "iman", family: "akhondi" },
    { id: 9, name: "iman", family: "akhondi" },
    { id: 10, name: "iman", family: "akhondi" },
    { id: 11, name: "iman", family: "akhondi" },
    { id: 12, name: "iman", family: "akhondi" },
    { id: 13, name: "iman", family: "akhondi" },
    { id: 14, name: "iman", family: "akhondi" },
    { id: 15, name: "iman", family: "akhondi" },
    { id: 16, name: "iman", family: "akhondi" },
    { id: 17, name: "iman", family: "akhondi" },
    { id: 18, name: "iman", family: "akhondi" },
    { id: 19, name: "iman", family: "akhondi" },
    { id: 20, name: "iman", family: "akhondi" },
];

const Table = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;
    const lastIndex = currentPage * pageSize;
    const firstIndex = lastIndex - pageSize;
    const filterdData = data.slice(firstIndex, lastIndex);
    const pageNumber = Math.ceil(data.length / pageSize);
    const numbers = [...Array(pageNumber + 1).keys()].slice(1);

    useEffect(() => {
        if (currentPage === 1) {
            const btn = document.getElementById(`btn-${1}`);
            const numBtns = document.querySelectorAll(".numBtns");
            [...numBtns].map((item) =>
                item.classList.remove("bg-btnPrimaryColor")
            );
            btn.classList.add("bg-btnPrimaryColor");
        }
    }, []);

    const prevHandler = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
            const btn = document.getElementById(`btn-${currentPage - 1}`);
            const numBtns = document.querySelectorAll(".numBtns");
            [...numBtns].map((item) =>
                item.classList.remove("bg-btnPrimaryColor")
            );
            btn.classList.add("bg-btnPrimaryColor");
        }
    };
    const pageCurrentHandler = (id) => {
        setCurrentPage(id);
        const btn = document.getElementById(`btn-${id}`);
        const numBtns = document.querySelectorAll(".numBtns");
        [...numBtns].map((item) => item.classList.remove("bg-btnPrimaryColor"));
        btn.classList.add("bg-btnPrimaryColor");
    };
    const nextHandler = () => {
        if (currentPage !== pageNumber) {
            setCurrentPage(currentPage + 1);
            const btn = document.getElementById(`btn-${currentPage + 1}`);
            const numBtns = document.querySelectorAll(".numBtns");
            [...numBtns].map((item) =>
                item.classList.remove("bg-btnPrimaryColor")
            );
            btn.classList.add("bg-btnPrimaryColor");
        }
    };

    const lastHandler = () => {
        setCurrentPage(pageNumber);
        const btn = document.getElementById(`btn-${pageNumber}`);
        const numBtns = document.querySelectorAll(".numBtns");
        [...numBtns].map((item) => item.classList.remove("bg-btnPrimaryColor"));
        btn.classList.add("bg-btnPrimaryColor");
    };
    const firstHandler = () => {
        setCurrentPage(1);
        const btn = document.getElementById(`btn-${1}`);
        const numBtns = document.querySelectorAll(".numBtns");
        [...numBtns].map((item) => item.classList.remove("bg-btnPrimaryColor"));
        btn.classList.add("bg-btnPrimaryColor");
    };

    return (
        <>
            <table className="table-autoborder-collapse border-separate border-spacing-y-2 table-auto w-full text-sm">
                <thead className=" bg-slate-500">
                    <tr>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 text-slate-400 text-right rounded-r-xl">
                            id
                        </th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 text-slate-400 text-right">
                            name
                        </th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 text-slate-400 text-right rounded-l-xl">
                            family
                        </th>
                    </tr>
                </thead>
                <tbody className=" [&>*:nth-child(even)]:bg-white/90 [&>*:nth-child(odd)]:bg-btnPrimaryColor/5  space-y-4">
                    {filterdData.map((item, index) => {
                        return (
                            <tr key={index} className="">
                                <td className="dark:border-slate-700 p-4 pl-8 rounded-r-xl">
                                    {item.id}
                                </td>
                                <td className="dark:border-slate-700 p-4 pl-8">
                                    {item.name}
                                </td>
                                <td className="dark:border-slate-700 p-4 pl-8 rounded-l-xl">
                                    {item.family}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <nav>
                <ul className="flex gap-2">
                    <li>
                        <button onClick={firstHandler}>{general.first}</button>
                    </li>
                    <li>
                        <button onClick={prevHandler}>
                            {general.previous}
                        </button>
                    </li>
                    {numbers.map((item, index) => {
                        return (
                            <li key={index} className="iman">
                                <button
                                    onClick={() => pageCurrentHandler(item)}
                                    className="numBtns rounded-full w-8 h-8"
                                    id={`btn-${item}`}
                                >
                                    {item}
                                </button>
                            </li>
                        );
                    })}
                    <li>
                        <button onClick={nextHandler}>{general.next}</button>
                    </li>
                    <li>
                        <button onClick={lastHandler}>{general.last}</button>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Table;
