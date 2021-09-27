import { useEffect, useState } from "react";

export const Fetch = () => {
    let [user, setUser] = useState<any>({});
    let [hasData, setHasData] = useState<boolean>(false);

    useEffect(() => {
        fetch("https://randomuser.me/api")
            .then((data) => data.json())
            .then((json) => {
                setUser(json.results[0]);
                setHasData(true);
            });
    }, []);

    return (
        <>
            {hasData && (
                <div>
                    <p>Name: {Object.values(user.name)?.join(" ")} </p>
                    <p>Email: {user.email} </p>
                    <p>Phone: {user.phone} </p>
                </div>
            )}
        </>
    );
};
