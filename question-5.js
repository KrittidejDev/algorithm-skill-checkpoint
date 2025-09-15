/*  
What is the Big O notation for Function sortProductsByPrice of the Question 4. Explain your reason.
Answer:

I think the Big O notation for sortProductsByPrice is O(n²) because it uses Bubble Sort, which has two nested loops. The outer loop runs for each element, and the inner loop compares adjacent elements and swaps them if needed. In the worst case, the function has to make about n² comparisons, so the running time grows quadratically as the number of products increases.
*/
