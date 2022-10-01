function addReview() {
 const review = document
  .getElementById("reviewText")
  .value;

 const addedReview = document
  .getElementById("addedReview");
 addedReview.innerHTML = review;
}