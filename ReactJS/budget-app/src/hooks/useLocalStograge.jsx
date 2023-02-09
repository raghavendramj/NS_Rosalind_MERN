import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);

        if (!isEmpty(jsonValue)) {
            return JSON.parse(jsonValue);
        } else {
            console.log("undefined case");
        }

        if (typeof defaultValue === "function") {
            return defaultValue()
        } else {
            return defaultValue;
        }
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);

    return [value, setValue];
}

function isEmpty(val) {
    return (val === "undefined" || val === undefined || val == null || val.length <= 0) ? true : false;
}