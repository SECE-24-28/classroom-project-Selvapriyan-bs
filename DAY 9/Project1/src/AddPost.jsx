import React from 'react'
import { DataContext } from './Context/DataContext'
import './AddPost.css'
const AddPost = () => {
  const {name,setName,email,setEmail,password,setPassword,role,setRole,handlesub}=React.useContext(DataContext);
  return (
    <div>

        <form action="" onSubmit={handlesub}>
            <table>
                <tbody>
            <tr><td><input type="text" name="name" minLength="5" maxLength="30" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/></td></tr>
            <tr><td><input type="email" name="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/></td></tr>
            <tr><td><input type="password" name="password" placeholder='password'minLength="8" value={password} onChange={(e)=>setPassword(e.target.value)}/></td></tr>
             <tr><td><select value={role} class="select" onChange={(e)=>setRole(e.target.value)} >
                <option value="role">Select-Role</option>
                <option value="Admin">admin</option>
                <option value="User">user</option>
                </select></td></tr>
            <tr><td><input class="sub" type="submit"/></td></tr>
            </tbody>
        </table>
        </form>
        <hr />
    </div>
  )
}

export default AddPost