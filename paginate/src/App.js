import React, { useState, useEffect } from "react";
import axios from "axios";
import UsersList from "./components/Users";
import { Pagination } from "./components/Pagination";
import "./App.css";

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
                    "https://randomuser.me/api/?results=100"
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
    const numberPages = Math.floor(Users / UsersPerPage);

    //change the page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3"> Clients </h1>
            <UsersList users={currentUsers} loading={Loading} />
            <Pagination
                usersPerPage={UsersPerPage}
                totalUsers={Users.length}
                paginate={paginate}
                currentPage={CurrentPage}
                pages={numberPages}
            />
        </div>
    );
}

export default App;
