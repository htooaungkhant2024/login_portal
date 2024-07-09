const reg_email = "stefan@gmail.com";
const reg_pw = "P@$$w0rd123"

function login(e){
    e.preventDefault();

    let email = e.target[0].value;
    let pw = e.target[1].value;

    if(email && pw){
        if (email === reg_email && pw === reg_pw){
            document.querySelector("#success").innerHTML = "Successfully Login";
            document.querySelector(".container").style.display = "none";
        }
        else if (email !== reg_email && pw === reg_pw){
            document.querySelector("#error").innerHTML = "Your email is incorrect";
        }
        else if (email === reg_email && pw !== reg_pw){
            document.querySelector("#error").innerHTML = "Your password is incorrect";
        }
        else{
            document.querySelector("#error").innerHTML = "Email is not found in database";
        }

    }
    else{
        document.querySelector("#error").innerHTML = "Please Fill Out Your Correct Data!";
    }

}
