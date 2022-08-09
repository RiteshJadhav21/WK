var PatientName,PatientAddress,PatientContact
let setPatientName = E =>{PatientName = E.target.value}
let setPatientAddress = E =>{PatientAddress = E.target.value}
let setPatientContact = E =>{PatientContact = E.target.value}

let MainDiv = document.getElementById('Main-Div')
let AddPatient = document.getElementById('Add-Patient')
let RemovePatient = document.getElementById('Remove-Patient')
let EditPatient = document.getElementById('Edit-Patient')
let ListOfPatients = document.getElementById('List-Of-Patients')
let Add = document.getElementById('Add')
let Remove = document.getElementById('Remove')
let Edit = document.getElementById('Edit')
let List = document.getElementById('List')
let PatientList = []

let AddPatientFunction = ()=>{
    RemovePatient.style.marginRight = "10px"
    EditPatient.style.marginRight = "10px"
    ListOfPatients.style.marginRight = "10px"
    AddPatient.style.marginRight = "0px"
    MainDiv.style.backgroundColor = "rgb(60, 0, 116)"
    MainDiv.innerHTML =
    "<fieldset>"+
       "<legend>Add Patient</legend>"+
            "<b> Name of Patient: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Enter Patient Name\" onchange=\"setPatientName(event)\" class=\"inputs\"><br><br>"+
            "<b> Address of Patient: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Enter Patient Address\" onchange=\"setPatientAddress(event)\" class=\"inputs\"><br><br>"+
            "<b> Contact of Patient: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" step=\".5\" placeholder=\"Enter Patient Contact\" onchange=\"setPatientContact(event)\" class=\"inputs\"><br><br>"+
            "<button id=\"Add\" onclick=\"addPatient()\">Add</button>"+
    "</fieldset>"
}
let addPatient = () => {
    if(PatientName === undefined ||PatientAddress === undefined ||PatientContact === undefined)
        alert(`All fields are mandatory`)
    else{
        let PatientInfo = {
            name: PatientName,
            Address: PatientAddress,
            Contact: PatientContact,
        }
        PatientList.push(PatientInfo)
        alert(`Patient ${PatientName} is added in List`)
        console.log(PatientList)
        let inputs = document.querySelectorAll('.inputs')
        for(i in inputs)
            inputs[i].value = ''
        PatientName = PatientAddress = PatientContact = undefined
    }
}

let RemovePatientFunction = ()=>{
    AddPatient.style.marginRight = "10px"
    EditPatient.style.marginRight = "10px"
    ListOfPatients.style.marginRight = "10px"
    RemovePatient.style.marginRight = "0px"
    MainDiv.style.backgroundColor = "rgb(78, 3, 148)"
    MainDiv.innerHTML =
    "<fieldset>"+
        "<legend>Remove Patient</legend>"+
            "<b> Name of Patient: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Enter Patient Name\" onchange=\"setPatientName(event)\" class=\"inputs\"><br><br>"+
            "<button id=\"Remove\" onclick=\"removePatient()\">Remove</button>"+
    "</fieldset>"
}
let removePatient = () => {
    let temp = PatientList.filter(Patient=>Patient.name!==PatientName)
    if(temp.length!==PatientList.length){
        PatientList = temp
        alert(`Patient named ${PatientName} is removed from List`)
    }
    else
        alert(`Patient named ${PatientName} is not available in List`)
    let inputs = document.querySelectorAll('.inputs')
    for(i in inputs)
        inputs[i].value = ''
    PatientName = PatientAddress = PatientContact = undefined  
}

let EditPatientFunction = ()=>{
    AddPatient.style.marginRight = "10px"
    RemovePatient.style.marginRight = "10px"
    ListOfPatients.style.marginRight = "10px"
    EditPatient.style.marginRight = "0px"
    MainDiv.style.backgroundColor = "rgb(104, 0, 201)"
    MainDiv.innerHTML =
    "<fieldset>"+
        "<legend>Edit Patient</legend>"+
            "<b> Name of Patient: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Enter Patient Name\" onchange=\"setPatientName(event)\" class=\"inputs\"><br><br>"+
            "<b> Contact of Patient: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" step=\".5\" placeholder=\"Enter Patient Contact\" onchange=\"setPatientContact(event)\" class=\"inputs\"><br><br>"+
            "<button id=\"Edit\" onclick=\"editPatient()\">Edit</button>"+
    "</fieldset>"
}
let editPatient = () =>{
    let flag = false
    for(i in PatientList){
        if(PatientList[i].name === PatientName){
            PatientList[i].Contact = PatientContact
            flag = true
            break
        }
    }
    if(flag)
        alert(`New Contact of Patient ${PatientName} is Rs.${PatientContact}`)
    else
        alert(`Patient ${PatientName} is not available in List` )
    let inputs = document.querySelectorAll('.inputs')
    for(i in inputs)
        inputs[i].value = ''
    PatientName = PatientAddress = PatientContact = undefined
}

let ListOfPatientsFunction = ()=>{
    AddPatient.style.marginRight = "10px"
    EditPatient.style.marginRight = "10px"
    RemovePatient.style.marginRight = "10px"
    ListOfPatients.style.marginRight = "0px"
    MainDiv.style.backgroundColor = "rgb(126, 0, 245)"
    if(PatientList.length === 0){
        MainDiv.innerHTML =
        "<fieldset>"+
            "<legend>List of Patients</legend>"+
            "<center>There is no any Patient in this List</center>"+
        "</fieldset>"
    }
    else{
        let list = ""
        for(i in PatientList){
            list+= `<tr><td>&nbsp;${+i+1}&nbsp;</td><td>&nbsp;${PatientList[i].name}&nbsp;</td><td>&nbsp;${PatientList[i].Address}&nbsp;</td><td>&nbsp;Contact = ${PatientList[i].Contact}/-&nbsp;</td></tr>`
        }
        MainDiv.innerHTML =
        "<fieldset>"+
            "<legend>List of Patients</legend>"+
            "<table>"+
                "<thead>"+
                    "<tr><th>Id</th><th>Name</th><th>Aurther</th><th>Contact</th></tr>"+
                "</thead>"+
                "<tbody>"+list+"</tbody>"+
            "</table>"+
        "</fieldset>"
    }
}
