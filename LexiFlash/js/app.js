import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Database2 from "../src/assets/data/Database2";
import FlashCard from "../src/components/elements/FlashCard";

const container = document.getElementById("app");
const root = createRoot(container);

function App() {
    return <>
        <h1>The coding environment is ready for magic</h1>
        {/*<FlashCard />*/}
        <Database2 />
    </>
}

root.render(<App />);
