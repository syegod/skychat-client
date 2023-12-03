import React, { useState } from 'react'
import CustomInput from '../components/inputs/CustomInput'
import CustomBtn from '../components/inputs/CustomBtn';
import { Link } from 'react-router-dom';
import axios from '../axios';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    username: '', password: ''
  });

  function handleFormChange(e: any) {
    setForm({ ...form, [e.target.id]: e.target.value });
    setError('');
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('/login', form);
      if ('token' in response.data) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        window.location.assign('/');
    }
    } catch (err: any) {
      console.log(err);
      setError(err.response.data.message);
    } finally{
      setLoading(false);
    }
  }


  return (
    <div className='w-full flex justify-center mt-10 sm:mt-32'>
      <div className='p-3 sm:p-5 sm:border sm:rounded-lg sm:shadow-md'>
        <form className='flex flex-col gap-5 font-light items-center' onSubmit={e => handleSubmit(e)}>
          <span className='flex flex-col gap-1 items-center font-semibold font-montserrat'><span className='text-xl font-bold'>Welcome to SkyChat</span><span>Log in to continue</span></span>
          <hr className='w-1/2 mx-auto' />
          {error && <span className='text-rose-500 text-center w-[30ch] break-words'>{error}</span>}
          <CustomInput id='username' onChange={handleFormChange} value={form.username} type='text' color='primary' disabled={loading} placeholder='Enter username...' />
          <CustomInput id='password' onChange={handleFormChange} value={form.password} type='password' color='primary' disabled={loading} placeholder='Enter password...' />
          <CustomBtn value='Log in' id='login_btn' color='primary' fullWidth disabled={loading || !form.password || !form.username} />
        </form>
        <div className='mt-5 text-center sm:max-w-[30ch] mx-auto'>
          <Link to={'/register'} className='font-light hover:underline text-center'>Dont have an account yet? Create new here.</Link>
        </div>
      </div>
    </div>
  )
}

export default Login