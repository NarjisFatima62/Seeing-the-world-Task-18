"use strict";
// Question 18:
// Answer:
// Store the locations in an array.
let placesToVisit = ["Tokyo", "Pakistan", "Turkey", "London", "China"];
// Print the array in its original order:
console.log("Original order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list:
console.log("Alphabetical order:", [...placesToVisit].sort());
// Show that the array is still in its orignial order:
console.log("Original order after sorting:", placesToVisit);
// Print array in reverse alphabetical order without changing the order of the original list:
console.log("Reverse alphabetical:", [...placesToVisit].sort().reverse());
// Show that the array is still in its original order:
console.log("Original order after reverse sorting:", placesToVisit);
// Reverse the order of the list:
placesToVisit.reverse();
console.log("Reversed order: ", placesToVisit);
// Reverse the order of the list again to get back to the original order:
placesToVisit.reverse();
console.log("Sorted in alphabetical order: ", placesToVisit);
// Sort the array in reverse alphabetical order:
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order: ", placesToVisit);
