import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>Profile</div>
            <button onClick={() => navigate('/')} className="btn btn-primary">Back Home</button>
        </>
    )
}

export default Profile;