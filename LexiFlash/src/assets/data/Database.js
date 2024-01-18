import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

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

// documentation on reading and writing data in realtime database in Firebase : https://firebase.google.com/docs/database/web/read-and-write

const dbRef = ref(getDatabase());

export default function Database() {
    const [ vocabSet, setVocabSet ] = useState();

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
    console.log(vocabSet);
    return (
        <div>
            <h1>Colors from Firebase Database</h1>
            <p>
                {vocabSet && Object.keys(vocabSet).length > 0 ? (
                    Object.values(vocabSet).map((color) => (
                        <span key={color.id}>
              {color.lex} - {color.def} |{" "}
            </span>
                    ))
                ) : (
                    "Loading..."
                )}
            </p>
        </div>
    );
}
