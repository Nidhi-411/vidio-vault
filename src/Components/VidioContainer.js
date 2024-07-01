import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constants";
import VidioCard from "./VidioCard";
import { Link } from "react-router-dom";

const VidioContainer = () => {
    const [vidios, setVidios] = useState([]);

    useEffect(() => {
        getVidios();
    }, []);

    const getVidios = async () => {
        try {
            const data = await fetch(YOUTUBE_VIDEOS_API);
            const json = await data.json();
            if (json.items) {
                setVidios(json.items);
            } else {
                console.error("json.items is undefined");
            }
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    return (
        <div className="flex flex-wrap">
            {vidios.length > 0 ? (
                vidios.map((vidio) => (
                    <Link key={vidio.id} to={"/watch?v=" + vidio.id}>
                        <VidioCard info={vidio} />
                    </Link>
                ))
            ) : (
                <p>No videos found</p>
            )}
        </div>
    );
};

export default VidioContainer;
