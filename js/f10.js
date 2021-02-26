function validate()
{
    let v1= document.getElementById("p1");
    let v2= document.getElementById("p2")
    let v3= document.getElementById("p3");
    let v4= document.getElementById("p4");

    if (p1.value=="")
    {
        alert("name cannot be empty");
        p1.focus();
        return false;
    }
    if (p2.value=="")
    {
        alert("email cannot be empty");
        p2.focus();
        return false;
    }
    if (p3.value=="")
    {
        alert("password cannot be empty");
        p3.focus();
        return false;
    }
    if (p4.value=="")
    {
        alert("mobilenumber cannot be empty");
        p4.focus();
        return false;
    }
    if (isNaN(p4.value)||p4.value.length!=10)
    {
        alert("enter valid mobile number");
        p4.focus();
        return false;
    }


}