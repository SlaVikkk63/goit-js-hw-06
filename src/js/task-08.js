const login = document.querySelector(`.login-form`)

login.addEventListener(`submit`, el =>{

el.preventDefault()

// console.dir(el.currentTarget.elements.email.value)

const data = {

    email: el.currentTarget.elements.email.value,

    password: el.currentTarget.elements.password.value

}

if (data.email.trim() === `` || data.password.trim() === ``) {
    return alert(`eee, ніхуя`)
} else {
    console.log(data) 

    el.currentTarget.reset()
}

})






