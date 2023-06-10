import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useCart from '../Castom Hook/useCart';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
    const {image, price, name, recipe, _id} = item;
    /////
    const {user} = useContext(AuthContext);
    //cart ar jonno
    const [, refetch] = useCart();
    //
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleAddCard = item =>{
      
        console.log(item);
        if(user && user.email){
           const cartItem ={menuId: _id, name, price, image, email: user.email}
           fetch(`http://localhost:5000/carts`,{
              method: 'POST',
              headers: {
                 'content-type': 'application/json'
              },
              body: JSON.stringify(cartItem)
           })
             .then(res=> res.json())
             .then(data=>{
                 console.log(data)
                 if(data.insertedId){
                  refetch();
                  Swal.fire({
                   position: 'top-end',
                   icon: 'success',
                   title: 'Your Item Cart Add',
                   showConfirmButton: false,
                   timer: 1500
                 })
                 }
             })
           }
           else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
       
    }
    return (
        <div>
             <div className="card card-compact w-96 bg-base-100 mb-10 shadow-xl">
                 <img src={image} alt="Shoes" className='h-[200px]'/>
                 <p className='text-white bg-slate-950 absolute right-0 px-6 py-3 mr-2 mt-1'>${price}</p>
                 <div className="card-body">
                   <h2 className="text-center font-bold text-2xl">{name}</h2>
                   <p className='text-center'>{recipe}</p>
                   <div className="card-actions justify-center">
                     <button onClick={()=> handleAddCard(item)} className="btn btn-outline btn-secondary">add to cart</button>
                   </div>
                 </div>
             </div>
        </div>
    );
};

export default FoodCard;