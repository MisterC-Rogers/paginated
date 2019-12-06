import React, { useState, useEffect } from "react";
import axios from "axios";
import UsersList from "./components/Users";
import { Pagination } from "./components/Pagination";
import './styles/App.scss'

function App() {
    const [Users, setUsers] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [UsersPerPage] = useState(10);
    const [CurrentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const userData = await axios.get(
                    "https://randomuser.me/api/?results=200"
                );
                const users = Object.keys(userData.data.results).map(
                    i => userData.data.results[i]
                );
                setUsers(users);
                setLoading(false);
            } catch (err) {
                console.log(
                    "There was an error getting the Users data",
                    err.message
                );
            }
        };
        getData();
    }, []);

    // console.log(Users[0]);

    //make the users pre page
    const lastUser = CurrentPage * UsersPerPage;
    const firstUser = lastUser - UsersPerPage;
    const currentUsers = Users.slice(firstUser, lastUser);

    //change the page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container App__Container">
            <h1 className='title is-1 has-text-centered'> Clients </h1>
            <Pagination
                usersPerPage={UsersPerPage}
                totalUsers={Users.length}
                paginate={paginate}
                currentPage={CurrentPage}
            />
            <UsersList
              users={currentUsers} 
              loading={Loading} 
            />
            <Pagination
                usersPerPage={UsersPerPage}
                totalUsers={Users.length}
                paginate={paginate}
                currentPage={CurrentPage}
            />
        </div>
    );
}

export default App;
