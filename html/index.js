/*
3. let arr1 = ['icecream', 'pizza', 'momo'];
   let arr2 = ['fruits', 'pizza', 'veggies'];
   find the common item in both arrays
   result ['pizza']
*/ 

   let arr1 = ['icecream', 'pizza', 'momo'];
   let arr2 = ['fruits', 'pizza', 'veggies'];
   
   // implicit function
   const getCommon = (a1, a2) => a1.filter((item) => a2.includes(item));
   console.log(getCommon(arr1, arr2));
