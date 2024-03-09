import React from 'react';

// Updated to accept `user` prop
const Item = ({ user }) => {
  return (
    <div className="text-left space-y-2">
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  )
}

export default Item;
