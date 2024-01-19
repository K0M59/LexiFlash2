import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import FlashCard2 from "../../components/elements/FlashCard2";

export default function Database2() {
    const firebaseConfig = {
        apiKey: "AIzaSyDlxrwtmmLfdeXL2Xtbi2Wbg_zfGmUiCg0",
        authDomain: "lexiflash-ff93c.firebaseapp.com",
        databaseURL: "https://lexiflash-ff93c-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "lexiflash-ff93c",
        storageBucket: "lexiflash-ff93c.appspot.com",
        messagingSenderId: "966808647831",
        appId: "1:966808647831:web:3c187bffd20be77a8ad1d2",
        measurementId: "G-V68VKGTT7B"
    };

// Initialize Firebase
    const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
    const database = getDatabase(app);

    const dbRef = ref(getDatabase());

    const [ vocabSet, setVocabSet ] = useState([]);
    const [ vocabLeft, setVocabLeft ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await get(child(dbRef, "colors"));

                if (snapshot.exists()) {
                    // If data exists, update the state with the data
                    setVocabSet(snapshot.val());
                } else {
                    // If no data available, handle accordingly
                    console.log("No data available");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    // console.log(vocabSet);
    // console.log(vocabSet.length);

    return <>
        <p>
            Colors from Firebase Database : {vocabSet.map(el => `${el.lex}, `)}
        </p>
        <FlashCard2 vocabSet={vocabSet} />
    </>
}