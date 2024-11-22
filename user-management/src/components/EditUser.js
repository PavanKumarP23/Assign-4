import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function EditUser() {
  const { id } = useParams();
  const { users, editUser } = useContext(UserContext);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();


  const user = users.find((user) => user.id === parseInt(id));
  setValue('name', user.name);
  setValue('email', user.email);

  const onSubmit = (data) => {
    editUser(parseInt(id), data);
    alert('User updated successfully!');
    navigate('/users');
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label>Email:</label>
          <input {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default EditUser;
