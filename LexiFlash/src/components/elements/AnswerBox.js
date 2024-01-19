import React from "react";

export default function AnswerBox() {
    return <div className="answer__box">
        <label htmlFor="answer">Type your answer below:</label>
        <input type="text" className="answer" id="answer" />
    </div>
}