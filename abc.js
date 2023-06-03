// let arr = [-2, 3, 4, -10, 7];
// let sum = 0;
// let maxSum = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
//     if (sum > maxSum) {
//         maxSum = sum;
//     }
//     else if (sum < 0) {
//         sum = 0
//     }
// }

// console.log(maxSum)

// const convertTo24=(time,mn)=>{
//     let t=time.split(':')
//     if(mn=='AM'){
//         return t.join(':')
//     }
//     else{
//         t[0]=parseInt(t[0])+12
//         t[0].toString()
//         return t.join(':')
//     }
// }
// console.log(convertTo24('01:24', 'PM'))

// // let totalSecs = 4982;

// // let hrs=0; mins=0,secs=0, remainingSecs=0;

// // if(totalSecs>3600){
// //     hrs = Math.floor(totalSecs/3600)
// //     totalSecs = totalSecs%3600
// // }
// // if(totalSecs>60){
// //     mins=Math.floor(totalSecs/60)
// //     totalSecs=totalSecs%60
// // }
// // secs = totalSecs;

// // console.log(hrs<10?'0'+hrs:hrs, mins<10?'0':mins, secs<10?'0'+secs:secs)


let time = 3.27;

let hrs = Math.floor(time/1)
let mins=0, secs=0;

// time = time-hrs;

// time = time*60;

// if(time !== Math.floor(time)){
//     mins=Math.floor(time)
//     time = time-mins;
//     secs = Math.floor(time*100)
// }

// console.log(hrs+':'+mins+':'+secs)

// time = hrs*3600 + mins*60 +secs;

// console.log(Math.round(time*100/3600)/100)


// class LRUcache{
//     constructor(max=3){
//         this.max=max;
//         this.cache=new Map()
//     }
//     set(key,value){
//         if(this.cache.has(key)){
//             this.cache.delete(key)
//         }
//         if(this.cache.size===this.max){
//             this.cache.delete(this.first())
//         }
//         this.cache.set(key, value)
//     }
//     first(){
//         return this.cache.keys().next().value
//     }
// }

// let myCache = new LRUcache(3)

// myCache.set("name", "karthik")
// myCache.set("age", 19)
// myCache.set("age", 18)

// console.log(myCache)

// const nodemailer = require('nodemailer');
// const otpgenerator = require('otp-generator');

// const otp = otpgenerator.generate(6, {upperCaseAlphabets:false, lowerCaseAlphabets:false, specialChars:false, digits:true})

// const transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'karthikgeek1@gmail.com',
//         pass:'adjkasd'
//     }
// })

// const mailOptions = {
//     from:'karthikgeek1@gmail.com',
//     to: 'kjskarthik44@gmail.com',
//     subject: 'hello',
//     html:`<p>${otp}</p>`
// }

// transporter.sendMail(mailOptions, function(err, info){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(info.response)
//     }
// }) 


