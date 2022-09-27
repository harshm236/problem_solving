1.Write the code to access element which is having id as "text"
ans
let x = document.getElementById('text')

2.Write the code to access element which is having tag as "h1"
ans
let x = document.getElementsByTagName('h1')

3.Write the code to access element which is having class as "box"
ans
let x = document.getElementsByClassName('box')

4."<h1>Hello </h1>

Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
ans

let h1= document.getElementsByTagName('h1')[0]
h1.innerText='Hello World'

5.Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
ans

https://harshm236.github.io/problem_solving/card.html

6.What’s the difference between window vs document?
The window is the actual global object. The screen is the screen, it contains properties about the user's display. The document is where the DOM is.


7."<h1>Hello </h1>

Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
ans

let x = document.getElementsByTagName('h1')[0]

x.style.color='red'
x.innerText='hello hello'
x.id='heading'

8.Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
ans 

https://harshm236.github.io/problem_solving/hello.html

9.Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
ans 

function time(){
let x = new Date()

document.getElementById('HH')=  x.getHours()
document.getElementById('MM')=  x.getMinutes()
document.getElementById('SS')=  x.getSeconds()
}
setInterval(time,1000)

10.Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

<select>
    <option>2020-2021</option>
    <option>2021-2022</option>
</select>

let x = document.getElementsByTagName('select')[0]
console.log(x.value)

11."Create a form having name ,email, phone no. , birth year 
Add validations - phone no. should start with 91 , it should be 10 digits
email should be domain prepbytes.com
birth year should be > 95"
 ans 

 https://harshm236.github.io/problem_solving/form.html

 
