var selectRow=null;

frm=document.querySelector('form');
table=document.querySelector('table');
// Creation de la function Alert
function showAlert(message, className){
    // creation d'un element div
    const div=document.createElement('div');
    div.style.cssText="width: 50%; margin-left: auto; margin-right: auto";
    //creation d'une class alert dans l'element div cree
    div.className=`alert alert-${className}`;
    // envoie d'un message dans le div cree
    div.appendChild(document.createTextNode(message));
    const container= document.querySelector('.container');
    const main = document.querySelector('.main');
    container.insertBefore(div,main);

    // Limiter le temps d'affichage de l'alert
    setTimeout(()=> document.querySelector('.alert').remove(), 3000);
}


// Afficher la Liste 
    function affichForm(){
        frm.classList.add("hide");
        table.classList.remove("hide");
    }

    function ajoututilisateur(){
        event.preventDefault();
1    }


    // creation de la function qui permet de vider le formulaire
function clearFields(){
document.getElementById('firstname').value="";
document.getElementById('lastname').value="";
document.getElementById('rollno').value="";
}

// Add Data
document.getElementById('student-form').addEventListener('submit', (e)=>{
    e.preventDefault();
   const fistname= document.getElementById('firstname').value;
   const lastname = document.getElementById('lastname').value;
   const rollno= document.getElementById('rollno').value;

   if (fistname=="" || lastname=="" ||rollno=="") {
    showAlert("Merci de renseigner les input", "danger")
   }else{
        if (selectRow==null) {
                // recuperation de la Liste
            const list = document.querySelector('.student-List');
                // Creation d'une ligne
            const row = document.createElement('tr');
                // Ajout de nouvel donne dans la ligne cree
            row.innerHTML =
             `
             <td>${fistname}</td>
             <td>${lastname}</td>
             <td>${rollno}</td>
             <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
             </td>
             
            `;
            // Ajout de la ligne cree dans la liste
            list.appendChild(row);
            selectRow=null;
            showAlert("l'etudiant a ete ajouter avec success", "success" );
            // vider le formulaire
            clearFields();
        }else{
            selectRow.children[0].textContent=fistname
            selectRow.children[1].textContent=lastname
            selectRow.children[2].textContent=rollno
            showAlert("L'info de l'etudiant editer avec succee", "info")
            clearFields();
            selectRow=null
        }
   }
})

// edit data 

document.querySelector('.student-List').addEventListener('click', (e)=>{
    target=e.target;
    if(target.classList.contains("edit")){
        selectRow=target.parentElement.parentElement;
        document.getElementById('firstname').value=selectRow.children[0].textContent;
        document.getElementById('lastname').value=selectRow.children[1].textContent;
        document.getElementById('rollno').value=selectRow.children[2].textContent;
        
    }
});

//delete Data 
document.querySelector('.student-List').addEventListener('click', (e)=>{
    target=e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert('Student Data Deleted', 'danger')
        clearFields();
    }
})