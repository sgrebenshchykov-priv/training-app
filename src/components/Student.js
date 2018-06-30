import React from 'react';

const StudentList = (props) => {
    return(
        <li>FirstName: {props.firstName} LastName: {props.lastName}</li>
    )
}

export default StudentList;