import '../assets/css/compo.css' ;
import Profile from './Profile';
import {useState} from 'react';

export default function StudentTable(props){
    const[stu,setStu]=useState( props.students[0]);
    return(
        <>
        <div className="outerDiv">
            <div className="leftDiv">
                <table border="1">
                   <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Age</td>
                            <td>Course</td>
                            <td>Gender</td>
                            <td>Country</td>
                            <td>Profile</td>
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            props.students.map (student=>
                             <tr>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.age}</td>
                                <td>{student.course}</td>
                                <td>{student.gender}</td>
                                <td>{student.address.country}</td>
                                <td><button id={student.studentId} onClick={()=>{setStu(student)}}>View</button></td>
                             </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="rightDiv">
                    <Profile student={stu}/>
            </div>
        </div>
        </>
    );
}