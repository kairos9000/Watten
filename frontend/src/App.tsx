import { Button } from "@mui/material";
import { useState } from "react";

export function App() {
    const [count, setCount] = useState<number>(1);
    const env = import.meta.env;

    function handleClick() {
        setCount((count) => count + 1);
    }

    return (
        <>
            <h1>Hello World</h1>
            {JSON.stringify(env)}
            <Button onClick={handleClick}>{count}</Button>
        </>
    );
}
