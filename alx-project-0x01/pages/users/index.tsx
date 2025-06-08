import { UserData, UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { useState } from "react";

const Users: React.FC<UserProps[]> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  
  
  const handleAddUser = (newUser: UserData) => {
    setUser({ ...newUser, id: users.length + 1 });
  };
  return(
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Users</h1>
          <button onClick={() => setModalOpen(true)}
            className="bg-gray-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {
            users?.map(({ name, id, username, email, phone }: UserProps, key: number) => (
              <UserCard name={name} username={username} id={id} email={email} phone={phone} key={key} />
            ))
          }
        </div>
      </main>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default Users;