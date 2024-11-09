const miForm = document.getElementById('miform')
const nameInput = document.getElementById('name')
const nameEmail = document.getElementById('email')
const password = document.getElementById('password')
const msg = document.getElementById('msg')
const fill = document.getElementById('fill')
const fill1 = document.getElementById('fill-1')
const fill2 = document.getElementById('fill-2')
const fill3 = document.getElementById('fill-3')
const fill4 = document.getElementById('fill-4')
const gender = document.getElementById('gend')
const dob = document.getElementById('dob')

const localArray = [];

miForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault()

    setTimeout(() => msg.innerHTML  = "", 2000)
    setTimeout(() => fill.innerHTML = '', 1000)
    setTimeout(() => fill1.innerHTML = '', 1000)
    setTimeout(() => fill2.innerHTML = '', 1000)
    setTimeout(() => fill3.innerHTML = '', 1000)
    setTimeout(() => fill4.innerHTML = '', 1000)

    if(nameInput.value === '') {
        fill.innerHTML = 'Enter Full-Name'
        
    } else
        if(nameEmail.value === '') {
            fill1.innerHTML = 'Enter email.com'
        } else
        if(password.value === ''){
            fill2.innerHTML = 'Enter password'
        }  else
            if(gender.value === 'other') {
                fill3.innerHTML = 'Select gender/sex'
            } else
                if(dob.value === '') {
                    fill4.innerHTML = 'Select your DOB'
                }
                else {
                    msg.innerHTML = 'Submission successful'
                    msg.style.fontWeight = 'bold'
                    msg.style.color = 'green';
                    setTimeout(() => password.value = '', 2000)
                    setTimeout(() => nameInput.value = '', 2000)
                    setTimeout(() => nameEmail.value = '', 2000)
                    setTimeout(() => gender.value = '', 2000)
                    setTimeout(() => dob.value = '', 2000)
                    localArray.push([nameInput.value,
                        nameEmail.value,
                        gender.value,
                        dob.value,
                        password.value])
                    localStorage.setItem("formData",localArray);
                    miForm.submit();  
                }

               

}




