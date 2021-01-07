// Chapter 1 Alerts Start

// Answer No 1
// var hello = "Welcome User";
// alert(hello);
// End

// Answer No 2
// var a = "Error! Please enter a valid password";
// alert(a);
// End

// Answer No 3
// var b = "Welcome to Js Land...\nHappy codding";
// alert(b);
// End

// Answer No 4
// var c = "Welcome to Js Land...";
// alert(c);

// var d = "Happy Coding!";
// alert(d);

// End

// Answer No 5
// var e = "Hello.. I can run JS through my web browser's console";
// console.log(e);
// End

// Chapter 1 Alert end


// Chapter 2 Variable for strings

// Answer No 1 to 4
// var username = "Mshoaib";
// var myname ="Muhammad Shoaib";
// var titlemessage = "Hello world";
// alert(titlemessage);
// End

// Answer No 1 to 4
// var studentname = "Ali";
// var studentage = "15 years old";
// var studenteducation = "Web and mobile app developer";
// alert(studentname);
// alert(studentage);
// alert(studenteducation);
// End


// Answer No 5
// var f = "Pizza\nPizz\nPiz\nPi\nP";
// alert(f);
// End

// Answer No 6
// var emailtext = "My email address is";
// var emailaddress = "example@example.com";
// alert(emailtext+" "+emailaddress);
// End

// Answer No 7
// var book = "A smarter\n way to learn javascript " ;
// alert("I am trying to learn from the book" +" "+book);
// End

// Answer No 8
// document.write("Yeah! I can  write Html content through Javascript ");
// 

// Answer No 9
// var g = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(g);
// End


// Chapter 2 end


// Chapter 3 Variable for number

// Answer No 1
// var age = "21";
// alert ("I am"+" "+age+" "+"years old");
// End

// Answer 2 can't solve its not possilbe at this stage

// Answer 3 
// var birthyear = 1990;
// document.write("My birth year is" +" "+ birthyear +" "+"<br/>"+" "+"Data type of my declared variable is number<br/>");
// End

// Answer No 4
// var mystore = "xyz clothing store";
// var visitorname = "Ali";
// var producttitle = "shoes";
// var productquantity = "10";
// document.write(visitorname +" "+ "ordered" +" "+productquantity +" "+producttitle +" "+ "on" +" "+ mystore);
// end


// chapter 3 end


// Chapter 4 start

// Answer No 1
// var g=10,f=20,h=30;
// document.write(g+""+f+""+h+""+"<br/>");

// Answer No 2

// 5 legal variable
// var $="lega";
// var _h="legal";
// var name="legal";
// var NAME ="legal";
// var _$s1="legal";

// 5 ilegal variable
// var var="ilegal";
// var alert = "ilegal";
// var 123 = "ilegal";
// var 1heu = "ilegal";
// var %h1="ilegal";

// End

// Answer No 3
// document.write("<h2>Rules for Naming Js Varaible </h2><br/>")
// var numbers ="numbers,";
// var $name = "$";
// var underscore = "_";
// var example = ".for example:$my_1stVariable";
// document.write("Variable names can only contain"+" "+numbers+" "+$name+" "+"and"+" "+underscore+" "+example+" "+"<br/>");
// document.write("variable name must begin with a letter,$ or .for example : $name, name or name <br/>");
// document.write("Variable names are case sensitive<br/>")
// document.write("Variable names should not be JS keywords")
// End

// chapter 4 end



// Chapter 5 start

// Answer No 1 and 2
// For addition
// var a = +prompt("Enter first number for addition");
// var b = +prompt("Enter second number for addition");
// var c = a+b;
// document.write("Sum of first and second number is"+" "+c+""+"<br/>");


// for subtraction

// var a = +prompt("Enter first number for subtraction");
// var b = +prompt("Enter second number for subtraction");
// var c = a-b;
// document.write("Subtraction of first and second number is"+" "+c +""+"<br/>");

// for multiply

// var a = +prompt("Enter first number for multiplication");
// var b = +prompt("Enter second number for multiplication");
// var c = a*b;
// document.write("Multiplication of first and second number is"+" "+c +""+"<br/>");

// for Division


// var a = +prompt("Enter first number for Division");
// var b = +prompt("Enter second number for Division");
// var c = a/b;
// document.write("Division of first and second number is"+" "+c +""+"<br/>");

// Modulus

// var a = +prompt("Enter first number for modulus");
// var b = +prompt("Enter second number for modulus");
// var c = a%b;
// document.write("Modulus of first and second number is"+" "+c +""+"<br/>");

// End

// Answer No 3
// var a ;
// document.write("Value after variable declaration is undefined <br/>");
// var a = 10;
// document.write("Value after initialization of variable is"+" "+a+" "+"<br/>");
// var a = ++a;
// document.write("Value after increment of variable is"+" "+a+" "+"<br/>");
// var a = a+7;
// document.write("Value after addition of 7 is"+" "+a+" "+"<br/>");
// var a=--a;
// document.write("Value after decremenmt of variable is"+" "+a+" "+"<br/>");
// var a = a%3;
// document.write("Value after reminder of variable is"+" "+a+" "+"<br/>");
// End

// Answer No 4
// var oneticket=600;
// var groupofticket=oneticket*5;
// document.write("Total cost of buy 5 tickets to a movie is"+" "+groupofticket);
// End


// Answer No 5
// document.write("Table of 4 <br/>");
// document.write("4x 1 = 4 <br/>");
// document.write("4x 2 = 8 <br/>");
// document.write("4x 3 = 12 <br/>");
// document.write("4x 4 = 16 <br/>");
// document.write("4x 5 = 20 <br/>");
// document.write("4x 6 = 24 <br/>");
// document.write("4x 7 = 28 <br/>");
// document.write("4x 8 = 32 <br/>");
// document.write("4x 9 = 36 <br/>");
// document.write("4x 10 = 40 ");
// End

// Answer No 6
// var  Celsiustemperature = "°C";
// var Fahrenheit = "°F";
// var userinput=+prompt("Enter  celsius value for conversion");
// var userinput2=+prompt("Enter fahrenhiet value for conversion");
// var result = (userinput2-32)*5/9;
// var result2 =(userinput*9/5)+32;
// document.write(userinput+" "+Celsiustemperature+" "+"is"+" "+result2+" "+Fahrenheit+" "+"<br/>");
// document.write(userinput2+" "+Fahrenheit+" "+"is"+" "+result+" "+Celsiustemperature);
// End

// Answer No 7
// Shoping cart
// var item1price = +prompt("Enter item1 price");
// var item2price = +prompt("Enter item2 price");
// var quantity = +prompt("Enter quantity for item 1");
// var quantity2 = +prompt("Enter quantity for item 2");
// var charges = 100;
// var multiply = item1price*quantity;
// var multiply2 = item2price*quantity2;
// var totalcost = (multiply+multiply2+charges);
// document.write("Price of item 1 is"+" "+item1price+" "+"<br/>");
// document.write("Price of item 2 is"+" "+item2price+" "+"<br/>");
// document.write("Quantity of item1 is"+" "+quantity+" "+"<br/>");
// document.write("Quantity of item2 is"+" "+quantity2+" "+"<br/>");
// document.write("Shiping charges"+" "+charges+" "+"<br/>");
// document.write("Total cost of your order is"+" "+totalcost);
// End

// Answer No 8
// Marksheet
// var Totalmarks = +prompt("Enter student total marks");
// var Obtainmarks = +prompt("Enter student obtain marks");
// result = (Obtainmarks/Totalmarks)*100;
// document.write("Total Mark is"+" "+Totalmarks+" "+"<br/>");
// document.write("Obtain Mark is"+" "+Obtainmarks+" "+"<br/>");
// document.write("Your Percentage is"+" "+result+""+"%");
// End


// Answer No 9
// Currency
// var dollar = +prompt("Enter Us dollar");
// var Riyal = +prompt ("Enter Saudi Riyal");
// var Total = (104.80*dollar)+(28*Riyal);
// document.write("<h1>Currency in PKR</h1><br/>");
// document.write("Your Dollar amount is" +" "+dollar+""+"$"+""+"<br/>");
// document.write("Your Riyal amount is" +" "+Riyal+" "+" ﷼‎"+" "+"<br/>");
// document.write("Total Currency in Pkr is"+" "+Total);
// End

// Answer No 10
// Add Multiply and divide
// var number = 5;
// var final = (number+5)*10/2;
// document.write(final);
// End


// Answer No 11
// Age Calculator
// var birthyear =+prompt("Enter you birthyear");
// var currentyear = 2021;
// var age= currentyear-birthyear;
// document.write("Current year is"+" "+currentyear+" "+"<br/>");
// document.write("Birth year is "+" "+birthyear+" "+"<br/>");
// document.write("Your age is"+" "+age);
// End

// Answer No 12
// Radius of circle
// var radius = +prompt("Enter circle radius");
// var c = 2*3.142*radius;
// var a = 3.142*radius*2;
// document.write("Radius of circle is "+" "+radius+" "+"<br/>");
// document.write("circumference of circle is"+" "+c+" "+"<br/>");
// document.write("Area of circle is" +" "+a);
// End


// Answer No 13
// The life time supply calculator
// var snack = prompt("Enter Your favourite snack name");
// var yourage = +prompt("Enter your age");
// var maxage = +prompt("Enter your max age");
// var perday = +prompt("enter estimated amount of snack pr day");
// var snackresult = (maxage-yourage)*perday;   
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("Favourite Snack:"+" "+snack+""+"<br/>");
// document.write("Current age"+" "+yourage+""+"<br/>");
// document.write("Estimated max age is" +" "+maxage+" "+"<br/>");
// document.write("Amount of snack perday is" +" "+perday+""+"<br/>");
// document.write("You will need"+" "+snackresult+" "+snack+" "+"to last day until you ripe old age of"+" "+maxage);
// End
// chapter 5 end


// Chapter 06 Start
// Answer 01
// var a = +prompt("Enter Number");
// var b = ++a;
// var c = ++a;
// var d = --a;
// var e = --a;
// document.write("The value of a is"+" "+a +" "+"<br/>");
// document.write("The value of ++a is"+" "+b +" "+"<br/>");
// document.write("The value of a++ is"+" "+c +" "+"<br/>");
// document.write("The value of --a is"+" "+d +" "+"<br/>");
// document.write("The value of a-- is"+" "+e +" "+"<br/>");
// Answer end

// Answer 02
// var a=2;
// var b=1;
// document.write("a is"+" "+a+""+"<br/>");
// document.write("b is"+" "+b +" "+ "<br/>");
// var c= --a - --b;
// var d = ++b;
// var e = b--;
// var result = c+d+e;
// document.write("result" +" "+result);
//Answer end


// Answer 03
// var username= prompt("Enter your name");
// alert("Hello"+" "+username);
// Answer end

// Answer 05
// var number = +prompt("Enter table number","5");
// if(number == number)
// {
//     for(i=1; i<=10; i++)
//     {
//         result=i*number;
//         document.write(number+" "+"*"+" "+i+" "+"="+" "+result+" "+"<br/>");

//     }
// }

// else
// {
//     alert("error");
// }

// Answer No 06
// var subject1 = prompt("Enter Subject Name","Maths");
// var subject2 = prompt("Enter Subject Name","English");
// var subject3 = prompt("Enter Subject Name","Urdu");
// var totalmarks = 100;
// var obtainmarks = +prompt("Enter obtain marks for "+" "+subject1);
// var obtainmarks2 = +prompt("Enter obtain marks for"+" "+subject2);
// var obtainmarks3 = +prompt("Enter obtain marks for"+" "+subject3);
// var totobtain= obtainmarks+obtainmarks2+obtainmarks3;
// var percentage = (obtainmarks/totalmarks)*100;
// var allper=(totobtain/300)*100;

// document.write("<table>");
// document.write("<tr>");
// document.write("<th>");
// document.write("Subject");
// document.write("</th>");

// document.write("<th>");
// document.write("Total Marks");
// document.write("</th>");

// document.write("<th>");
// document.write("Obtained Marks");
// document.write("</th>");

// document.write("<th>");
// document.write("Percentage");
// document.write("</th>");
// document.write("</tr>");


// document.write("<tr>");
// document.write("<td>");
// document.write(subject1);
// document.write("</td>");

// document.write("<td>");
// document.write(totalmarks);
// document.write("</td>");

// document.write("<td>");
// document.write(obtainmarks);
// document.write("</td>");

// document.write("<td>");
// document.write(percentage);
// document.write("</td>");
// document.write("</tr>");


// document.write("<tr>");
// document.write("<td>");
// document.write(subject2);
// document.write("</td>");

// document.write("<td>");
// document.write(totalmarks);
// document.write("</td>");

// document.write("<td>");
// document.write(obtainmarks2);
// document.write("</td>");

// document.write("<td>");
// document.write(percentage);
// document.write("</td>");
// document.write("</tr>");


// document.write("<tr>");
// document.write("<td>");
// document.write(subject3);
// document.write("</td>");

// document.write("<td>");
// document.write(totalmarks);
// document.write("</td>");

// document.write("<td>");
// document.write(obtainmarks3);
// document.write("</td>");

// document.write("<td>");
// document.write(percentage);
// document.write("</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>");
// document.write("");
// document.write("</td>");

// document.write("<td>");
// document.write("300");
// document.write("</td>");

// document.write("<td>");
// document.write(totobtain);
// document.write("</td>");

// document.write("<td>");
// document.write(allper+" "+"%");
// document.write("</td>");
// document.write("</tr>");

// document.write("</table>");
// Chapter 06 end

// Chapter 9 to 11

// Answer 1
// var cityname = prompt("enter your city name");
// if (cityname == "karachi")
// {
//     alert("Welcome to city of lights");
// }
// else
// {
//     alert("Please enter valid name");
// }
// End

// Answer No 2
// var gender = prompt("enter your gender");

// if(gender == "male")
// {
//     alert("Good Morning sir");
// }

// else if(gender == "female" )
// {
//      alert("Good Morning Mam");
// }

// else
// {
//     alert("Please enter gender");
// }
// end


// Answer No 3
// var color = prompt("Please enter color");
// document.write("<th>SignalColor</th>"+" "+ "<th>Message</th>"+" "+"<br/>");
// document.write("Red"+" "+ "Must stop" +" "+"<br/>"+" "+"Yellow"+""+"Ready to move"+" "+"<br/>"+" "+"Green"+" "+"move now");


// Answer No 4
// var fuel = +prompt("Enter your fuel litres");
// if (fuel <= 0.25)
// {
//     alert("refil your fuel");
// }

// else
// {
//     alert("you can drive");
// }


// Answer No 5

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }


// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// Answer No 6

// var marks1=+prompt("Enter Subject Marks");
// var marks2=+prompt("Enter Subject Marks");
// var marks3=+prompt("Enter Subject Marks");
// var totalmarks= 300;
// var obtainmarks=marks1+marks2+marks3;
// var percentage=(obtainmarks/totalmarks)*100;
// if(percentage ==80)
// {
//     document.write("Total Marks:"+" "+totalmarks+" "+"<br/>");
//     document.write("Marks Obtain:"+" "+obtainmarks+" "+"<br/>");
//     document.write("Your percentage is"+" "+percentage+" "+"%"+" "+"<br/>");
//     document.write("Your Grade is A One");
// }

// else if(percentage >=70)
// {
//     document.write("Total Marks:"+" "+totalmarks+" "+"<br/>");
//     document.write("Marks Obtain:"+" "+obtainmarks+" "+"<br/>");
//     document.write("Your percentage is"+" "+percentage +" "+"%"+" "+"<br/>");
//     document.write("Your Grade is A");
// }

// else if(percentage >=60)
// {
//     document.write("Total Marks:"+" "+totalmarks+" "+"<br/>");
//     document.write("Marks Obtain:"+" "+obtainmarks+" "+"<br/>");
//     document.write("Your percentage is"+" "+percentage +" "+"%"+" "+"<br/>");
//     document.write("Your Grade is B");
// }

// else if(percentage >=50)
// {
//     document.write("Total Marks:"+" "+totalmarks+" "+"<br/>");
//     document.write("Marks Obtain:"+" "+obtainmarks+" "+"<br/>");
//     document.write("Your percentage is"+" "+percentage +" "+"%"+" "+"<br/>");
//     document.write("Your Grade is C");
// }

// else 
// {
//     document.write("Total Marks:"+" "+totalmarks+" "+"<br/>");
//     document.write("Marks Obtain:"+" "+obtainmarks+" "+"<br/>");
//     document.write("Your percentage is"+" "+percentage +" "+"%"+" "+"<br/>");
//     document.write("Fail");
// }


//  Answer No 7

// var number=+prompt("Guess Game Enter One number");
// var secretnumber=7;

// if(number == secretnumber)
// {
//     alert("Bingo Your Guess is corect");
// }

// else 
// {
//     alert("Try again");
// }
// end


// Answer No 8

// var value=+prompt("Enter number");
// if(value % 3 == 0)
// {
//     alert(value+" "+"is divisible by 3");
// }
// else
// {
//     alert("Not divisible by 3");
// }

// Answer No 9
// var number =+prompt("Enter number");
// if (number % 2 == 0)
// {
//     alert(number+" "+"this is even number");
// }

// else
// {
//     alert("this is odd number");
// }
// End

// Answer No 10

// var temperature = +prompt("Enter Temperature");
// if (temperature > 40)
// {
//     alert("It is hot outside");
// }
// else if(temperature > 30)
// {
//     alert("The weather today is normal");
// }
// else if(temperature > 20)
// {
//     alert("Today weather is cool");
// }
// else if(temperature > 10)
// {
//     alert("OMG!Today's weather is cool");
// }
// else
// {
//  alert("sorry enter some value");
// }

// end


// Answer No 11
// var operator= prompt("Please select an operator","+-/*");
// var fnumber = +prompt("Enter first Number");
// var snumber= +prompt("Enter second number");
// if (operator == '+')
// {
//     var sum = fnumber + snumber;
//     alert(sum); 
// }
// else if (operator == '-')
// {
//     var subtract= fnumber-snumber;
//     alert(subtract);
// }
// else if (operator == '*')
// {
//     var multiply= fnumber*snumber;
//     alert(multiply);
// }
// else if (operator == '/')
// {
//     var divide= fnumber/snumber;
//     alert(divide);
// }
// else
// {
//     alert("please enter operator");
// }

// Answer end

// Chapter 9 to 11 end


// Chapter 12 to 13

// Answer No 1

//  var character = prompt("Enter character","A,z,B");
// if (character >=65 && character <=95)
// {
//     alert("It is Capital letter");
// }

// else if (character>=97 && character<=122)
// {
//     alert("It is small letter");
// }

// else if (character>=48 && character<=57)
// {
//     alert("It is number");
// }

// ((character>0 && character<=47)||(character>=58 && character<=64)||(character>=91 && character<=96)||(character>=123 && character<=127))
// {
//     alert("It is special character");
// }

// end

// Answer No 2

// var number= +prompt("Enter number");
// var number2= +prompt("Enter second number");
// if (number >= number2)
// {
//     alert("number is greater than number2");
// }

// else if (number == number2)
// {
//     alert("number is equal to number2");
// }

// else 
// {
//     alert("please enter number");
// }

// end


// Answer No 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else
// {
// greeting = "Good evening";
// }

// Chapter No 14 to 16
// Answer No 1
// var car= ["civic","honda","city"];
// end

// Answer No 2
// var fruits = new Array( "apple", "orange", "mango" );
// end

// Answer No 3
// var fruits = ["mango","orange","banana"];
// End

// Answer No 4
//    var int = [1,2,3,5];
//end 

// Answer No 5
// var boolean = [true];
// end

// Answer No 6
// var arr = ["Hello",2,true,"by"];
// End

// Answer No 7
// var education = ["SSC","HSC","BCS","BS","BSCOM","MS","M.PHIL","PHD"];
// document.write("Qualification"+" "+"<br/>");
// document.write (education.join(" "));
// end


// Answer No 12
// var arr = ["This","is","my","cat"];
// document.write(arr.join(" "));
// end

// Answer No 15
// var arr = ["Apple", "Samsung", "Oppo"];

// document.write("<select>")
// document.write("<option>")
// document.write(arr[0])
// document.write("</option>")
// document.write("<option>")
// document.write(arr[1])
// document.write("</option>")
// document.write("<option>")
// document.write(arr[2])
// document.write("</option>")
// document.write("</select>")
// end 


//chapter 17 to 20

// Answer No 1
// var arr = [[]];
// end

// Answer No 2
// var arr = [[0,1,2,3],[5,6,8,9],[0,2,9,5]];
// for (i=1;i<+arr.length;i++)
// {
//    document.write(arr+" "+"<br/>");
// }
// end

// Answer NO 3

// for (i=1; i<=10;i++)
// {
//     document.write(i+" "+"<br/>");
// }

// end

// Answer No 4

// var table = +prompt("enter table number");
// var range = +prompt("enter range ");
// for (i=1;i<=range;i++)
// {
//     document.write(table+" "+ "x" +" "+ i+" "+"="+" "+i*table+" "+"<br/>")
// }
// end


// Answer No 5
// var fruits=["Apple","bnana","orange","mango"];
// for (i=1;i<=fruits.length;i++)
// {
//     document.write(fruits.join(" "));
//     break;
// }
// end

// Answer No 7

// var mobiles = ["Samsung","Iphone","Motrola","Nokia"];
// var input = prompt("Enter mobile");
// for (i=1;i<=mobiles.length;i++)
// {
// if(mobiles ==  mobiles.length)
// {
//  alert("It is in array");
// }
// else
// {
//     alert("error");
// }
// }

// end