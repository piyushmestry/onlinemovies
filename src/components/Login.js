import React,{useEffect,useState} from 'react'
import Card from 'react-bootstrap/Card';
import '../css/Login.css'

const Login = () => {
    const [serusername, setserusername] = useState()
    const [serpassword,setserpassword] = useState()
    const [user, setuser] = useState()
    const [pass,setpass] = useState()

    useEffect(() => {
      fetch("http://localhost:1212/login")
      .then((res)=>res.json())
      .then((res)=>{
        setserusername(res.map((user)=>user.username))
        setserpassword(res.map((pass)=>pass.password))
      })
    }, [])

 const  onchangeuser = (e) =>{
    setuser(e.target.value)
  }
  const  onchangepass = (e) =>{
    setpass(e.target.value)
  }

 const  onSubmitHandler =(e)=>{
  e.preventDefault();

  if(serusername.find((use)=>use==user) && serpassword.find((pas)=>pas==pass)){
    window.location.href='http://localhost:3000/home'
  }else if(serusername.find((use)=>use!=user) && serpassword.find((pas)=>pas==pass)){
    alert("Invalid Username ")
  }else if(serusername.find((use)=>use==user) && serpassword.find((pas)=>pas!=pass)){
    alert("Invalid password ")
  }else{
    alert("Invalid Username and password ")
  } 
  localStorage.setItem('user', user)
  }
  

    return (
        <div>
            <Card  className='all'>
        <div >
                    <div className="loginform">
                        <form className='backround' onSubmit={(e)=>onSubmitHandler(e)}>
                            <label className='backround'> User Id</label><br />
                            <input className='input' type="text" onChange={(e)=>onchangeuser(e)} value={user} /><br />
                            <label className='backround'> Password</label><br />
                            <input className='input' type="text" onChange={(e)=>onchangepass(e)} value={pass} /><br /><br/>
                            <button  className='btn btn-primary' type="submit" >Submit</button>
                        </form>
                    </div>
                    {/* <div className='footer'>Developed By :<strong>Piyush Mestry</strong></div> */}
        </div>
        </Card>
        </div>
    )
}

export default Login
