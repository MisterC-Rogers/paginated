import React from 'react';

const UsersList = ({ users, loading }) => {
if(loading){
    return <h2>Getting the Users...</h2>
}
return(
    <div className='container'>
        <div className='row'>
            {Object.values(users).map((user, index) => (
                <div className='col-sm-6 col-md-4'>            
                    <div className='card mb-4' key={user.login.uuid}>
                        <img className='card-img-top' src={user.picture.large} alt={user.name.first}></img>
                        <div className='card-body'>
                            <h4 className='card-title'>Name: {user.name.first} {user.name.last}</h4>
                            <p><b>Age:</b> {user.dob.age}</p>
                            <p><b>Email:</b> {user.email}</p>
                            <p><b>Phone:</b> {user.phone} <b>Cell:</b> {user.cell}</p>
                            <p><b>Gender:</b> {user.gender}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default UsersList;
