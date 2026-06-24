function markPresent(){

    let name = document.getElementById("studentName").value;

    if(name===""){
        alert("Please Enter Student Name");
        return;
    }

    let table = document.getElementById("attendanceTable");

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = name;
    cell2.innerHTML = "Present";

    document.getElementById("studentName").value="";
}