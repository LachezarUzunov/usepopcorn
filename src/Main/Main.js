import {useState} from "react";
import ListBox from "./ListBox/ListBox";
import WatchedBox from "./WatchedBox/WatchedBox";

export default function Main() {
    return (
        <main className="main">
            <ListBox />
            <WatchedBox />
        </main>
    )
}