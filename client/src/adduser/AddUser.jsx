import React, { useState } from 'react'
import './AddUser.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
const AddUser = () => {

    const users = {
        name:"",
        email:"",
        address:"",
    }
    const [user , setUser] = useState(users);
    const navigate = useNavigate();
    const inputHandler = (e) =>{
        const {name ,value}=e.target
        setUser({...user,[name]:value});
        console.log(name,value);

    };
    const submitForm = async(e)=>{
        e.preventDefault();
      await axios
      .post("http://localhost:8000/api/user",user)
      .then((response)=>{
        console.log("User created Successfully");
        toast.success(response.data.message ,{position:'top-right'});
        navigate("/");
      })
      .catch((error)=>{
        console.log(error);
      })
    }

  return (
    <div className='AddUser'>
        <Link to="/" type="button" class="btn btn-secondary"> <i class="fa-solid fa-backward"></i> Back</Link>
        <h3>Add New User</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor='name'>Name: </label>
                <input 
                type='text'
                id='name'
                name='name'
                onChange={inputHandler}
                autoComplete='off'
                placeholder='Enter your Name'
                />
            </div>
            <div className="inputGroup">
                <label htmlFor='email'>E-mail: </label>
                <input 
                type='text'
                id='email'
                onChange={inputHandler}
                name='email'
                autoComplete='off'
                placeholder='Enter your Email'
                />
            </div>
            <div className="inputGroup">
                <label htmlFor='address'>Address: </label>
                <input 
                type='text'
                id='address'
                name='address'
                onChange={inputHandler}
                autoComplete='off'
                placeholder='Enter your Addess'
                />
            </div>
            <div className='inputGroup'>
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
           
        </form>
      
    </div>
  )
}

export default AddUser
