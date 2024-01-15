// console.log("Arslan Ahmer");
// let question ="your species";
// let defultAnswer = "Human";
// var space = prompt(question, defultAnswer);
// console.log(space);
// document.write(space);
// document.write("Arslan Ahmer")
// let quiz = "your spacies!";
// let defans =  "Human";
// let spce = prompt(quiz, defans);
// let x = prompt("where is your residence?")
// if (x=== "kaor lal eason"){
//     alert("yes the answer is right.")
// }
// else{
//     alert(`No! you don't khow were i live`);
// }
// prompt(weight , time)
// if ( weight > 300 &&  time < 6){
//     alert("Come to aoutryout!")
// }
// else{
//     alert("Come to our cookout!");

////////////////////////////////////////////////////<<<<<Array>>>>>/////////////////////////////////////////////////////////////////
 //es6 string methods
    // let brotherName ="Azaz";
    // let myName = "Arslan";
    // console.log(`My best friend name is ${brotherName} and my name is ${myName}.` );
    // document.write(`${brotherName}`.startsWith('A'));
    // document.write(`${myName}`.endsWith('n') );
    // document.write(`${myName}`.includes('sla') );
    // document.write(`${myName} `.repeat(10) );
    // document.write(`${myName}`.endsWith('n') );
    // document.write(`${myName}`.endsWith('n') );

    // let myarray = ['azaz', 'ahmer' , 'zain', 'ashhad'];
    // let [n1,n2,n3,n4 ] = myarray;
    // [n1,n2] = myarray;
    // console.log(`sab sy kuti cheez hai ${n1} and sab sy sharif ${n2} hai.` );
    // let a = 1;
    // let b = 2;
    // [a,b] = [b,a];
    // console.log(a,b);
    // let sumOfTwoNumbers = () => a+b;

    // alert(sumOfTwoNumbers(4,5));
    
//  let double =n => n*2;
//  alert(double(3));
//  let names = ['Azaz kahn ', 'Arslan Ahmer' , 'Zain khan ' , 'Ashhad khan'];
//  let displyAll = names.map((e)=>{
//      return `Hello ${e}`;
//  });
//  console.log(displyAll);
//  document.write(displyAll);
//  const displyOne = e =>`hello ${e}`
// document.write(displyOne('Azaz khan'));


// const quantity = "100";
// const names = ['steel', 'gold' , 'copper'];
// const cost = names.map((names, i) =>({
//     names, quantity,Price:quantity*i
// }));

// console.log(cost);

// const quantity ='100';
// const names = ['steel', 'gold', 'copper'];
// const cost = (quantity, ...names) => {
//     console.log(quantity);
//     console.log(names);
// };
// cost(quantity, names, names);

// const quantity = 100;
//  const cost = (quantity, price =1 )=>{
//      console.log(quantity*price);
//  };
//  cost(quantity);
//  cost(quantity, 20);


// function ask (question , yes , no){
//     if (confirm(question)) yes();
//     else no();
// }
// ask(
//     "do you agree?", 
//     ()=> alert("you agreed."),
//     ()=> alert("you canceled the execution.")
    
// );
// console.log("you are in");

// function increment(value , by = 1){
//     return value + by;
// }
// console.log(increment(2,2));
// console.log(increment(2));

// const name = 'Azaz khan';
// const age =21;
// const nationality = 'Pakistan';
// const designation = 'web developer';
// const user = {
//     name,
//     age, 
//     nationality,
//     designation,
//     detial(){
//         return this.name+'is a '+ this.nationality +" , working as"+ this.designation;
//     }

// }
// console.log(user.detial());

// const math = {
//     add:(a,b) => a+b,
//     mul:(a,b) => a*b,
//     sub:(a,b) => a-b,
//     div:(a,b) => a/b,
// }

// console.log(math.add(1,1));
// console.log(math.sub(1,1));
// console.log(math.mul(1,1));
// console.log(math.div(1,1));

// let map = new Map();
// map.set(5,'Ahmer');
// map.set(5,'Azaz khan');
// console.log(map.size);
// console.log(map.get(5));
// console.log(map.get('5'));

// let map2 = new Map(['name', 'Azaz khan'],['age', 23]);
// console.log(map2.size);
// console.log(map2.get('name'));

// let map = new Map();
// let key1 ={};
// let key2 ={};
// map.set(key1,'Azaz khan');
// map.set(key2,'Arslan Ahmer');
// console.log(map.size);
// console.log(map.get(key1));
// console.log(map.get(key2));

// let arr = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// let combine = [...arr,...arr2];
// console.log(combine);
// let combine2 = [0,...arr,11,...arr2,12];
// console.log(combine2);
// let combine3 = [0,...arr,11,"Azaz khan ",'Arslan Ahmer',...arr2,12];
// console.log(combine3);
// let copy = arr;
// console.log(copy);
// arr.push(6);
// console.log(arr);
// console.log(copy);

// let person ={
//     name : 'Arslan Ahmer',
//     age : '25',
//     role : 'software engineer'
// }
// let {name, age} =person;
// console.log(name,age);

// let {name, age, role} = person;
// console.log(name, age, role);

// let {name, role} =person;
// console.log(name, role);

// let {name: fullName , age: completeAge, role, designation} = person;
// console.log(fullName, completeAge, designation);

// let person ={
//     name : 'Azaz khan ',
//     age : 21,
//     adress: {
//         street: 'Ahmad Ali',
//         city: 'karor',
//         homeNo: 2 ,
//     }
// }
// let {adress: {street, city}} = person;
// console.log(street, city);

// class individual{
//     constructor(name, age){
//         this.name= name;
//         this.age=age;
//     }
//     detail(){
//         return `${this.name} is ${this.age} years old.`;
//     }
// }
// let person = new individual('Azaz khan', 21);
// console.log(person.detail());


// const Person = class{
//     constructor (name, age){
//         this.name = name;
//         this.age = age ;

//     }
//     details(){
//         return `${this.name} is ${thsi.age} years old`;
//     }
// }

// const Person= class individual {
//     constructor (name, age){
//         this.name = name ;
//         this.age = age;

//     }
//     details(){
//         return `${this.name} is ${this.age} years old`;
//     }
// }

// let person1 = new Person('Arslan Ahmer',25);
// console.log(person1.details());
// //"Arslan Ahmer is 25 years old. "

// class Person {
// constructor (name, age){
//     this.name;
//     this.age;

// }
// details(){
//     console.log(`${this.name} is ${this.age} years old `);
// }
// }

// static display(){
//     console.log(`I am only accessible by parent`);
// }

// let person1 = new Person('Azaz khan', 23);
// person1.display();
// Person.display();
// person1.display();

// let name0="Ahmer";
// let name1="Azaz";
// let name2="zain";
// let name3="Ashhad";

// let names = [`Arslan`, `Azaz`, `Zain`, `Ashhad`];
// // names.unshift("Noman "," abubakr");
// // console.log(names)

// for( let i =0 ; i<=4 ; i++){
//     console.log(names[i])
//

// names.pop();
// console.log(names);
// names.push("Farhan");
// console.log(names);
// alert("Ahmer says You are my bestFriend"+" " + names[1]);

// brothers[0]="Ahmer";
// brothers[1]="Azaz";
// brothers[2]="zain";
// brothers[3]="Ashhad";
// let names = [];

// var cityName = prompt("Enter your city name");
//     cityName = cityName.toUpperCase();
//  let goodCities = ['karor', 'Jhang', 'layyah','Multan'];
//  for(let i=0 ; i<4; i++){
//      if(cityName===goodCities[i]){
//          alert("Yes")
//      }
//      else{
//          alert("no")
//      }
//  }
// let rightNow = new Date();
// let theDay = rightNow.getDate;
// // console.log('theDay');
// document.write(theDay);

// let dayNames =["sun","mon","tue","wed","thu","fri"];
// let now = new Date();
// let theDay = now.getDate();
// let nameOfTheDay =dayNames[theDay];
// console.log("nameOfTheDay");
// function tellTime(){

//     const now = new Date();
//     const theHour = now.getHours();
//     const theMin = now.getMinutes();
//     alert("tiem :" + theHour + ":" + theMin);

// };
// function student (theObject)
// {
//     theObject.name="Sara";
// }

// let student1 ={name: 'scottr', stanrnderd: 'V' , roll_no: '140'};
// let x,y;
// x = student1.name;
// student(student1);
// y= student1.name;

// console.log(x);
// console.log(y);

// switch(dayofWk){
//     case "sat":
//         alert("Whoopee");
//         break;
//     case "Fri":
//         alert("Tgif!");
//         break;
//     default:
//         alert("shoot me now!");
// }

// const num =[1,2,3,4,5,8,4,6];
// function multiplyByTwo(num, index){
//     console.log(`index is:`, index);
//     console.log(`${num} * 2 = ${num*2}`);
// }
// multiplyByTwo(num[1],0);
// for(let i=0; i<num.length;i++){
//     console.log(i);
//     multiplyByTwo(num[i],i);
// }

// num.forEach(multiplyByTwo);
// const numbers = []
// const squre=function(num){
//     return num*num;
// // }
// const squreNumber = num.map((num)=>{
//     return `index: ${num} , ${num*num}`;
// });
// console.log(squreNumber);

//  console.log("Arslan Ahmer");
//  setTimeout(()=>{
//      console.log("Azaz khan")
//  },1000);
//  console.log('friends forever');
// const matches = (obj, source)=>{
// Object.keys(source).every(key=> obj.hasOwenProperty(key) && obj[key] === source[key]);
// }
// const matches = (obj,source)=>
// Object.keys(source).every(key=> obj.hasOwnProperty(key) && obj[key] === source[key]);

// console.log(matches({age:25,hair:'long',beard:true},{hair:'short',beard:true}));
// const copy_to_clipboard = str =>{
//     const el = document.createElement('textarea');
//     el.value = str;
//     el.setAttribute('readonly','');
//     el.style.position= 'absolute';
//     el.style.left = '.9999px';
//     document.body.appendChild(el);
//     const selected = document.getSelection().rangeCount>0?document.getSelectio().getRangeAt(0):false;
//     el.select();
//     document.execCommand('copy');
//     document.body.removeChild(el);
//     if(selected){
//         document.getSelection().removeAllRanges();
//         document.getSelection().addRange(selected);
//     }

// }
// const csv_to_array = (data,delimeter = ',', omitFirstRow = false) =>
// data
// .slice(omitFirstRow?data.indexOf('\n')+1:0)
// .split('\n')
// .map(v=> v.split(delimeter));
// console.log(csv_to_array('a,b\nc,d'));
// console.log(csv_to_array('a;b\nc;d', ';'));
// console.log(csv_to_array('head1,head2\na,b\nc,d', ',' , true));
// const cvs_to_json =

// const materials =[
//     'Hydrogen',
//     'Helium',
//     'Lithim',
//     'Berylium',

// ];
// document.write(materials.map(materials=>materials.length));

// let a = 4;
// let b = 6;

// const c = ()=> a+b+100;

// console.log(c);

// function reverse(n){
//     n=n+"";
//     return n.split('').reverse().join('');
// }

// console.log(Number(reverse(123456)));

// function check_palindrome(star_entry){
//     let cstr = star_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//     let ccount =0;
//     if(cstr ===''){
//         console.log("Nothing found");
//         return false;
//     }
//     if((cstr.length)%2 ===0 ){
//         ccount=(cstr.length)/2;
//     }else{
//         if(cstr.length===1){
//             console.log('Enter is a palindrome');
//             return true;

//         }else{

//             ccount = (cstr.length - 1)/2;
//         }
//     }
//     console.log('The entry is palindrome');
//     return true;

// }

// check_palindrome('madam');
// check_palindrome('nurses run');
// check_palindrome('fox');

// function UpperCase(){
// var array1 =str.split(' ');
// var newarry1 = [];
// for(var x =0; x<array1.length;x++){
//     newarry1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
// }
// return newarry1.join(' ');

// }
// console.log(UpperCase('the quick bron fox'));

// ternary Operator

// let marks = prompt("Enter your marks: ");

// let result = (marks >= 40) ? 'pass' : 'fail';

// let result= if(marks > 40){'pass'}else{'fail};

// document.write(`you ${result} the exam.`);
// console.log(`you ${result} the exam`);
// let age = 22;

//  let aligibleAge = (age>=18)? 'you are eligible' : 'your not';

//  console.log(aligibleAge);

// let a =3;
//     let number =  (a>=0) ? (a==0 ? "zero" : "positive") : 'nagitive';
//     console.log(number)

// function greet(name){
//     console.log('Hi..! ' + name +";)" );

// }

// let name = prompt("Enter your name: ");

// greet(name);

// function add(a,b){
//     console.log(a+b);
// }
// add(3,2);
// add(3,3);

// function add(a,b){
//     return a+b;
// }

//     let number1 = parseFloat(prompt("Enter first number: "));
//     let number2 =parseFloat(prompt("Enter second number: "));

//     let result = add(number1 , number2);

//     console.log("The sum is " + result);

// let x=  function (num){
//     return num*num;
// }
// console.log(x(5))

// let y = x(3);
// console.log(y)

// const setTime = () =>{
//     console.log("setTime Out function");
// }

// let newfunc = setTimeout(setTime,4000);
//     console.log('id:' + newfunc);

//  const showTime = ()=>{
//      let dateTime = new Date();
//      let time = dateTime.toLocaleTimeString();
//      console.log(time)
//    let ids=  setTimeout(showTime ,3000);
//  }
//  clearTimeout(ids);
//  showTime();

// let count =0;
// function increaseCount(){
//   count+=1;
//   console.log(count);
// }

// // increaseCount();
// let id = setTimeout(increaseCount, 1000);
// // console.log(id);
// clearTimeout(id);
// console.log('setTimeOut is stopped');
// function greet(name,lastname){
//   console.log('hello' +' '+name+' '+lastname );
// }

// setTimeout(greet,1000,'arslan','ahme

// function greet(name){
//   console.log('hi' + ' '+ name);
// }
// greet()

// function greet(name){
//   console.log('hello'+' '+ name);
// }

// greet('Arslan Ahmer');

// function greet(name, callback){
//     console.log('hi'+" "+name);
//     callback();
// }
// function callme(){
//     console.log('my name Arslan');
// }
// greet('Ahmer',callme);

// function info(age,callback){
//     let a = callback();
//     console.log(age + a);
// }
// function call(){
//     console.log('years old');
// }
// info(26,call);
// function greet(){
//     console.log('hello world');
// }

// function sayName(name){
// console.log('hello'+' '+name);
// }

// setTimeout(greet,3000);
// sayName('Arslan Ahmer');

// function greet(name,myfunction){
//     console.log('helo world');
//     myfunction(name);
// }
// function sayName(name){
//     console.log('hello'+' '+name);
// }
// setTimeout(greet,2000,'Arslan Ahmer',sayName);

// let name = "sara";

// {
//     let name = "afzal";
//     console.log(name);
// }
// console.log(name);

// let x =function(s,y){
//     return s*y;
// }

// let x = (x,y)=>{
//     return s*y
// }

// class Person{
//     constructor(name){
//         this.name=name;
//     }
// }

// const Person1 = new Person('Arslan Ahemr');
// console.log(Person1.name);

// function sum(x,y=3){
//     console.log(x+y);

// }

// sum(5);
// sum(5,15);

// const firstName = 'Azaz';
// const lastname = 'Ahmer';

// console.log('helo' + firstName +" "+ lastname);
// console.log( `Hello ${firstName} ${lastname}`);

// const person = {
//     name:'sara',
//     age:25,
//     gender:'female'
// }
// let name = person.name;
// let age = person.age;
// let gender = 'female';

// console.log(name);
// console.log(age);
// console.log(gender);

// let countValue = new Promise (function(resolve, reject){
//     reject('promise rejected');
// });countValue.then(
//     function successValue(result){
//         console.log(result);
//     }
// )
// const map1 = new map();
// map1.set('info' , {name:'Arslan' , age:27});

// console.log(map1);
// console.log('arslan')

// {
//   let name = 'karor';

//   {
//     let name2 = 'layyah';
//     console.log(name);
//     {
//       console.log(name2);
//     }
//   }
// }
// console.log(name)

// function changeImage(){
//     let image = document.getElementById('image');
//     if(image.scroll.match("GridImageTemplate.jpg")){
//         image.src='./lays.jpg'
//     }else{
//         image.src = './R.jpg'
//     }

// }

// let n = 1234;
// function reverse_number(n){
//     n = n + "";
//     return n.split("").reverse().join("");
// }
// console.log(n);
// console.log(reverse_number(n));

// class Car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
// }

// class Car{
//     constructor(brand){
//         this.carname= brand;
//     }
//     present(){
//         return "i have a" + this.carname;
//     }
// }

// class Model extends Car{
//     constructor(brand,mod){
//         super(brand);
//         this.Model=mod;
//     }
//     show(){
//         return this.present()+', it is a '+this.Model
//     }
// }

// const h1 = document.getElementById("title");
// h1.style.color = "red"; 

// document.getElementById("btn").style.backgroundColor="brown"
// document.getElementById("btn").style.color= "white"
// console.log(window.document)

// const perant = document.querySelector('.parent');
// console.log(parent)
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

// const parent =document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children[1].innterHTML);

// const demo = document.querySelector('#demo');

//     function myDisplayer(){
//         demo.innerHTML = "data will be aprear here";
//     }

//     // myDisplayer();


//     function myFirst(){
//         myDisplayer("hello");
//     }

//     function mySecond(){
//         myDisplayer("Goodbey");
//     }
//     myFirst();
//     mySecond();

    // document.write(new1);



    // setTimeout(function(){
    //     console.log("Allah o Akbar")
    // },2000)



    // let name1 = function(){
    //    document.querySelector('h1').innerHTML = "LEARNING CODE WITH AHMER"
    // }

    // let changeTime = setTimeout(name1,2000);

    // const button = document.querySelector('#btn');
    // button.addEventListener('click',function(){
    //     clearTimeout(changeTime);
    //     console.log('stopped');
    // })


    // setInterval(function(){
    //     console.log("working", Data.now())
    // },2000)


    // const start = document.querySelector('#start');
    // const stop = document.querySelector('#stop');

    // const clear = start.addEventListener('click',function(){
    //     setInterval(function(){
    //         console.log("start")
    //     },1000)
    // })
    // stop.addEventListener('click', function(clear){
    //     clearInterval(clear);
    //     console.log("occoured")
    // })
    


//  let requstUrlForApi = 'https://api.publicapis.org/entries';

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET',requstUrlForApi);
//     xhr.onreadystatechange = function(){

//         console.log(xhr.readyState);
//         if(xhr.readyState===4){
//             console.log(this.responseText.toUpperCase());
//         }

//     } 
//     xhr.send();

    // console.log(requstUrlForApi);

    // let x =3;
    // let y = 4;
    // print(x*y)
    // console.log(x*y)

    // let z = 9.2545522;
    // console.log(z.toFixed(2));

    // let mid = 25;
    // let high = 50;
    // let low = 1;
    // let current = 130;
    // let found = -1;
    // if(current<mid){
    //     mid = (current-low)/2;
    //     console.log(mid)
    // }else{
    //     mid = (current +high)/2;
    //     console.log(mid);
    // }

    // let number = [];
    // for(let i=0;i<101;i++){
    //     number[i]=i+1;
    // }

    // console.log(number);
    // let sum=0;
    // let num = [1,2,3,4,5];
    // for(let i=0;i<num.length;i++){
    //      sum += num[i];
    // }


    // console.log(sum)

    // let sentense = "the quick brown fox jumped over the lazy dog";
    // let word = sentense.split(" ");
    // for(let i= 0;i<word.length;i++){
    //     console.log("word "+": "+i+" : "+word[i]);
    // }

    // function copy(p1,p2){
        
    // }



    function factorial(number){
        if(number==1){
            return number;
        }else{
            return number*factorial(number-1);
        }
        
    
    }

   factorial(5);