let reviews: number[] = [9,5,7,2,3,8];

for(let i=0;i<reviews.length;i++)
{
    console.log(reviews[i]);
}

// getting avg review
let avg: number = 0;
let total: number = 0;;
for(let i=0;i<reviews.length;i++)
{
    total += reviews[i];
}

console.log(`"average review is" ${total/reviews.length}`);

//iterations of array

let high: number=0;
let low: number=0;
for(let tempReview of reviews)
{
    if(tempReview>high)
    {
        high = tempReview;
    }
    else if(tempReview<low || low ==0)
    {
        low = tempReview;
    }
}
console.log(`"highest review :" ${high}`);
console.log(`"lowest review :" ${low}`);

//adding to array
reviews.push(123);
for(let i=0;i<reviews.length;i++)
{
    console.log(reviews[i]);
}

