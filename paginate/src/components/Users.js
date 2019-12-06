import React from 'react';
import styled from 'styled-components'
import './Users.scss'
const Card = styled.div`
display: flex;
flex-direction: column;
width:98%
`
const Row = styled.div`
width: 75%
margin: 0 auto;
justify-items: center;
`
const UsersList = ({ users, loading }) => {
if(loading){
    return <h2>Getting the Users...</h2>
}
return(
    <div className='columns is-centered is-multiline is-mobile'>
        {Object.values(users).map((user, index) => (
            <div className='Users__column column is-half' key={index}>            
                <div className={'Users__card card' +(user.emphasized === true ? " emphasized" : "")} >
                    <div className="Users__card-content card-content">
                        <div className='Users__user'>
                            <span className='is-size-3'>{user.name.first} {user.name.last}</span>
                        </div>
                        <div className='Users__userImage'>
                            <img className='img-thumbnail' src={user.picture.large} alt={user.name.first}></img>
                        </div>
                        <div className='Users__info'>
                            <p><b>Age:</b> {user.dob.age}</p>
                            <p><b>Email:</b> {user.email}</p>
                            <p><b>Phone:</b> {user.cell}</p>
                            <p><b>Gender:</b> {user.gender}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);
}

export default UsersList;
