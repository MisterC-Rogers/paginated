import React from 'react';
import styled from 'styled-components'

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
    <div className='container'>
        <div className='row'>
            {Object.values(users).map((user, index) => (
                <div className='col-sm-6 col-md-4'>            
                    <div className='thumbnail' key={user.login.uuid}>
                        <img className='img-thumbnail' src={user.picture.large} alt={user.name.first}></img>
                        <Card>
                            <Row>
                                <h4>Name: {user.name.first} {user.name.last}</h4>
                                <p><b>Age:</b> {user.dob.age}</p>
                                <p><b>Email:</b> {user.email}</p>
                                <p><b>Phone:</b> {user.cell}</p>
                                <p><b>Gender:</b> {user.gender}</p>
                            </Row>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default UsersList;
