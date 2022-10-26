import React, { useState } from "react";
import { Button } from "react-bootstrap";
//Emoji's 🐑, 🎄,❄️️,😇, 🎅
export function CycleHoliday(): JSX.Element {
    const [holiday, newHoliday] = useState<string>("🐑");
    function alphabetical(): void {
        if (holiday === "🐑") {
            newHoliday("🎅");
        } else if (holiday === "🎅") {
            newHoliday("😇");
        } else if (holiday === "😇") {
            newHoliday("❄️");
        } else if (holiday === "❄️") {
            newHoliday("🎄");
        } else {
            newHoliday("🐑");
        }
    }
    function time(): void {
        if (holiday === "❄️") {
            newHoliday("🐑");
        } else if (holiday === "🐑") {
            newHoliday("🎄");
        } else if (holiday === "🎄") {
            newHoliday("🎅");
        } else if (holiday === "🎅") {
            newHoliday("😇");
        } else {
            newHoliday("❄️");
        }
    }
    return (
        <div>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
            <Button onClick={alphabetical}>Advance by Alphabet</Button>
            <Button onClick={time}>Advance by Year</Button>
        </div>
    );
}
