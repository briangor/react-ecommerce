import { Link } from "react-router-dom";

const Page404 = () => {

    return ( 
        <div className="page404">
            <h2 className="title">Error 404</h2>
            <p className="text">Page Not Found</p>
            {/* <button onClick={handleClick}>Back</button> */}
            <Link to=''>
                <button className="back-btn btn">Back to home</button>
            </Link>
        </div>
     );
}
 
export default Page404;