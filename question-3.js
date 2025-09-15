/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
I think the Big O notation for findStudentById is O(n) because it uses linear search.
The function checks each element in the array one by one until it finds the student with the given ID or reaches the end of the array.
*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
I think the Big O notation for findProductPrice is O(log n) because it uses binary search. The function works on a sorted array and repeatedly divides the search range in half. Each step eliminates half of the remaining elements, so the number of steps grows logarithmically with the size of the array.

*/

/* 
Which function is more efficient and why?
Answer:

I think the findProductPrice function is more efficient than findStudentById because it uses binary search, which has a time complexity of O(log n). In contrast, findStudentById uses linear search with a time complexity of O(n). This means that as the array size grows, binary search requires far fewer comparisons, making it faster and more efficient, especially for large, sorted arrays.
*/
