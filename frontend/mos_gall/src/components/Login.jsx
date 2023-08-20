import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import jwt_decode from 'jwt-decode';
import client from '../client'
const Login = () => {
  const navigate = useNavigate();

  const credentialResponse = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    var decodedHeader = jwt_decode(response.credential);
    console.log(decodedHeader);

    const { name, sub, picture } = decodedHeader;
    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    }
    client.createIfNotExists(doc).then( () => {
        navigate('/', { replace: true })
    } )

    
    // if (response?.credential) {
    //   try {
    //     var decoded = jwt_decode(response.credential);
    //     console.log(decoded);
    //   } catch (error) {
    //     console.error('Error decoding JWT token:', error);
    //   }
    // }


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
                onSuccess = {credentialResponse}
                onError = {() => {
                  console.log('Login Failed');
                }}
                cookiePolicy = 'single_host_origin'
              />
                </div>


            </div>
         </div>
    </div>
  )
}

export default Login