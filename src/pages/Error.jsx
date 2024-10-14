import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Error = () => {
    const nav = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            nav('/emo');
        }, 3000)

        return () => clearTimeout(timer)
    }, [nav])

    return (
        <div>404 - 페이지를 찾을 수 없습니다.</div>
    )
}

export default Error