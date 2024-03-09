import React, { useState, useEffect } from 'react'
import Item from './Item'


const Accordian = () => {
    const [users, setUsers] = useState([])
    const [expandedUserId, setExpandedUserId] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    const fetchData = async () => {
        const jsonData = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await jsonData.json()
        setUsers(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const toggleUserDetail = (userId) => {
        setExpandedUserId(expandedUserId === userId ? null : userId);
    };

    const filteredUsers = searchInput.length === 0 ? users : users.filter(user => 
        user.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center justify-center my-8">
            <input 
                type="text" 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="p-2 mb-4 text-gray-700 bg-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-6/12"
                placeholder="Search by name..."
            />
            {filteredUsers.map(user => (
                <div key={user.id} className='w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4'>
                    <div onClick={() => toggleUserDetail(user.id)} className="cursor-pointer">
                        {user.name}
                    </div>
                    {expandedUserId === user.id && (
                        <div>
                            <Item user={user} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Accordian