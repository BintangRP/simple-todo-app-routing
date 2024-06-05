import { useNavigate } from "react-router-dom"

export default function Notfound() {
    const navigate = useNavigate()
    return (
        <>
            <div>Notfound Cuy!</div>
            <button onClick={()=> navigate('/')}>Goto Home</button>
        </>
    );
}
