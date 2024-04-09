import React, { useContext, useState } from 'react'
import './create.css'
import Header from '../header/Header'
import { AuthContext } from '../../store/context'
import { getStorage, ref,uploadBytes ,getDownloadURL  } from "firebase/storage";
import {getFirestore,collection, addDoc } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';


function Create() {
  const [name,setName] = useState('')
  const [category,setCategory] = useState("")
  const [price,setPrice] = useState("")
  const [image,setImage] = useState(null)
  const {user} = useContext(AuthContext)
  const firestore = getFirestore();
  const date  = new Date()
  const navigate = useNavigate()
  function submithandler(e){
    e.preventDefault()

    if (!image) {
        console.error('No image selected');
        return;
      }
      const storage = getStorage();
      const imageref = ref(storage, `images/${image.name}`);
      uploadBytes(imageref, image).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        getDownloadURL(imageref).then((downloadURL) => {
            return addDoc(collection(firestore,'products'),{
                name,
                category,
                price,
                downloadURL,
                userId:user.uid,
                createdAt:date.toDateString()
            }).then(()=>{
               
                navigate("/")
               
                    Swal.fire({
                      title: 'Succefull',
                      text: 'Your product added succefully.....!',
                      icon: 'info',
                      confirmButtonText: 'OK'
                    });
                  
            })
          })
      });
      
      
     
  }
  return (
    <div>
    <Header />
    <card>
      <div className="centerDiv">
        <form onSubmit={submithandler}>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" type="number" id="fname" name="Price"   value={price}
            onChange={(e)=>setPrice(e.target.value)}/>
          <br />
        <br />
        {image? <img  width="200px" height="200px" src={image?URL.createObjectURL(image):""}></img>:""}
          <br />
          <input onChange={(e)=>{
            setImage(e.target.files[0])
          }} type="file" />
          <br />
          <button className="uploadBtn" type="submit">upload and Submit</button>
      
        </form>
        <div>
            <a className="back"href="/"> -- back to home</a>

        </div>
      </div>
    </card>
    </div>
  )
}

export default Create