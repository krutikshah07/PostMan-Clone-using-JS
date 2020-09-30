let parameterBox = document.getElementById("parametersbox")
parameterBox.style.display = 'none'



let param = document.getElementById("param")
param.addEventListener('click', ()=>{
    document.getElementById('requestjson').style.display = 'none'
    document.getElementById('parametersbox').style.display = 'block'
})






let json = document.getElementById("json")
json.addEventListener('click', ()=>{
    document.getElementById('parametersbox').style.display = 'none'
    document.getElementById('requestjson').style.display = 'block'
})


let added =0


function getElementFromString(s){
    let div = document.createElement('div')
    div.innerHTML = s
    return div.firstElementChild  
}

let add =document.getElementById('add')
add.addEventListener('click',()=>{
    console.log("Added")
    let params = document.getElementById('params')
   let s =  ` 
    <div class="form-row my-3">
    <label for="url" class="col-sm-2 col-form-label">Enter the Parameter</label>
     <div class="col">
    <input type="text" id="pak${added+2}" class="form-control" placeholder="Enter Parameter ${added+2} Key">
</div>
<div class="col">
    <input type="text" id="pav${added+2}" class="form-control" placeholder="Enter Parameter ${added+2} Value">
</div>
<button   class="btn btn-primary delete1">-</button>
</div>`
let paramElement =getElementFromString(s)
params.appendChild(paramElement)

let delete1 = document.getElementsByClassName('delete1')
for (item of  delete1){
    item.addEventListener('click',(e)=>{
        e.target.parentElement.remove();

    })

}


added++

 
})





let b1 = document.getElementById("b1")
b1.addEventListener('click',()=>{
    let response =document.getElementById('response')
    response.innerText ="Please Wait........"

    let url = document.getElementById("url").value
    let request = document.querySelector("input[name='gridRadios']:checked").value;

    let content = document.querySelector("input[name='gridRadios1']:checked").value ;
   

    if(content == 'params')
    {
        data = {}
        for(let i=0;i< added+1;i++)
        {   
            if(document.getElementById('pak' + (i+1)) != undefined)
            {

           
            let key =document.getElementById('pak' + (i+1)).value
           

            let values1 =document.getElementById('pav' + (i+1)).value
            data[key] =values1
            }
       
        }
         data = JSON.stringify(data)
  
}
else{
    data =document.getElementById('requestjsonText').value

}


console.log(data)
console.log(url,request,content)
if(request == 'GET')
{
    fetch(url,{
        method: 'GET',

    })     
    .then(response=> response.text())
    .then((text)=>{
        document.getElementById('response').value = text
    });
}

else
{
    fetch(url,{
        method: 'POST',
        body : data,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }

    })
    .then(response=> response.text())
    .then((text)=>{
        document.getElementById('response').value = text
    });

}
})