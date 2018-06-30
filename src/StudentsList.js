import React, { Component } from 'react';
import StudentsList from './components/Student';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    id: "098376",
                    firstName: "Jhon",
                    lastName: "Smith"
                },
                {
                    id: "088376",
                    firstName: "Poul",
                    lastName: "Green"
                }
            ]
        }
    }

    render() {
        return(
            <div>
                <ol>
                    {
                        this.state.students.map((student) => {
                            return <StudentsList 
                                    key={student.id} 
                                    firstName={student.firstName} 
                                    lastName={student.lastName}
                                />
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default Students;