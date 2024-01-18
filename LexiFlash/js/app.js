import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Database from "../src/assets/data/Database";

const container = document.getElementById("app");
const root = createRoot(container);

function App() {
    return <>
        <h1>The coding environment is ready for magic</h1>
        {/*<FetchExample />*/}
        <Database />
    </>
}

root.render(<App />);
