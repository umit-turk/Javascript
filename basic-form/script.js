/* 
1: formu seç 2:ınput bilgisini UL içerisine ekle 3: form içerisindeki bilgiyi sıfırla 4: eger forma bilgi girilmezse kullanıcıyı uyar
 */


let userFormDOM =document.getElementById('userForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.getElementById('alert')

const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.getElementById('username')
    const SCORE = document.getElementById('score')
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value) // gonderdikten sonra sıfırladık.
        USER_NAME.value = ""
        SCORE.value = ""
    }else {
        alertDOM.innerHTML = 
        alertFunction(
            "Başlık Bilgisi",
            "Eksik bilgi girdiniz",
            "danger"
            )
    }
}




let userListDOM = document.getElementById('userList')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>
     `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}