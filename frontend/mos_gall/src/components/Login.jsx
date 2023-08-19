import React from 'react'
import { GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';


const Login = () => {
  
  const responseGoogle = (response) => {
    console.log(response);
    // console.log(response.profileObj) 
    // const { name, googleId, imageUrl } = response.profileObj;
  }

  return (
    <div className='flex justify-start items-center flex-col h-screen  ' >
         <div className='relative w-full h-full ' >
            <video 
               src = { shareVideo }
               type = 'video/mp4'
                loop
                controls = {false}
                muted
                autoPlay
                className=' w-full h-full object-cover  blur-sm '
            />

            <div className='absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center bg-transparent ' >
                <div className='p-5' >
                  <img src = {logo} width = '130px' alt= 'logo' />
                </div>
                

                <div className='shadow-2xl' >
                
                    <GoogleLogin
                      clientId = {process.env.REACT_APP_GOOGLE_API_TOKEN}
                      onSuccess={responseGoogle}
                      onError={responseGoogle}
                      // cookiePolicy = 'single_host_origin'
                    />
                </div>


            </div>
         </div>
    </div>
  )
}

export default Login