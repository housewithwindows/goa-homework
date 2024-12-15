import { useState } from "react";


const GradeTracker = () => {
    const [students, setStudents] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(Number(e.target.grade.value) > 100 || Number(e.target.grade.value) < 0) {
            alert("Invalid grade. Grade must be between 0 and 100.");
            return;
        }

        const student = {
            
            name: e.target.name.value,
            grade: Number(e.target.grade.value),
        }
        setStudents([...students, student]);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter student's name" />
                <input type="number" name="grade" placeholder="Enter student's grade" />
                <button>Add Student</button>
            </form>

            <ul>
                {
                    students.map((student,index) => {
                        return (
                            <li key={index}>{student.name} - {student.grade} - {student.grade >= 50 ? "Good" : "Bad"}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default GradeTracker;