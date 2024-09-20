import {useState} from "react";
import Box from "./ListBox/Box";
import WatchedBox from "./WatchedBox/WatchedBox";

export default function Main({ children }) {
    return (
        <main className="main">
            {children}
        </main>
    )
}