import React,{useEffect,useContext,useState} from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/FirebaseContext';
function View() {
const [userDetails,setUserDetails]= useState()
const {PostDetails} = useContext(PostContext)
const {firebase} =  useContext(FirebaseContext)
useEffect(()=>{
  const {userId} = PostDetails
   firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
       res.forEach(doc => {
          setUserDetails(doc.data())
       })
   })
},[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={PostDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {PostDetails.price} </p>
          <span>{PostDetails.name}</span>
          <p>{PostDetails.category}</p>
          <span>{PostDetails.createdAt}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.mobile}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
