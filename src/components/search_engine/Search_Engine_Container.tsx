import { useEffect } from "react";

export function Search_Engine_Container() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cse.google.com/cse.js?cx=81482677c9cb84a2c';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="gcse-search"></div>
    )
} 