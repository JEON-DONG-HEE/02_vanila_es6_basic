const userEmail = [
    "userKorea@naver.com",
    "userUSA@gmail.com",
    "userSpain@apple.com"
];

const findEmail = userEmail.find(item => item.includes("@apple.com"));

console.log(findEmail);



