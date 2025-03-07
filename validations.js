var a=0;
function mouseOver(){
    const name = document.forms['suform']['name'].value;
    const email = document.forms['suform']['email'].value;
    const role = document.forms['suform']['dropdown'].value;
    const emailcheck = "[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}";
    document.getElementById('submit').style.border = "2px solid #37af65";
    //document.getElementById('submit').style.boxShadow = "0px -1px 10px 5px #37af65";

    if(name == "" || !email.match(emailcheck) || role == "" && a==0){
        //change button color to red
        document.getElementById('submit').style.background = "url(./Asserts/Images/cracks.png)";
        document.getElementById('submit').style.backgroundSize = "cover";
        //document.getElementById('submit').style.boxShadow= "0px -1px 1px 3px rgb(136, 8, 8)";
        //border
        document.getElementById('submit').style.border = "2px solid rgb(136, 8, 8)";
        document.getElementById('submit').style.color = "transparent";
        a=1;
    }
    else{
        return true;
    }
}

function resetBtn(){
    document.getElementById('submit').style.background = "url(./Asserts/Images/nocracks.png)";
    document.getElementById('submit').style.boxShadow= "none";
    document.getElementById('submit').style.color = "white";
    document.getElementById('submit').style.border = "2px solid #37af65";

    a=0;
}