/*
    time complexity

    either to compare one algorithm with another algorithm or to evaluate the performance of a single algorithm
        - time complexity
        - space complexity
    
    time complexity: amount of time taken by an algorithm to run
    space complexity: amount of space taken by an algorithm to run

    Mathematical Notations: Asymptotic Notations

    1. Big - 'O' (Oh) - Upper Bound
    2. Big - 'Ω' (Omega) - Lower Bound
    3. Big - 'Θ' (Theta) - Tight Bound

    Situtation/Cases : (Inputs)

    1. Worst Case
    2. Best Case
    3. Average Case

    Time Complexity: Upper Bound, Worst Case - Big - 'O'

    Example:

    Algorithm: Linear Search

    Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    Case(first element): If the Key = 1, Comparisons => 1 => Best Case => O(1) - abbr: Order of 1

    Case(middle element): If the Key = 5, Comparisons => 5 => Average Case => O(N/2) => O(N)

    Case(last element): If the Key = 10, Comparisons => 10 => N comparisons => O(N)
    Case(element not present): If they Key = 15, Comparisons => 10 => N Comparisons => O(N)

*/

/*
    Example 1:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Options:

    O(1)
    O(logN)
    O(N)
    O(N logN)
    O(N^2)
    O(N^2 logN)
    O(N^3)
    O(N^3 logN)
    O(2^N)
    O(N!)

    Solution: O(N + M)
    
    let a = 0, b = 0; // declarations, conditionals, expressions, assignments
    => O(1), Constant Time

    for (i = 0; i < N; i++) {
        a = a + rand();
    }

    Total Executions = Values of i
    i = 0, 1, 2, 3, 4, 5, 6, .... , N-1 => N

    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Total Executions = Values of j
    j = 0, 1, 2, 3, 4, 5, 6, 7,..., M-1 => M


    Total Time Complexity, T(N, M) = 1 + N + M
                                   = N + M (Since 1 is constant)
                                   = O(N + M)
*/

/*
    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    T(N) = 1 + N + N
         = N + N
         = 2*N
         = N (Since 2 is a constant)
         = O(N)
*/

/*
    let a = 0, b = 0;
    let M = N;

    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Time Complexity: T(N) = 1 + N + N
                          = 2N
                          = O(N)
*/

/*
    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    Time Complexity: T(N) = 1 + N * N
                          = N^2
                          = O(N^2)

    N = 5
        i = 0; j = 0, 1, 2, 3, 4 => 5 times
        i = 1; j = 0, 1, 2, 3, 4 => 5 times
        i = 2; j = 0, 1, 2, 3, 4 => 5 times
        i = 3; j = 0, 1, 2, 3, 4 => 5 times
        i = 4; j = 0, 1, 2, 3, 4 => 5 times
    
        total executions = 5 + 5 + 5 + 5 + 5
                         = 25
    
    N = 3, executions = 9
    N = 4, executions = 16
    N = 5, executions = 25
    N = 6, executions = 36

    N^2
    => O(N^2)

*/

/*
    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    Time Complexity: ?

    Assume N = 5

    i = 0; j = 5, 4, 3, 2, 1 => 5 times
    i = 1; j = 5, 4, 3, 2 => 4 times
    i = 2; j = 5, 4, 3 => 3 times
    i = 3; j = 5, 4 => 2 times
    i = 4; j = 5 => 1 times

    Total number of executions = 5 + 4 + 3 + 2 + 1
                               = 15
    
    Assume N = 4

    i = 0; j = 4, 3, 2, 1 => 4 times
    i = 1; j = 4, 3, 2 => 3 times
    i = 2; j = 4, 3 => 2 times
    i = 3; j = 4 => 1 times

    Total number of executions = 4 + 3 + 2 + 1
                               = 10
    
    For N = 5, executions = 15
    For N = 4, executions = 10
    For N = 6, executions = 21
    For N = 10, executions = 55

    Executions = Sum of the first N natural numbers
               = N + (N-1) + (N-2) + (N-3) + .... + 1
               = (N * (N+1))/2

    5N = 5, S(N) = 5 * 6/2 = 30/2 = 1

    T(N) = 1 + (N * (N+1))/2
         = 1/2 * (N * (N+1))
         = N * (N+1)
         = N^2 + N
         = N^2 (Since N^2 is the highest polynomial)
         = O(N^2)
*/

/*
    let i, j, k = 0; // O(1)
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    }

    Time Complexity: ?

    Outer loop: N/2 + 1

    Inner loop: 

    j = 2, 4, 8, 16, 32, 64, 128, 256, ..., N

    For N = 10; j = 2, 4, 8; executions = 3
    For N = 29; j = 2, 4, 8, 16; executions = 4
    For N = 30; j = 2, 4, 8, 16; executions = 4
    For N = 31; j = 2, 4, 8, 16; executions = 4
    For N = 40; j = 2, 4, 8, 16, 32; executions = 5

    2^X = N, X is unknown, Solve for X?

    Apply log2 on both the sides,
    
    log2(2^X) = log2(N)

    X log2(2) = log2(N) [Since, loga(b^x) = x loga(b)]
    X(1) = log2(N) [Since, loga(a) = 1]
    X = log2(N)

    T(N) = 1 + (N/2 + 1) * log2(N)
         = 1 + N/2 * log2(N) + log2(N)
         = N * log2(N) + log2(N)
         = O(N log2(N))

*/

// console.log(10, Math.log2(10));
// console.log(29, Math.log2(29));
// console.log(30, Math.log2(30));
// console.log(31, Math.log2(31));
// console.log(40, Math.log2(40));

/*
    O(2^N)

    Problem: Given an array of values, find how many ways we can select the values from the array

    Input: [1, 2, 3]
    Output: 8

    Selections:

    0 values => () => 1 way
    1 values => (1), (2), (3) => 3 ways
    2 values => (1, 2), (1, 3), (2, 3) => 3 ways
    3 values => (1, 2, 3) => 1 way

    Total number of ways = 1 + 3 + 3 + 1
                         = 8
    
    Input: [1, 2, 3, 4]
    Output: 16

    Selections: 

    0 values => ()
    1 values => (1), (2), (3), (4)
    2 values => (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)
    3 values => (1, 2, 3), (1, 2, 4), (1, 3, 4), (2, 3, 4)
    4 values => (1, 2, 3, 4)

    N = 3, executions = 8
    N = 4, executions = 16
    N = 5, executions = 32

    O(2^N)
*/

/*
    N!

    Problem: Given a string S, find how many ways we can re-arrange the characters to form a new string

    Input: 'abc'
    Output: 6

    abc
    acb
    bac
    bca
    cab
    cba

    Input: ab
    Output: 2

    ab
    ba

    Input: abcd
    Output: 24

    abcd
    abdc
    acdb
    adbc
    bacd
    bdca
    ...
    ...

    N = 3, Number of executions = 6
    N = 2, Number of executions = 2
    N = 4, Number of executions = 24

    N! = N * N-1 * N-2 * N-3 * ... * 1
    
    5! = 5 * 4 * 3 * 2 * 1 = 120
    4! = 4 * 3 * 2 * 1 = 24

    O(N!)
*/