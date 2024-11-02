import { useNavigate, Navigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>Profile</div>
            <button onClick={() => navigate('/')} className="btn btn-primary">Back Home</button>
            <Navigate replace to={'/'}/>
        </>
    )
}

export default Profile;