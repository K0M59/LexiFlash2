import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Database from "../src/assets/data/Database";
import FlashCard from "../src/components/elements/FlashCard";
import AnswerBox from "../src/components/elements/AnswerBox";

const container = document.getElementById("app");
const root = createRoot(container);

function App() {
    return <>
        <h1>The coding environment is ready for magic</h1>
        {/*<Database />*/}
        <FlashCard />
        <AnswerBox />
    </>
}

root.render(<App />);
