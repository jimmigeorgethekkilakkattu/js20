function getname()
{
   let name= prompt("enter your name");
   alert("hello "+name);

}
function changestyle()
{
    document.getElementById('p1').style.color="red";
    document.getElementById('p1').style.fontSize="20px";
}
function imagechange1()
{
    /*  usingstyle_display */
    /*  document.getElementById('p2').style.display="none"
    document.getElementById('p3').style.display="block" */
  /*  usingimg_src */
 // for getting the path
  //console.log(document.getElementById('p2').src)
  if(document.getElementById('p2').src=="file:///D:/vsc/images/img1.jpg")
{
  
 document.getElementById('p2').src="file:///D:/vsc/images/img2.jpg";
 }
 else 
 {   document.getElementById('p2').src="file:///D:/vsc/images/img1.jpg"
 }
}
//function imagechange2()
//{
   /*  usingstyle_display */
   /*  document.getElementById('p3').style.display="none"
    document.getElementById('p2').style.display="block"  */
//}
function onalert()
{
  let usrname=document.getElementById("username").value;
  alert("hey "+usrname+" welcome")
/*   document.getElementById("p4").innerText="this is saaaaammmple"
 */
document.getElementById("p4").innerHTML="this <br>is saaaaammmple"


} 