import { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
    let [value, setValue] = useState<number>(0);

    return (
        <>
            <button
                onClick={() => {
                    setValue(value + 1);
                }}
            >
                increase
            </button>
            <button
                onClick={() => {
                    setValue(value - 1);
                }}
            >
                decrease
            </button>
            <span>{value}</span>
        </>
    );
};
