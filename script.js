fetch("http://localhost:3000/api/students")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const studentsDiv = document.getElementById("students");

        data.forEach(student => {
            studentsDiv.innerHTML += `
                <p>
                    ID: ${student.id} <br>
                    Name: ${student.name} <br>
                    Course: ${student.course}
                </p>
                <hr>
            `;
        });
    })
    .catch(error => {
        console.log("Error:", error);
    });