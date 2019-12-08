import React from "react";

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
                    <div >
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
                        Member for {user.member} years
                    </p>
                    <p>
                        <a href="!#" onClick={() => closeViewer()}>
                            Close Viewer
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
