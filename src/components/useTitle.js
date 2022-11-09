import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Youtube Hunter`;
    }, [title])
};

export default useTitle;