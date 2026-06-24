function markPresent(){

    let name = document.getElementById("studentName").value;

    if(name===""){
        alert("Enter Student Name");
        return;
    }

    let li = document.createElement("li");

    li.innerText = name + " - Present";

    document.getElementById("attendanceList").appendChild(li);

    document.getElementById("studentName").value="";
}