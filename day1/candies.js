/**
 * @param {number} totalCandies
 * @param {number[]} candies
 * @param {number} i
 * @return {boolean}
 */
var isGreater = function(totalCandies, candies, i){
    // assume that the totalCandies is greater than all the other kid's candies
    let assumption = true;

    // iterate through the candies array <- index
    for(let index=0; index<candies.length; index++){
        // except the index `i`
        if(index != i){
            // for every candies[index]
            // check if the totalCandies is smaller than candies[index]
            if(totalCandies < candies[index]){
                // update my assumption
                assumption = false;
            }
        }
    }
    
    // return my assumption
    return assumption;
}

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// Time Complexity: O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    // 1. initialize an empty array <- result
    let result = [];

    // 2. Iterate or Traverse through the candies array <- iterator: i
    for(let i=0; i<candies.length; i++){
        // for every kid @ ith position
        // find the total number of candies <- totalCandies
        let totalCandies = candies[i] + extraCandies;

        // check if the totalCandies is greater than all the other kid's candies
        // except the position/index i
        if(isGreater(totalCandies, candies, i)){
            // if true => push the result 'true' to the array result
            result.push(true);
        } else {
            // if false => push the result 'false' to the array result
            result.push(false);
        }
    }
    
    // 3. return the result array
    return result;
};

/*
    1. Problem Understanding

    TestCase 1:

    candies = [2, 3, 5, 1, 3] of length n
              [0][1][2][3][4]

    extraCandies = 3

    result = [T, T,  ,  ,  ] of length n
             [0][1][2][3][4]
    
    i = 0th kid
        totalCandies = candies[0] + extraCandies
                     = 2 + 3
                     = 5 >= otherKidsCandies [3, 5, 1, 3]
                                             [1][2][3][4]
                    5>=3 True
                    5>=5 True
                    5>=1 True
                    5>=3 True
    
    i = 1st kid
        totalCandies = candies[1] + extraCandies
                     = 3 + 3
                     = 6 >= otherKidsCandies [2, 5, 1, 3]
                                             [0][2][3][4]
                    6>=2 True
                    6>=5 True
                    6>=1 True
                    6>=3 True

    2. Algorithm - Feasible (Brute Force)

    // a. initialize an empty array <- result

    // b. Iterate or Traverse through the candies array <- iterator: i
        // for every kid @ ith position
        // find the total number of candies <- totalCandies

        // check if the totalCandies is greater than all the other kid's candies
        // except the position/index i
            // if true => push the result 'true' to the array result

            // if false => push the result 'false' to the array result
    
    // c. return the result array

    3. Implementation - any of the languages

    4. Test Cases & Debugging

    5. Optimization - 

*/