import {useParams, useLocation } from 'react-router-dom';

const PostItem = (props) => {
    const params = useParams();
    const location = useLocation();

    console.log(location.pathname);
    console.log(params.id);

    return (
        <>
            <div>Post ID : {params.id} {params.name}</div>
        </>
    )
}

export default PostItem;