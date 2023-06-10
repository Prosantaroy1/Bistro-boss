import { Link } from "react-router-dom";
import CoverBanner from "../../shared/CoverBanner/CoverBanner";
import MenuItem from "../../shared/MenuItem/MenuItem";


const MainCategory = ({items, image, title}) => {
    return (
        <div className="mt-8">
            {title && <CoverBanner img={image} title={title}/>}
            <div className='grid grid-cols-2 gap-4 mt-6 mb-5'>
                {
                    items.map(item => <MenuItem
                     key={item._id}
                     item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="card-actions justify-center mb-3">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline btn-secondary">add to cart</button>
                </Link>
            </div>
        </div>
    );
};

export default MainCategory;