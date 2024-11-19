import '../assets/css/compo.css' ;
export default function StudentTable(props){
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
                        <td>Address</td>
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
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}