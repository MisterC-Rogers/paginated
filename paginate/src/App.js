import React, { useState, useEffect } from "react";
import axios from "axios";
import UsersList from "./components/UsersList";
import { User } from './components/User'
import { Pagination } from "./components/Pagination";
import './styles/App.scss'

function App() {
    const [Users, setUsers] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [UsersPerPage] = useState(10);
    const [CurrentPage, setCurrentPage] = useState(1);
    const [CurrentUser, setCurrentUser] = useState(null)

    //get the user data
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const userData = await axios.get(
                    "https://randomuser.me/api/?results=100"
                );
                // console.log(userData.data.results);
                const users = Object.values(userData.data.results).map(
                    i =>({
                      id: i.login.uuid,
                      title: i.name.title, 
                      firstName: i.name.first,
                      lastName: i.name.last,
                      age: i.dob.age,
                      phone: i.cell,
                      email: i.email,
                      username: i.login.username,
                      picture: i.picture.large,
                      gender: i.gender,
                      addressNum: i.location.street.number,
                      addressStreet: i.location.street.name,
                      city: i.location.city,
                      state: i.location.state,
                      zipCode: i.location.postcode,
                      country: i.location.country,
                      member: i.registered.age
                    })
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

    //make the users pre page
    const lastUser = CurrentPage * UsersPerPage;
    const firstUser = lastUser - UsersPerPage;
    const currentUsers = Users.slice(firstUser, lastUser);
    const currentUser = CurrentUser
    
    //change the page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //download the current users on a page
    const objectToCSV = (data) => {
      const csvRows = []

      //get the headers for the columns
      const headers = Object.keys(data[0])
      csvRows.push(headers.join(','))

      // loop over the rows
      for(const row of data){
        const values = headers.map(header => {
          const escaped = (''+row[header]).replace(/"/g, '\\"')
          return `"${escaped}"`
        })
        csvRows.push(values.join(','))
      } 
      // console.log(csvRows.join('\n'));
      return csvRows.join('\n');
    }

    // function to download the CSV 
    const download = (data) => {
      const currUsersData = objectToCSV(data)
      const blob = new Blob([currUsersData], {type: 'text/csv'})
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.setAttribute('hidden', '')
      a.setAttribute('href', url)
      a.setAttribute('download', 'users.csv')
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }

    //view single user data
    const viewUser = (id) => {
      const filterUser = Users.filter(user => user.id === id)
      setCurrentUser(filterUser)
    }
    //reset current user 
    const closeViewer = () => {
      setCurrentUser(null)
    }

    
    return (
        <div className="App__Container">
            <h1 className='title is-1 has-text-centered'> Clients </h1>

            {Users.length > 10 ? <Pagination
                usersPerPage={UsersPerPage}
                totalUsers={Users.length}
                paginate={paginate}
                currentPage={CurrentPage}
            /> : null}

            {CurrentUser == null ? 
            <UsersList
              viewUser={viewUser}
              users={currentUsers} 
              loading={Loading} 
            /> : <User closeViewer={closeViewer} user={CurrentUser[0]}/>}

            {Users.length > 10 ? <Pagination
                usersPerPage={UsersPerPage}
                totalUsers={Users.length}
                paginate={paginate}
                currentPage={CurrentPage}
            /> : null}

            <div className='App__buttonDiv is-primary'>
              {CurrentUser == null ? <button className='App__button button is-link'onClick={() => download(currentUsers)}>Export Users Data</button> : <button className='App__button button is-link'onClick={() => download(currentUser)}>Export User Data</button>}
            </div>
        </div>
    );
}

export default App;
