import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()

    return (
        <>
            <h3>Homepage Routes</h3>
            <button onClick={()=> navigate('/about')}>Goto About</button>
        </>
    )
}

export default Home