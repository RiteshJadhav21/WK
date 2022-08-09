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
    // RemovePatient.style.marginRight = "10px"
    // EditPatient.style.marginRight = "10px"
    // ListOfPatients.style.marginRight = "10px"
    // AddPatient.style.marginRight = "0px"
    // MainDiv.style.backgroundColor = "rgb(60, 0, 116)"
    MainDiv.innerHTML =
    "<fieldset>"+
    //    "<legend>Add Patient</legend>"+
    //         "<b> Name of Patient: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Enter Patient Name\" onchange=\"setPatientName(event)\" class=\"inputs\"><br><br>"+
    //         "<b> Address of Patient: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Enter Patient Address\" onchange=\"setPatientAddress(event)\" class=\"inputs\"><br><br>"+
    //         "<b> Contact of Patient: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" step=\".5\" placeholder=\"Enter Patient Contact\" onchange=\"setPatientContact(event)\" class=\"inputs\"><br><br>"+
    //         "<button id=\"Add\" onclick=\"addPatient()\">Add</button>"+

            "<section class=\"book\" id=\"book\">"+

                        "<h1 class=\"heading\"> <span>book</span> now </h1>"+    
                    
                        "<div class=\"row\">"+
                    
                            "<div class=\"image\">"+
                                "<img src=\"image/book-img.svg\" alt=\"\">"+
                            "</div>"+
                    
                            "<form action=\"\">"+
            "<h3>book appointment</h3>"+
                                "<input type=\"text\" placeholder=\"patient name\" class=\"box\" onchange=\"setPatientName(event)\">"+
                                "<input type=\"number\" placeholder=\"patient number\" class=\"box\" onchange=\"setPatientContact(event)\" >"+
                                "<input type=\"text\" placeholder=\"patient address\" class=\"box\" onchange=\"setPatientAddress(event)\" >"+
                                "<button class=\"btn\" id=\"Add\" onclick=\"addPatient()\">Add</button>"+                            
                                "</form>"+
                    
                                "</div>"+
                            
                            "</section>"+
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
    
    MainDiv.innerHTML =
    "<fieldset>"+
        // "<legend>Remove Patient</legend>"+
        //     "<b> Name of Patient: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Enter Patient Name\" onchange=\"setPatientName(event)\" class=\"inputs\"><br><br>"+
        //     "<button id=\"Remove\" onclick=\"removePatient()\">Remove</button>"+

            "<section class=\"book\" id=\"book\">"+

                        "<h1 class=\"heading\"> <span>Remove</span> now </h1>"+    
                    
                        "<div class=\"row\">"+
                    
                            "<div class=\"image\">"+
                                "<img src=\"image/book-img.svg\" alt=\"\">"+
                            "</div>"+
                    
                            "<form action=\"\">"+
            "<h3>Remove Patient</h3>"+
                                "<input type=\"text\" placeholder=\"Enter Patient Name\" class=\"box\" onchange=\"setPatientName(event)\">"+
                                "<button class=\"btn\" id=\"Add\" onclick=\"removePatient()\">Remove</button>"+                            
                                "</form>"+
                    
                                "</div>"+
                            
                            "</section>"+

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
   
    MainDiv.innerHTML =
    "<fieldset>"+
        // "<legend>Edit Patient</legend>"+
        //     "<b> Name of Patient: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Enter Patient Name\" onchange=\"setPatientName(event)\" class=\"inputs\"><br><br>"+
        //     "<b> Contact of Patient: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" step=\".5\" placeholder=\"Enter Patient Contact\" onchange=\"setPatientContact(event)\" class=\"inputs\"><br><br>"+
        //     "<button id=\"Edit\" onclick=\"editPatient()\">Edit</button>"+

            "<section class=\"book\" id=\"book\">"+

            "<h1 class=\"heading\"> <span>Edit</span> now </h1>"+    
        
            "<div class=\"row\">"+
        
                "<div class=\"image\">"+
                    "<img src=\"image/book-img.svg\" alt=\"\">"+
                "</div>"+
        
                "<form action=\"\">"+
"<h3>Edit Patient</h3>"+
                    "<input type=\"text\" placeholder=\"Enter Patient Name\" class=\"box\" onchange=\"setPatientName(event)\">"+
                       
                    "<input type=\"number\" placeholder=\"patient number\" class=\"box\" onchange=\"setPatientContact(event)\" >"+
                    "<input type=\"text\" placeholder=\"patient address\" class=\"box\" onchange=\"setPatientAddress(event)\" >"+
                              "<button class=\"btn\" id=\"Add\" onclick=\"editPatient()\">Edit</button>"+              
                    "</form>"+
        
                    "</div>"+
                
                "</section>"+


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
   
    if(PatientList.length === 0){
        MainDiv.innerHTML =
        "<fieldset>"+
            "<h2>List of Patients</h2>"+
            "<center class=\"box\">There is no any Patient in this List</center>"+
        "</fieldset>"
    }
    else{
        let list = ""
        for(i in PatientList){
            list+= `<tr><td>&nbsp;${+i+1}&nbsp;</td><td>&nbsp;${PatientList[i].name}&nbsp;</td><td>&nbsp;${PatientList[i].Address}&nbsp;</td><td>&nbsp;Contact ${PatientList[i].Contact}&nbsp;</td></tr>`
        }
        MainDiv.innerHTML =
        "<fieldset>"+
        "<section class=\"book\" id=\"book\">"+
            "<h2>List of Patients</h2>"+
            "<table class=\"box\">"+
                "<thead>"+
                    "<tr><th>Id</th><th>Name</th><th>Address</th><th>Contact</th></tr>"+
                "</thead>"+
                "<tbody ><h1 class=\"heading\">"+list+"</h1></tbody>"+
            "</table>"+
            "</section>"+
        "</fieldset>"
    }
}
