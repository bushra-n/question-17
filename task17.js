"use strict";
// task 17 
// let guests:string[] = ["Munazzah","Alishba","Nasir","Tehmina","Yusha"];
// console.log("Due to limited Space,only two people can be invited for dinner" )
// while (guests.length>2){
//     const removedGuest = guests.pop();
// console.log(`Sorry ${removedGuest},you are no longer invited for dinner.`)}
// part 2
// guests.forEach((guest)=> {
//     console.log (`Dear ${guest}, you are still invited for dinner. `);
// });
// part 3 Removing last two names from the list.
let guests = ["Munazzah", "Alishba"];
guests.pop();
guests.pop();
// part 4 print final guest list to confirm its empty
console.log("Final guest list:", guests);
;
