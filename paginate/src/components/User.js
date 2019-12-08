import React from "react";
import { Link } from 'react-router-dom'
import '../styles/User.scss'
export const User = ({ user, closeViewer }) => {
    return (
        <div className="Users__card card">
            <div className="Users__card-content card-content">
                <div className="Users__user">
                    <span className="Users__header">
                        {user.title}. {user.firstName} {user.lastName}
                    </span>
                </div>
                <div className="Users__userImage">
                    <img
                        className="img-thumbnail "
                        src={user.picture}
                        alt={user.firstName}
                    ></img>
                </div>
                <div className="Users__info">
                    <div className="Users__row">
                        <p className="Users__space">
                            <b>Age:</b> {user.age}
                        </p>
                        <p className="Users__space">
                            <b>Gender:</b> {user.gender}
                        </p>
                    </div>
                    <div className='user__address'>
                        <p>
                            <b>ADDRESS</b>
                        </p>
                        <p>
                            {user.addressNum} {user.addressStreet}
                        </p>
                        <p>
                            {user.city}, {user.state} {user.zipCode}
                        </p>
                        <p>
                            {user.country}
                        </p>
                    </div>
                    <p>
                        <b>Email:</b> {user.email}
                    </p>
                    <p>
                        <b>Username:</b> {user.username}
                    </p>
                    <p>
                        <b>Phone:</b> {user.phone}
                    </p>
                    <p>
                        <b>Member for {user.member} years</b>
                    </p>
                    <p>
                        <Link to={`/`} onClick={() => closeViewer()}>Close Viewer</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

