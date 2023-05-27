/*
    Recursion : Algorithm

    Recursion is a function that calls itself!

    Example:
    
    Write a function to print the message 'hello' N times
*/

// iterative way
// function printHelloI(times) {
//     for (let i = 1; i <= times; i++){
//         console.log('hello');
//     }
// }

// printHelloI(3);

// recursive way
// function printHelloR(times) {
//     console.log('hello');
//     printHelloR(times);
// }

// printHelloR(3);

/*
    Recursion Tree

    printHelloR(3)
        - console.log('hello')
        - printHelloR(3)
            - console.log('hello')
            - printHelloR(3)
                - console.log('hello')
                - printHelloR(3)
                    - console.log('hello')
                    - printHelloR(3)
                    ...
                    ...
                    ...
*/

// function printHelloR(times) {
//     // stopping condition
//     if (times == 0) return;

//     console.log('hello');
//     printHelloR(times-1);
// }

// printHelloR(3);

/*
    printHelloR(3)
        - times = 3
        - console.log('hello')
        - printHello(2)
            - times = 2
            - console.log('hello')
            - printHello(1)
                - times = 1
                - console.log('hello')
                - printHello(0)
                    - times = 0
*/

/*

Write a recursion function to print the values from N to 1
    input: 5
    output: 5
            4
            3
            2
            1

    input: 10
    Output: 10
            9
            8
            7
            6
            5
            4
            3
            2
            1
*/

// function print(N) {
//     // stopping condition
//     if (N == 0) return;

//     console.log(N);
//     print(N-1);
// }

// print(10);

/*
    print the natural numbers from 1 to N


*/

// function print(N) {
//     // stopping condition
//     if (N == 0) return;

//     console.log(N);
//     print(N-1);
// }

// print(5);

/*
    print(5)
        - N = 5; 5 == 0; false
        - log(N) #5
        - print(4)
            - N = 4; 4 == 0; false
            - log(N) #4
            - print(3)
                - N = 3; 3 == 0; false
                - log(N) #3
                - print(2)
                    - N = 2; 2 == 0; false
                    - log(N) #2
                    - print(1)
                        - N = 1; 1 == 0; false
                        - log(N) #1
                        - print(0)
                            - N = 0; 0 == 0; true; return

    print(5)
*/

// function print(N) {
//     // stopping condition
//     if (N == 0) return;

//     print(N - 1);
//     console.log(N);
// }

// print(5);

/*
    print(5)
        - N = 5; 5 == 0; false
        - print(4)
            - N = 4; 4 == 0; false
            - print(3)
                - N = 3; 3 == 0; false
                - print(2)
                    - N = 2; 2 == 0; false
                    - print(1)
                        - N = 1; 1 == 0; false
                        - print(0)
                            - N = 0; 0 == 0; true; return
                        - log(N) #1
                    - log(N) #2
                - log(N) #3
            - log(N) #4
        - log(N) #5 [waiting to execute]

    print(5)
*/

// Problem: Write a recursion function to find and print the sum of first N natural numbers

/*
    Input: 5
    Output: 15

    Explanation: 1 + 2 + 3 + 4 + 5 = 15

    Input: 10
    Output: 55
    
    Explanation: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

*/

// Recurrence Relation

/*
    Let S(N) = ?

    -----------------
    base case:

    For N = 0, S(0) = 0
    For N = 1, S(1) = 1

    ------------------

    For N = 2, S(2) = 1 + 2 = 3
    For N = 3, S(3) = 1 + 2 + 3 = 6
    For N = 4, S(4) = 1 + 2 + 3 + 4 = 10
    For N = 5, S(5) = 1 + 2 + 3 + 4 + 5 = 15

    Backward Substitution:

    For N = 0, S(0) = 0
    For N = 1, S(1) = 1

    ------------------

    For N = 2, S(2) = S(1) + 2 = 3
    For N = 3, S(3) = S(2) + 3 = 6
    For N = 4, S(4) = S(3) + 4 = 10
    For N = 5, S(5) = S(4) + 5 = 15



    For N = 1, S(N) = 1
    For N > 1, S(N) = S(N-1) + N
*/

// function S(N) {
//     if (N == 1) return 1;
//     return S(N - 1) + N;
// }

// console.log(S(10));

// function to find the factorial of a number N

/*
    Let F(N) = ?

    -----------------
    base case:

    For N = 0, F(0) = 1
    For N = 1, F(1) = 1

    ------------------

    For N = 2, F(2) = 1 * 2 = 2
    For N = 3, F(3) = 1 * 2 * 3 = 6
    For N = 4, F(4) = 1 * 2 * 3 * 4 = 24
    For N = 5, F(5) = 1 * 2 * 3 * 4 * 5 = 120

    Backward Substitution:

    For N = 0, F(0) = 1
    For N = 1, F(1) = 1

    ------------------

    For N = 2, F(2) = F(1) * 2 = 3
    For N = 3, F(3) = F(2) * 3 = 6
    For N = 4, F(4) = F(3) * 4 = 10
    For N = 5, F(5) = F(4) * 5 = 15


    For N = 0, F(N) = 1
    For N = 1, F(N) = 1
    For N > 1, F(N) = F(N-1) * N
*/

// function F(N) {
//     // For N = 0, F(N) = 1
//     if (N == 0) return 1;
//     // For N = 1, F(N) = 1
//     if (N == 1) return 1;
//     // For N > 1, F(N) = F(N-1) * N
//     return F(N - 1) * N;
// }

// console.log(F(5));

/*
    F(5)
        - N = 5; 5 == 0 || 5 == 1; false
        - return 5 * F(4)
                        - N = 4; 4 == 0 || 4 == 1; false
                        - return 4 * F(3)
                                        - N = 3; 3 == 0 || 3 == 1; false
                                        - return 3 * F(2)
                                                        - N = 2; 2 == 0 || 2 == 1; false
                                                        - return 2 * F(1)
                                                                        - N = 1; 1 == 0 || 1 == 1; true; return 1

    
    
    F(5)
                                                                        
*/

