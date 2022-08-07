// Error message Prompt

let errorMsg = document.querySelector("#errorMsg");

function setErrMsg(errMsg) {
    errorMsg.innerHTML = errMsg;
}

function removeErrMsg() {
    setErrMsg("");
}

let full_name = document.getElementById("full_name");
let email_address = document.getElementById("email_address");

full_name.addEventListener("blur", () => {
    if(full_name.value === "") {
        setErrMsg("Please Enter Your Full Name");
    }
    else if (full_name.value.length < 3) {
        setErrMsg("Full Name must contain more than 3 Characters.")
    }
    else {
        removeErrMsg();
    }
})

email_address.addEventListener("blur", () => {
    if (email_address.value === "") {
        setErrMsg("Please Enter Your Email Address");
    }
    else {
        removeErrMsg();
    }
})
