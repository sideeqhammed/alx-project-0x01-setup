import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";


const UserModal: React.FC<UserModalProps> = ({onClose, onSubmit}) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    id: 1,
    username: "",
    email: "",
    phone: ""
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setUser((prevUser) => ({...prevUser, [name]: value}));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  return(
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4"><label htmlFor="userName" className="block text-gray-700 font-medium mb-2">User ID</label>
            <input
              type="string"
              id="userName"
              name="userName"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={user.id}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="user-name" className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="string"
              id="user-name"
              name="user-name"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userEmail" className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="string"
              id="userEmail"
              name="userEmail"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Body</label>
            <input
              type="string"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post content"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Add User
              </button>
          </div>
        </form>
      </div>
    </div> 
  )
  }
}

export default UserModal