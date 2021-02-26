let arr=[];
let dolist;
let list;
let icon1;
let icon2;
function add()
{
    
   dolist=document.getElementById('p1').value;
  arr.push(dolist);
  

  for(element of arr){
    list= document.createElement("li");
    list.innerText=element;
    
    icon1= document.createElement("i");
   icon1.innerHTML='<button> <i class="bi bi-file-earmark-x"></i></button>';
   
   icon2 =document.createElement("i");
   icon2.innerHTML='<button><i class="bi bi-arrow-right-square-fill"></i></button>';
    
  

  }
  console.log(arr);
  document.getElementById('p2').appendChild(list);
  document.getElementById('p2').appendChild(icon1);
  document.getElementById('p2').appendChild(icon2);
  
}
 function remove()
{
  for(element of arr)
{
  if (list.innerText=element)
  {
    document.getElementById('p2').removeChild(list);
    document.getElementById('p2').removeChild(icon1);
    document.getElementById('p2').removeChild(icon2);
  }
} 
} 