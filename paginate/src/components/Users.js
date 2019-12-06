import React from 'react';
import '../styles/Users.scss'

const UsersList = ({ users, loading, color, size}) => {
if(loading){
    return <h2>Getting the Users...</h2>
}

return(
    <div className='Users__container' >
        <div className='columns is-centered is-multiline is-mobile Users__single'>
            {Object.values(users).map((user, index) => (
                <div className='Users__column column is-half ' key={index}>            
                    <div className='Users__card card' >
                        <div className="Users__card-content card-content">
                            <div className='Users__user'>
                                <span className='Users__header'>{user.name.first} {user.name.last}</span>
                            </div>
                            <div className='Users__userImage is-hidden-mobile'>
                                <img className= 'img-thumbnail ' src={user.picture.large} alt={user.name.first}></img>
                            </div>
                            <div className='Users__info'>
                                <div className='Users__row is-hidden-mobile'>
                                    <p className='Users__space'><b>Age:</b> {user.dob.age}</p>
                                    <p className='Users__space'><b>Gender:</b> {user.gender}</p>
                                </div>
                                <p className='is-hidden-mobile'><b>Email:</b> {user.email}</p>
                                <p><b>Phone:</b> {user.cell}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default UsersList;
