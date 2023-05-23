import {useParams} from "react-router-dom";

export const VideoDetail = () => {
    const {videoId} = useParams();
    return (
        <>videos detail {videoId}</>
    )
}