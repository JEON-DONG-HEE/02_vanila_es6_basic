const btnClick = document.querySelector("button");

// arrow function case 1
// btnClick.addEventListener("click", function(){
//     console.log(this);       // 일반 함수를 사용할 때 this 는 btnClick 객체를 참조한다
//     this.style.background = "#ff0000";
// });


// arrow function case 2
// btnClick.addEventListener("click", () => {
//     console.log(this);      // arrow function 안에 this 는 window 를 참조한다
//     this.style.background = "#ff0000";
// });


// // arrow function case 3
// const arrowTest = () => {
//     console.log(this);
// };
// btnClick.addEventListener("click", arrowTest);  // 이런식으로 상수에 담아서 넘겨줘도 결과는 똑같이 this 는 window 를 참조한다
// // 때문에 this 키워드를 사용할 경우에는 arrow function 은 쓰지 않고, function 예약어를 이용한 일반 함수로 작성해줘야 한다


// // // arrow function case 4
// const user01 = {
//     name : "Bryan",
//     age : 26,
//     addYear : () => {
//         this.age++;
//     },
// }

// console.log(user01);
// user01.addYear();
// user01.addYear();
// console.log(user01);    // 이 경우에도 두 결과값 모두 변화가 없는데 이는 arrow function 안의 this 가 user01 을 참조하지 않고 
//                         // window 를 참조하기 때문이다


// // arrow function case 5
const user01 = {
    name : "Bryan",
    age : 26,
    addYear() {     // 그래서 이럴 때도 this 키워드를 사용하려면 이렇게 일반 function 으로 선언해주어야 this 가 user01 을 참조한다
        this.age++;
    },
}

console.log(user01);
user01.addYear();
user01.addYear();
console.log(user01);                           






