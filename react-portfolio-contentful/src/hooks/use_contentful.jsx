import { useState, useEffect } from "react";

const REACT_APP_SPACE_ID = import.meta.env.VITE_REACT_APP_SPACE_ID;
const REACT_APP_CDA_TOKEN = import.meta.env.VITE_REACT_APP_CDA_TOKEN;

function useContentful(query) {
    let [data, setData] = useState(null);
    let [errors, setErrors] = useState(null);

    useEffect(() => {
        window
            .fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
                    },
                    body: JSON.stringify({ query }),
                }
            )
            .then((response) => response.json())
            .then(({ data, errors }) => {
                if (errors) setErrors(errors);
                if (data) setData(data);
            })
            .catch((error) => setErrors([error]));
    }, [query]);

    return { data, errors };
}

export default useContentful