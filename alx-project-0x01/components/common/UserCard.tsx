import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> =({name, username, id, email, phone}) => {
  return(
    <div className="max-w-xl my-10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      </div>
      <p className="text-gray-600">Id: {id}</p>
      <p className="text-gray-600">Username: {username}</p>
      <p className="text-gray-600">E-mail: {email}</p>
      <p className="text-gray-600">Phone number: {phone}</p>
      {/* <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {email}</span>
        <span>Post ID: {phone}</span>
      </div> */}
    </div>
  );
}

export default UserCard;