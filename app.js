// CHAPTER 1
 
// task2
// alert("Error! Please enter a valid password.");
// task3
// alert("Welcome to JS Land... \n Happy Coding!");
// task4
// alert("Welcome to JS Land...");
// task5
// alert("Happy Coding!");

// chapter2

// //task1
// var username;
// //task2
// var myName = "Adnan Musil";
// //task3
// var message = "Hello World";
// alert(message);

// //task4
// var name = "Jhone Doe";
// var age = "15 years old";
// var qualification = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(qualification);

// //task5
// var pizza = "PIZZA" + "\n" + "PIZZ" + "\n" + "PIZ" + "\n" + "PI" + "\n" + "P";
// alert(pizza);

// //task6
// var email = "adnan.museel123@gmail.com";
// alert("hey email address is " + email);

// //task7
// var book = "A smarter way to learn Javascript";
// alert("I am trying to learn from the book "+book);

// //task8
// document.write("Yah! I can write HTML content through Javascript");

// //task9
// var x = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(x);
// document.write(x);


// // chapter 3

// // task1
// var age = 20;
// alert("I am "+age+" years old");

// // task2
// var visit = 14;
// alert("you have visited this site "+visit+" times");

// // task3
// var birth = 1999;
// document.write("My birth year is " + birth + "<br>" + " Data type of my declared variable is number"+"<br>");

// //task4
// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)";
// var quantity = 5;
// document.write(visitorName+" ordered "+quantity+" "+productTitle+" on XYZ clothing store");



// // chapter 4

// // task1
// var firstVar,secondVar,thirdVar;

// // task2
// //legal var

// // var mail,mail123,mail$,mail_done,mailSent;

// //illegal
// // var 123hello,hello world,for,{hell world},hell-world;

// // task3

// document.write("Variables name can only contain , numbers,$ and _.For example:$my_1stVariable"+"<br>"+
//                "Variable must begin with a letter,$ or _.For example: $name,_name or name "+"<br>"+
//                "Variable names are case sensitive"+"<br>"+
//                "Variable names should not be JS keyword");


// // chapter 5

// // task1
// var num1 = 3;
// var num2 = 5;
// var add = num1 + num2;
// document.write("Sum of 3 and 5 is "+add + "<br> ");

// //task2

// var sub = num1-num2;
// var mul = num1*num2;
// var div = num1/num2;
// var mod = num1%num2;

// document.write("subtraction "+sub+"<br> "+"Multiplication "+mul+"<br> "+"division "+div+"<br> "+"modulus "+mod+"<br> ");

// // task3

// var num;
// document.write("value after variable declaration is "+num+"<br>");
// num = 5;
// document.write("initial value: "+num+"<br>");
// num++;
// document.write("value after incriment is: "+num+"<br> ");
// num = num+7;
// document.write("value after addition is: "+num+"<br> ");
// num--;
// document.write("value after decrement is: "+num+"<br> ");
// num = num%3;
// document.write("The remainder is: "+num+"<br>");

// // task4
// var cost = 600;
// document.write("The cost to buy 5 tickets to a movie is: "+cost*5+"PKR "+"<br>");

// // task5

// var table = 4;
// document.write("Table of "+table+"<br>");
// document.write(table+"* "+"1 "+"= "+table*1+"<br>");
// document.write(table+"* "+"2 "+"= "+table*2+"<br>");
// document.write(table+"* "+"3 "+"= "+table*3+"<br>");
// document.write(table+"* "+"4 "+"= "+table*4+"<br>");
// document.write(table+"* "+"5 "+"= "+table*5+"<br>");
// document.write(table+"* "+"6 "+"= "+table*6+"<br>");
// document.write(table+"* "+"7 "+"= "+table*7+"<br>");
// document.write(table+"* "+"8 "+"= "+table*8+"<br>");
// document.write(table+"* "+"9 "+"= "+table*9+"<br>");
// document.write(table+"* "+"10 "+"= "+table*10+"<br>");

// // task6

// var cel = 32;
// var convert_Fahrenheit = (cel * 9/5)+32;
// document.write(cel+"'C is "+convert_Fahrenheit+" 'F"+"<br>");


// var fah = 56;
// var convert_celsius = (fah - 32) * 9/5;
// document.write(fah+"'F is "+convert_celsius+" 'C"+"<br>");

// // task7
// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCharges = 100;

// var item1 = priceItem1 * quantityItem1;
// var item2 = priceItem2 * quantityItem2;
// var total = item1+item2+shippingCharges;

// document.write("SHOPPING CART"+"<br>");
// document.write("price of item 1 is: "+priceItem1+"<br>");
// document.write("quantity of item 1 is: "+quantityItem1+"<br>");
// document.write("price of item 2 is: "+priceItem2+"<br>");
// document.write("quantity of item 1 is: "+quantityItem1+"<br>");
// document.write("shipping charges: "+shippingCharges+"<br>");
// document.write("Total cost of your order is: "+total+"<br>");

// // task8

// document.write("MARKS SHEET"+"<br>");
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks*100) / totalMarks; 
// document.write("Total marks: "+totalMarks+"<br>");
// document.write("Marks obtained: "+obtainedMarks+"<br>");
// document.write("Percentage: "+percentage+"<br>");

// // task9
// document.write("CURRENCY IN PKR "+"<br>");

// var usDollarPkr = 104.80;
// var saudiRyalPkr = 28;
// var totalRupees = (10*usDollarPkr) + (25*saudiRyalPkr);
// document.write("Total currency in PKR: "+totalRupees+"<br>");

// // task10
// var cal = 10;
// cal = cal+5;
// cal = cal*10;
// cal = cal/2;
// document.write("ANS: "+cal+"<br>");

// // task11
//  document.write("AGE CALCULATOR"+"<br>");   
//  var currentYear = 2016;
//  var birthYear = 1992;
//  var yourAge = currentYear - birthYear;
//  document.write("current year: "+currentYear+"<br>"+
//                 "birth year: "+birthYear+"<br>"+
//                  "your age: "+yourAge+"<br>");
                 
// //  task12

// document.write("THE GEOMETRIZER"+"<br>");
// var radius = 20;
// var circumference = 2*3.142*radius;
// var area = 3.142*(radius*radius);
// document.write("radius of a circle: "+radius+"<br>");
// document.write("circumference of a circle: "+circumference+"<br>");
// document.write("area of a circle: "+area+"<br>");

// // task13
// document.write("THE LIFETIME SUPPLY CALCULATOR"+"<br>");
// var snack = "wavy";
// var currentAge = 20;
// var maxAge = 65;
// var snackPerDay = 3;
// var eatTotal = (maxAge - currentAge) * 3;
// document.write("favourite snack "+snack+"<br>"+"current age "+currentAge+"<br>"+"estimated maximum age "+maxAge+"<br>"+"amount of snacks per day "+snackPerDay+"<br>");
// document.write("you will need "+eatTotal+" wavy to last you until the ripe old age of "+maxAge+"<br>");


// // chapter 6-9

// // task1
// var a = 10;
// document.write("The value of ++a is: "+ ++a +"<br>");
// document.write("now the value of a is: "+ a + "<br>");

// document.write("The value of a++ is: "+ a++ + "<br>");
// document.write("now the value of a is: "+ a +"<br>");

// document.write("The value of --a is: "+ --a +"<br>");
// document.write("now the value of a is: "+ a + "<br>");

// document.write("The value of a-- is: "+ a-- +"<br>");
// document.write("now the value of a is: "+ a + "<br>");


// // task2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--; 
// //--a; 1
// //--a - --b; 1-0 = 1
// //--a - --b + ++b; 1-0+1 = 2
// //--a - --b + ++b + b--; 1-0+1+1 = 3
// document.write("The value of result: "+ result + "<br>");//3
// document.write("The value of a: "+a+"<br>");//1
// document.write("The value of b: "+b+"<br>");//0

// // task3

// var user = prompt("Enter your name");
// alert("Welcome "+user);

// //task4 //missing question

// //task5
// var five = 5;
// var table = prompt("enter number",five);
// document.write("Table of "+table+"<br>");
// document.write(table+"* "+"1 "+"= "+table*1+"<br>");
// document.write(table+"* "+"2 "+"= "+table*2+"<br>");
// document.write(table+"* "+"3 "+"= "+table*3+"<br>");
// document.write(table+"* "+"4 "+"= "+table*4+"<br>");
// document.write(table+"* "+"5 "+"= "+table*5+"<br>");
// document.write(table+"* "+"6 "+"= "+table*6+"<br>");
// document.write(table+"* "+"7 "+"= "+table*7+"<br>");
// document.write(table+"* "+"8 "+"= "+table*8+"<br>");
// document.write(table+"* "+"9 "+"= "+table*9+"<br>");
// document.write(table+"* "+"10 "+"= "+table*10+"<br>");


// // task6

//     var sub1 = prompt("Enter first subject name");
//     var sub2 = prompt("Enter second subject name");
//     var sub3 = prompt("Enter third subject name");
//     var marksTotal = 100;
//     var sub1Marks = Number(prompt("Enter obtained marks of "+sub1))
//     var sub2Marks = Number(prompt("Enter obtained marks of "+sub2))
//     var sub3Marks = Number(prompt("Enter obtained marks of "+sub3))
//     var sub1Percentage = (sub1Marks * 100) / marksTotal;
//     var sub2Percentage = (sub2Marks * 100) / marksTotal;
//     var sub3Percentage = (sub3Marks * 100) / marksTotal; 

//     var totalAdd = 300;
//     var obtainedAdd = sub1Marks + sub2Marks + sub3Marks;
//     var totalPercentage = (obtainedAdd * 100)/totalAdd;

//     document.write("Subject"+" "+"Total Marks"+" "+"Obtained Marks"+" "+"Percentage"+"<br>");
//     document.write(sub1+"--------"+marksTotal+"-----------"+sub1Marks+"-----------------------"+sub1Percentage+"%"+"<br>");
//     document.write(sub2+"--------"+marksTotal+"-----------"+sub2Marks+"-----------------------"+sub2Percentage+"%"+"<br>");
//     document.write(sub3+"--------"+marksTotal+"-----------"+sub3Marks+"------------------------"+sub3Percentage+"%"+"<br>");
//     document.write("Total"+"--------"+totalAdd+"-----------"+obtainedAdd+"----------------------"+totalPercentage+"%"+"<br>");
   

// // chapter 9-11

// // task1

// var city = prompt("Enter your city");
// if(city == "Karachi"){

//     alert("Welcome to the city of lights");
// }

// // task2
// var gender = prompt("Enter your gender");
// if(gender == "male"){
//     alert("Good morning sir");
// }
// else if(gender == "female"){
//     alert("Good morning Ma'am");
// }
// else{
//     alert("Enter your gender")
// }

// //task3
// var signalColour = prompt("Enter signal colour");
// if(signalColour == "Red"){
//     alert("Must Stop");
// }
// else if(signalColour == "Yellow"){
//     alert("Ready to move");
// }
// else if(signalColour == "Green"){
//     alert("Move Now");
// }


// // task4
// var fuel = Number(prompt("Enter your fuel in litres"));
// if(fuel < 0.25){
//     alert("Please refil the fuel in your car");
// }
// else{
//     alert("Okay");
// }

// //task5
// //a
// var a = 4;
// if(++a === 5){
//     alert("given condition for a variable a is true");
// }
// else{
//     alert("false")
// }

// //b
// var b = 82;
// if(b++ === 83){
//     alert("given conditon for a variable b is true")
// }
// else{
//     alert("false")
// }

// //c
// var c = 12;
// if(c++ === 13){
//     alert("condition 1 is true");
// }
// if(c === 13){
//     alert("condtion 2 is true");
// }
// if(++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// //d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if(totalCost == laborCost + materialCost){
//     alert("The cost equals")
// }
// else{
//     alert("Not equal")
// }


// //e
// if(true){
//     alert("True");
// }
// if(false){
//     alert("False");
// }

// //f
// if("car" < "cat"){
//     alert("car is less than cat");
// }


// // task6

// document.write("Marks Sheet"+"<br>");

// var subject1Marks = Number(prompt("Enter subject 1 marks"));
// var subject2Marks = Number(prompt("Enter subject 2 marks"));
// var subject3Marks = Number(prompt("Enter subject 3 marks"));
// var marksTotal = 300;
// var subjectsTotal = subject1Marks + subject2Marks + subject3Marks;
// var percent = (subjectsTotal * 100) / marksTotal;

// if(percent >= 80){
//     document.write("Total Marks: "+marksTotal+"<br>");
//     document.write("Marks obtained: "+subjectsTotal+"<br>");
//     document.write("Percentage: "+percent+"%"+"<br>");
//     document.write("Grade: A-one"+"<br>");
//     document.write("Remarks: Excellent"+"<br>");
// }
// else if(percent >= 70){
//     document.write("Total Marks: "+marksTotal+"<br>");
//     document.write("Marks obtained: "+subjectsTotal+"<br>");
//     document.write("Percentage: "+percent+"%"+"<br>");
//     document.write("Grade: A"+"<br>");
//     document.write("Remarks: Good"+"<br>");
// }
// else if(percent >= 60){
//     document.write("Total Marks: "+marksTotal+"<br>");
//     document.write("Marks obtained: "+subjectsTotal+"<br>");
//     document.write("Percentage: "+percent+"%"+"<br>");
//     document.write("Grade: B"+"<br>");
//     document.write("Remarks: You need to improve"+"<br>");
// }
// else if(percent < 60){
//     document.write("Total Marks: "+marksTotal+"<br>");
//     document.write("Marks obtained: "+subjectsTotal+"<br>");
//     document.write("Percentage: "+percent+"%"+"<br>");
//     document.write("Grade: Fail"+"<br>");
//     document.write("Remarks: Sorry"+"<br>");
// }

// // task 7

// var secretNum = 4;
// var userNum = Number(prompt("Guess the secret number between 1-10"));
// if(secretNum === userNum){
//     alert("Bingo! correct answer");
// }
// else if(userNum === 3){
//     alert("close enough to the correct answer")
// }


// // task 8

// var divisibleBy3 = 9;
// if(divisibleBy3 % 3 === 0){
//     alert("Number is divisible by 3")
// }
// else{
//     alert("not divisible by 3")
// }

// // task 9 

// var userInput = Number(prompt("enter number"));
// if(userInput % 2 === 0){
//     alert("even");
// }
// else if(userInput % 2 !== 0){
//     alert("odd");
// }
// else{
//     alert("enter correct number")
// }

// // task 10

// var temperature = prompt("Enter temperature");
// if(temperature > 40){
//     alert("It is too hot outside")
// }
// else if(temperature > 30){
//     alert("The weather today is normal")
// }
// else if(temperature > 20){
//     alert("Today's weather is cool");
// }
// else if(temperature > 10){
//     alert("OMG! Today's weather is so cool")
// }
// else{
//     alert("enter temperature")
// }

// // task 11

// var firstNum = Number(prompt("Enter first number"));
// var secondNum = Number(prompt("Enter second number"));
// var operator =  prompt("Enter operator","+,-,*,/,%");

// if(operator === "+"){
//     document.write(firstNum + "+" + secondNum + "=" + (firstNum+secondNum));

// }
// if(operator === "-"){
//     document.write(firstNum + "-" + secondNum + "=" + (firstNum-secondNum));

// }
// if(operator === "*"){
//     document.write(firstNum + "*" + secondNum + "=" + (firstNum*secondNum));

// }
// if(operator === "/"){
//     document.write(firstNum + "/" + secondNum + "=" + (firstNum/secondNum));

// }
// if(operator === "%"){
//     document.write(firstNum + "%" + secondNum + "=" + (firstNum%secondNum));

// }