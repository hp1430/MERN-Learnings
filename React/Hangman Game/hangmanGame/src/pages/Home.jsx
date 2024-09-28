import { Link } from "react-router-dom";
import Button from "../components/button/button";
import { useEffect, useState } from "react";

function Home() {

    const [word, setWord] = useState("");
    const [hint, setHint] = useState("");

    async function fetchDetails() {
        const response = await fetch("http://localhost:3000/words");
        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * data.length);

        setWord(data[randomIndex].wordValue);
        setHint(data[randomIndex].wordHint);
    }

    useEffect(()=>{
        fetchDetails();
    }, [])

    return (
        <>
            <Link to="/play" state={{ wordSelected: word, hint:hint}}>
                <Button
                    text="Single Player"
                />
            </Link>

            <br />

            <Link to="/start">
                <div className="mt-4">
                    <Button 
                        text="Multiplayer"
                        styleType="secondary"
                    />
                </div>
            </Link>
        </>
    )
}

export default Home;