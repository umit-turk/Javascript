let items = ["3 Litre Su İç","Ödevleri Yap","En Az 3 Saat Kodlama Yap","Yemek Yap","50 Sayfa Kitap Oku"]

if(typeof(Storage) !== "undefined"){
    localStorage.setItem("items","string");
    document.getElementById("hedef").innerHTML = localStorage.getItem("item");
} else{
    document.getElementById("hedef").innerHTML = "sorry, your browser does not support Web Storage..."
}

let list =document.getElementById("list")

items.forEach(function(item){

   CreateItem(item);


})



list.addEventListener('click',function(item){
    if(item.target.tagName='li'){
        item.target.classList.toggle('checked');
    }
});

document.getElementById('liveToastBtn').onclick = function(){
    let item = document.getElementById('task').value;
    if(item == ""){
        alert("değer giriniz")
        return
    }
    CreateItem(item);
}

function CreateItem(item){
    let li = document.createElement('li');
    let t = document.createTextNode(item);
    li.className='list-group-item';
    li.appendChild(t);
    list.appendChild(li);

    let span = document.createElement('span')
    let text = document.createTextNode('\u00D7');
    span.className='close';
    span.appendChild(text);
    li.appendChild(span);

    span.onclick = function(){
        let li = this.parentElement;
        li.style.display='none';
    }
}