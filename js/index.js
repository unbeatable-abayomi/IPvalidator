const validator = document.querySelector("#validator");
const show_validity = document.querySelector("#show_validity");

console.log(validator)
console.log(show_validity)




validator.addEventListener('keyup', validate_IP);



function validate_IP (e) {

   // const  regexValidate_IP = /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/
   const  regexValidate_IP = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
   let pattern = new RegExp(regexValidate_IP, "i");
   let newIpAddress = e.target.value;
   console.log(e.target.value)
   console.log(pattern.test(newIpAddress))
  if(pattern.test(newIpAddress)){
   validator.style.borderColor = "green"
   validator.style.border = "6px solid green"
   show_validity.style.color  =   'green'; 
   // show_validity.style.fontSize = '30px';
   show_validity.innerHTML  = "<h2>I.P Address is a valid one</h2>";
  }else{
   validator.style.borderColor = "red"
   validator.style.border = "6px solid red"
   show_validity.style.color  =   'red'; 
   // show_validity.style.fontSize = '30px';
   show_validity.innerHTML  = "<h2>I.P Address is not a valid one</h2>";
  }
    
}


// 0.0.0.0 | 255.255.255.02 | 192.168.0.136
// Non-Matches	
// 256.1.3.4 | 023.44.33.22 | 10.57.98.23.