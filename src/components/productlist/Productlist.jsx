import React, { useState,useEffect,useContext } from 'react';
// import Heart from '../../assets/Heart';
import './productlist.css';
import bike from '../../assets/images/R15V3.jpg'
import { getFirestore, collection, getDocs  } from 'firebase/firestore';
import Post, { PostContext,  } from '../../store/PostContext';
import {useNavigate} from 'react-router-dom'

function Posts() {
  const [products,setProduct] = useState([])
  const firestore  = getFirestore()
  const {setPostDetails} = useContext(PostContext) 
  const navigate  = useNavigate()
  useEffect(() => {
    const fetchProducts = async () => {
       const snapshot = await getDocs(collection(firestore, 'products'));
       const allProducts = snapshot.docs.map((product) => ({
         ...product.data(),
         id: product.id
       }));
   
       setProduct(allProducts)
    };
   
    fetchProducts();
   }, []);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            
            products.map((element)=>{
              return(
              <div className="card" onClick={()=>{
                setPostDetails(element)
                navigate('/view')
               }}>
              <div className="favorite">
              </div>
              <div className="image">
                <img src={element.downloadURL} alt="dwf" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {element.price}</p>
                <span className="kilometer">{element.category}</span>
                <p className="name"> {element.name}</p>
              </div>
              <div className="date">
                <span>{element.createdAt}</span>
              </div>
            </div>
            )})
         
      }
        </div>
      </div>
      
    </div>
  );
}

export default Posts;