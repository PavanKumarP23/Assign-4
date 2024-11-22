import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function AddUser() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { addUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    addUser(data);
    navigate('/users');
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Name:
          <input {...register('name', { required: true })} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          {errors.name && <span style={{ color: 'red' }}>This field is required</span>}
        </label>
        <label>
          Email:
          <input {...register('email', { required: true })} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
          {errors.email && <span style={{ color: 'red' }}>This field is required</span>}
        </label>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
