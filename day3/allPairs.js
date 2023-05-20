let nums = [2, 7, 11, 15];

for (let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++){
        console.log(nums[i], nums[j]);
    }
}