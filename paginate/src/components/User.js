import React from "react";
import { Link } from 'react-router-dom'
import '../styles/User.scss'
export const User = ({ user, closeViewer }) => {
    return (
        <div className="user__card card">
            <div className="user__card-content card-content">
                <div className="user__user">
                    <span className="user__header">
                        {user.title}. {user.firstName} {user.lastName}
                    </span>
                </div>
                <div className="user__userImage">
                    <img
                        className="img-thumbnail "
                        src={user.picture}
                        alt={user.firstName}
                    ></img>
                </div>
                <div className="user__info">
                    <div className="user__row">
                        <p className="user__space">
                            <b>Age:</b> {user.age}
                        </p>
                        <p className="user__space">
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

