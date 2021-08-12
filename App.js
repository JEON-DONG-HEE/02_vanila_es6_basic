const userEmail = [
    "userKorea@naver.com",
    "userUSA@gmail.com",
    "userSpain@apple.com",
    "userGermay@gmail.com"
];

// 원래는 이렇게 쓸 수 있는 코드를
// const cleaned = [];
// userEmail.forEach(email => {
//     cleaned.push(email.split("@")[0]);
// });
// console.log(cleaned);


// 결과는 같지만 map, arrow function, implict return 을 활용해
// 다음과 같이 한줄로 쓸 수 있다
// const cleaned = userEmail.map(email => email.split("@")[0]);
// console.log(cleaned);


// 다음과 같이 index 를 포함하는 객체로 생성할 수 도 있다
const cleaned = userEmail.map((email, index) => ({
    email : email.split("@")[0], 
    point : index
}));

console.log(cleaned);

