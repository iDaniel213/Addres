function render(){
    document.getElementById('nevjegyzek').innerHTML=''
    for(let obj of ismerosok){
        let li = document.createElement("li")
    li.classList.add("d-flex")
    li.innerHTML=`<span id="${obj.id}" onclick="reszlet(this)">${obj.nev}</span><br>
    <div class="btn btn-danger rounded" onclick="del(this)">
    <i class="fa-solid fa-x onclick=del()"></i>
    </div>`
    let x=`<i id="${obj.id}"></i>` 
    li.innerHTML+=x
    document.getElementById('nevjegyzek').appendChild(li)
    }
}
render()
 
function add(){
    let nev = document.getElementById('nev').value
    let szuletes = document.getElementById('szuletes').value
    let kapcsolat = document.getElementById('kapcsolat').value
    let tel = document.getElementById('tel').value
    let maxId=ismerosok.reduce((m,obj)=>obj.id>m ? obj.id : m , 0)
    console.log(maxId +' maxId')
    let obj={}
    obj.id=maxId+1
    obj.nev=nev
    obj.szuletes=szuletes
    obj.kapcsolat=kapcsolat
    obj.tel=tel
    ismerosok.push(obj)
    document.getElementById('nevjegyzek').innerHTML=''
    render()
 
}
 
function reszlet(obj){
    console.log(obj.id)
    let tomb = ismerosok.filter(o=>o.id==obj.id)
    console.log(tomb[0])
    document.querySelector('.card-title').innerHTML=tomb[0].nev
    document.querySelector('.card-text').innerHTML=`Telefonszám: ${tomb[0].tel}<br> Születési év: ${tomb[0].szuletes}<br> Kapcsolat: ${tomb[0].kapcsolat}`
 
}

function del(obj){
    console.log(obj)
    console.log(obj.previousElementSibling.previousElementSibling.id)
    let torlendo=obj.previousElementSibling.previousElementSibling.id
    ismerosok=ismerosok.filter(b=>b.id!=torlendo)
    console.log(ismerosok)
    render()
}

