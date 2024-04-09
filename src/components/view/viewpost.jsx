import { PostContext, postcontext } from '../../store/PostContext';
import './viewpost.css'
import React,{useEffect,useState,useContext} from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';



function View() {
      const [userDetails,setUserDetails] = useState()
      const {postDetails} = useContext(PostContext)
      const { userId } = postDetails;
      const db = getFirestore();
      const usersCollection = collection(db, 'users');
      const userQuery = query(usersCollection, where('uid', '==', userId));
      useEffect(() => {
        
        getDocs(userQuery)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setUserDetails(doc.data());
            console.log(doc.Data())
            
          });
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
     }, []);
  return ( 
 <div>
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.downloadURL}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createAt}</span>
        </div>
        {userDetails &&<div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
    </div>
  );
}
export default View;