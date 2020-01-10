function newItem(){
    var count ; 
    var item = document.getElementById("input").value;
    var ul =  document.getElementById("list");
    var li = document.createElement("li");
    var count = document.querySelectorAll("#list > li").length;
    if(count%2==0){
        li.setAttribute("class","list-group-item list-group-item-action list-group-item-primary")
    }
    else{
        li.setAttribute("class","list-group-item list-group-item-action ")
    }        
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
    var c = document.getElementsByTagName("li").childNodes;
    
    document.getElementById("input").value = "";
    
    // li.onclick = removeItem;
}
document.onkeyup = function(e){
    if(e.keyCode == 13){
        newItem();
    }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);
// function removeItem(e){
//     e.target.parentElement.removeChild(e.target);
// }