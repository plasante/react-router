import {useParams, useLocation, useSearchParams} from 'react-router-dom';

const PostItem = () => {
    const params = useParams();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const NOM = searchParams.get('NOM');

    console.log(location.pathname);
    console.log(params.id);

    return (
        <>
            <div>Post ID : {params.id}</div>
            <div>Post Name: {params.name}</div>
            <div>Location: {location.pathname}</div>
            <div>NOM: {NOM}</div>
        </>
    )
}

export default PostItem;