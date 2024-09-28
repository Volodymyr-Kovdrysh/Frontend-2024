
import {useParams} from "react-router-dom";

const ParamsDemoPage = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>Param1: {params.id}</h1>
            <h2>Param2: {params.name}</h2>
        </div>
    );
};

export default ParamsDemoPage;
