import React, { useState, useEffect } from "react";

export default function FlashCard() {

    const tempDatabase = {
        "colors": [
            {
                "id": 1,
                "lex": "white",
                "def": "blanc",
                "status": 0
            },
            {
                "id": 2,
                "lex": "black",
                "def": "noir",
                "status": 0
            },
            {
                "id": 3,
                "lex": "red",
                "def": "rouge",
                "status": 0
            },
            {
                "id": 4,
                "lex": "yellow",
                "def": "jaune",
                "status": 0
            },
            {
                "id": 5,
                "lex": "blue",
                "def": "bleu",
                "status": 0
            },
            {
                "id": 6,
                "lex": "green",
                "def": "vert",
                "status": 0
            },
            {
                "id": 7,
                "lex": "pink",
                "def": "rose",
                "status": 0
            },
            {
                "id": 8,
                "lex": "brown",
                "def": "marron",
                "status": 0
            },
            {
                "id": 9,
                "lex": "grey",
                "def": "gris",
                "status": 0
            },
            {
                "id": 10,
                "lex": "orange",
                "def": "orange",
                "status": 0
            }
        ],
        "numbers": [
            {
                "id": 1,
                "lex": "one",
                "def": "un",
                "status": 0
            },
            {
                "id": 2,
                "lex": "two",
                "def": "deux",
                "status": 0
            },
            {
                "id": 3,
                "lex": "three",
                "def": "trois",
                "status": 0
            },
            {
                "id": 4,
                "lex": "four",
                "def": "quatre",
                "status": 0
            },
            {
                "id": 5,
                "lex": "five",
                "def": "cinque",
                "status": 0
            },
            {
                "id": 6,
                "lex": "six",
                "def": "six",
                "status": 0
            },
            {
                "id": 7,
                "lex": "seven",
                "def": "sept",
                "status": 0
            },
            {
                "id": 8,
                "lex": "eight",
                "def": "huit",
                "status": 0
            },
            {
                "id": 9,
                "lex": "nine",
                "def": "neuf",
                "status": 0
            },
            {
                "id": 10,
                "lex": "ten",
                "def": "dix",
                "status": 0
            }
        ]
    }

    const [category, setCategory] = useState("colors");
    const [front, setFront] = useState();
    const [back, setBack] = useState();

    //Get a random words pair from database
    const randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const currentWordPair = tempDatabase[category][randomNumber(0, tempDatabase[category].length)];
    // const currentWordPair = tempDatabase.category.randomNumber()


    useEffect(() => {
        setFront(currentWordPair.lex);
        setBack(currentWordPair.def);
    }, []);

    return <>
        <h1 className="set__title">{category}</h1>
        <div>
            <p className="flashcard__front">{front}</p>
            <p className="flashcard__back">{back}</p>
        </div>
    </>
}