document.querySelector("#login-container").addEventListener("submit", (e) => {
    e.preventDefault();
    clearMsg();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if (username === "new_user")
    {
        document.querySelector("#username").style = "border: 1px solid green;";
        document.querySelector("#crossed-username").style.display = "none";
        document.querySelector("#checked-username").style.display = "flex";
        
        if (password === "123456789") {
            document.querySelector("#password").style = "border: 1px solid green;";
            document.querySelector("#crossed-password").style.display = "none";
            document.querySelector("#checked-password").style.display = "flex";

            let newMsg = getMsg() || "";
            newMsg += "<br>* Login successfull!"
            displayMsg(newMsg);
        }
        else
        {
            document.querySelector("#password").style = "border: 1px solid red;";
            document.querySelector("#checked-password").style.display = "none";
            document.querySelector("#crossed-password").style.display = "flex";

            let newMsg = getMsg() || "";
            newMsg += "<br>* Please enter valid password."
            displayMsg(newMsg);
        }
    }
    else
    {
        document.querySelector("#username").style = "border: 1px solid red;";
        document.querySelector("#checked-username").style.display = "none";
        document.querySelector("#crossed-username").style.display = "flex";

        let newMsg = getMsg() || "";
        newMsg += "<br>* Please enter valid username."
        displayMsg(newMsg);

        if (password === "123456789") {
            document.querySelector("#password").style = "border: 1px solid green;";
            document.querySelector("#crossed-password").style.display = "none";
            document.querySelector("#checked-password").style.display = "flex";
        }
        else
        {
            document.querySelector("#password").style = "border: 1px solid red;";
            document.querySelector("#checked-password").style.display = "none";
            document.querySelector("#crossed-password").style.display = "flex";
            
            let newMsg = getMsg() || "";
            newMsg += "<br>* Please enter valid password."
            displayMsg(newMsg);  
        }
    }
});


function clearMsg()
{
    document.querySelector("#output").innerHTML = "";
}

function displayMsg(msg)
{
    document.querySelector("#output").innerHTML = msg;
}


function getMsg()
{
    return document.querySelector("#output").innerHTML;
}