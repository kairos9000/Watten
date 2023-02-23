import { Button } from "@mui/material";
import { useState } from "react";

export function App() {
    const [entry, setEntry] = useState<string>("");
    const env = import.meta.env;

    function handleClick() {
        fetch(import.meta.env.VITE_BACKEND_URL + "test.php", {
            body: undefined,
            method: "GET",
            credentials: "include",
        })
            .then((response) => response.json())
            .then((value) => setEntry(value));
    }

    return (
        <>
            <h1>Hello World</h1>
            {JSON.stringify(env)}
            <Button onClick={handleClick}>Get Database</Button>
            <div>{JSON.stringify(entry)}</div>
        </>
    );
}
