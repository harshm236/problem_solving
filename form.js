const exe = ()  =>
{ 

let name = document.getElementById('name').value,
    email = document.getElementById('email'),
    number= document.getElementById('number'),
    DOB = document.getElementById('DOB') ,
    form1 = document.getElementById('form1')
if(email.value.split("@")[1] == 'prepbytes.com')
 {
  email.style.color = 'green'
 }
 else
 {
  email.style.color = 'red'
  alert('email doamin should be @prepbytes.com')
 }
 if(number.value.length == 10 && number.value.slice(0,2) == '91')
 {
  number.style.color='green'
 }
 else
 {
  alert('number should start with 91')
 }
 if(DOB.value.split('-')[0] >=1995)
 {
  DOB.style.color='green'
 }
 else
 {
  DOB.style.color='red'
  alert('DOB should be greater than 1995')
 }
 


}