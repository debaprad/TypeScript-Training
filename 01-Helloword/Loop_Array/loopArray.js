var reviews = [9, 5, 7, 2, 3, 8];
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
// getting avg review
var avg = 0;
var total = 0;
;
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
console.log("\"average review is\" " + total / reviews.length);
//iterations of array
var high = 0;
var low = 0;
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var tempReview = reviews_1[_i];
    if (tempReview > high) {
        high = tempReview;
    }
    else if (tempReview < low || low == 0) {
        low = tempReview;
    }
}
console.log("\"highest review :\" " + high);
console.log("\"lowest review :\" " + low);
