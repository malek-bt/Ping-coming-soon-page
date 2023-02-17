
const validate = () => {
    const form = document.getElementById("form");
    const mail = document.querySelector(".email");

    const rgx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    form.addEventListener("submit",(e) => {
        e.preventDefault();

        if(mail.value.length === 0 || !mail.value.match(rgx) ){
            document.querySelector(".errorMsg").style.display = 'block';
            mail.style.border = "1px solid hsl(354, 100%, 66%)";
            document.getElementsByName('email')[0].placeholder = 'email@example/com';
            
        } else {
            document.querySelector(".errorMsg").style.display = 'none';
            mail.style.border = "";
            
        }

        
        
        
    });
    
    
}

