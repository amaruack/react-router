import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Videos = () => {

    const [text, setText] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        setText('');
        navigate(`/videos/${text}`);
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type={"text"} placeholder={"video id : "} value={text} onChange={handleChange}/>
            </form>
        </div>
    )
}