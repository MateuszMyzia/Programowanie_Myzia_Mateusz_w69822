//alert("Hello World!");
//console.log("Info do konsoli");

//Zadanie 3
let a=10;
let b=20;
let c=23.3;
let wynik=a+b+c;
console.log("a+b+c="+ wynik);
let wynik2=a*b*c;
let wynik3=a/b;
//alert("a+b+c="+ wynik);

document.getElementById("zad3-1").innerHTML="a+b+c="+ wynik;
document.getElementById("zad3-2").innerHTML="a*b*c="+ wynik2;
document.getElementById("zad3-3").innerHTML="a/b="+ wynik3;

//zad 4

//for(let i=0; i<101; i+=2){
    //if(i%2==0){
//        console.log(i);
    //}
//}

//zad 6
//a = prompt("Jak się nazywasz?");
//console.log(a);
//alert("Cześć "+a);

//zad 5
a = parseFloat(prompt("Podaj długość boku 1: "));
b = parseFloat(prompt("Podaj długość boku 2: "));
c = parseFloat(prompt("Podaj długość boku 3: "));

if(a+b>c){
let p = (a+b+c)/2;
console.log(p);
let P=Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(P);
} else if (a+c>b){
    let p = (a+b+c)/2;
console.log(p);
let P=Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(P);
} else if (b+c>a){
    let p = (a+b+c)/2;
console.log(p);
let P=Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(P);
} else{
    console.log("Błędne dane")
}
