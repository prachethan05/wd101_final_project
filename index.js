function checkAgeValidity() {
    const dob = new Date(document.getElementById('dob').value);
    const age = (new Date() - dob) / (365 * 24 * 60 * 60 * 1000);
    const isValid = age >= 18 && age <= 55;
    document.getElementById('dob').setCustomValidity(isValid ? '' : 'The age should be in between 18 and 55 years');
    document.getElementById('dob').reportValidity();
  }
 let userform = document.getElementById("user-form");
 
 const EntriesRetrieved = ()=> {
    let entries = localStorage.getItem("user-entries");
    if(entries){
       entries=JSON.parse(entries);
    }
    else{
       entries=[]
    }
    return entries;
 }
 
 let userentries=EntriesRetrieved();
 
 const displayEntries = ()=>
 {
    const entries=EntriesRetrieved();
    const tableEntries =entries.map((entry)=>{
       const nameCell= `<td class='border px-4 py-2'>${entry.name}</td>`;
         const emailCell= `<td class='border px-4 py-2'>${entry.email}</td>`;
         const passwordCell= `<td class='border px-4 py-2'>${entry.password}</td>`;
         const dobCell= `<td class='border px-4 py-2'>${entry.dob}</td>`;
         const acceptTermsCell= `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
         const row= `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
         return row;
    }).join("\n");
 
    const table= `<table class="table-auto w-full"><tr>
     <th class="px-4 py-2">Name</th>
     <th class="px-4 py-2">Email</th>
     <th class="px-4 py-2">Password</th>
     <th class="px-4 py-2">Dob</th>
     <th class="px-4 py-2">Accepted terms?</th>
     </tr>${tableEntries} </table>`;
     let details=document.getElementById("user-entries");
     details.innerHTML = table;
 
    
 }
 const saveUserform = (event) =>{
     event.preventDefault();
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     const dob = document.getElementById('dob').value;
     const acceptedTermsAndConditions = document.getElementById('acceptTerms').checked;
 
     const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions
     };
     userentries.push(entry);
 
     localStorage.setItem("user-entries",JSON.stringify(userentries));
     displayEntries();
 }
 
 userform.addEventListener("submit",saveUserform);
 displayEntries();