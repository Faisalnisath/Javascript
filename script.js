const form = document.querySelector('#form')
const Username = document.querySelector('#Username')
const Email = document.querySelector('#Email')
const Password = document.querySelector('#Password')
const CPassword = document.querySelector('#CPassword')

form.addEventListener('submit', (e)=>{

    if(!Validateinput()){
        e.preventDefault();
    }

})

function Validateinput(){
    const usernameVal= Username.value.trim()
    const emailVal= Email.value.trim()
    const passwordVal= Password.value.trim()
    const cpasswordVal= CPasswordpassword.value.trim()
    let success = true
}

if(usernameVal===''){
    setError(Username, 'username is required')
}   
else{
    setSuccess(Username)
}

if(emailVal===''){
    setError(Email, 'Email is required')
}

else if(!ValidateEmail(emailVal)){
    setError(Email, 'Enter a validate email')
}

else{
    setSuccess(Email)
}

if(passwordVal===''){
    setError(Password, 'password can not be empty')
}

else if(passwordVal.length<8){
    setError(Password, 'password is too short')
}

else{
    setSuccess(Password)
}

if(cpasswordVal===''){
    setError(CPassword, 'cpassword can not be empty')
}

else if(passwordVal!==passwordVal){
    setError(CPassword, 'cpassword is mismatch')
}

else{
    setSuccess(CPassword)
}

function setError(element, message){
    const input= element.ParentElement;
    const errorelement = input.querySelector('error')
    errorelement.innertext= message
    input.classList.add('error')
    input.classList.remove('success')
}

function setSuccess(element){
    const input= element.ParentElement;
    const errorelement = input.querySelector('error')
    errorelement.innertext= '';
    input.classList.add('error')
    input.classList.remove('success')
}

const ValidateEmail=(Email)=>{
    return String(Email)
    .toLowerCase()
    .match()
}