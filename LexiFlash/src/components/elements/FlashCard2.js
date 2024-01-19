import React, { useState, useEffect } from "react";
import AnswerBox from "./AnswerBox";

export default function FlashCard2({vocabSet}) {
    const [vocabLeft, setVocabLeft] = useState([]);
    const [front, setFront] = useState();
    const [back, setBack] = useState();

    // Function filtering flashcards of given status where 0 stands for completely new or yet to be learnt and 5 for mastered.
    function vocabSetFiltered(status) {
        return vocabSet.filter(flashcard => flashcard.status === status)
    };

    // Currently the app allows to study only status "0" vocabulary.
    useEffect(() => {
        vocabSet && console.log("vocabSet received by Flashcard component");
        console.log(vocabSet);
        setVocabLeft((prevState) => [...prevState, ...vocabSet]);
        // vocabSet.map(el => setVocabLeft(prevState => prevState.push(el)));
        // setVocabLeft(() => vocabSetFiltered(0));
        // const currentWordPair = vocabLeft[randomNumber(0, vocabLeft.length)];
        // console.log(currentWordPair);
        console.log(vocabLeft);
    }, [vocabSet]);

    // console.log(vocabLeft.map(flashcard => flashcard.lex));

    //Get a random words pair from database
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // const currentWordPair = tempDatabase.category.randomNumber()


    // useEffect(() => {
    //     setFront(currentWordPair.lex);
    //     setBack(currentWordPair.def);
    // }, []);


    return <>
        <h1 className="set__title">Colors</h1>
        {/*<div>Words left : {vocabLeft.map(flashcard => flashcard.lex)}</div>*/}
        <div>
            <p className="flashcard__front">{front}</p>
            <p className="flashcard__back">{back}</p>
        </div>
        <AnswerBox correctAnswer={back}/>
    </>
}