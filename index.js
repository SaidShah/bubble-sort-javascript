
document.getElementById("btn").addEventListener("click",()=>{
  let input = document.getElementById("data").value
  if(input.length > 0 && input){
   let unsortedArr= input.split(",")
   if(unsortedArr.length>1){
     this.sortArr(unsortedArr)

   }else{
      document.getElementById("unsorted").innerHTML=`<h2>Your Unsorted Array: ${unsortedArr[0]}</h2>`
      document.getElementById("sorted").innerHTML=`<h2>Your Sorted Array: ${unsortedArr[0]}</h2>`
   }
  }else{
    alert("Input cannot be left blank")
  }
  document.getElementById("data").value = ''
})

 sortArr=(array)=>{
   document.getElementById("unsorted").innerHTML=`<h1>Your Unsorted Array: ${array.join(",")}</h1>`
   for(let i = 0; i < array.length; i++) {
    for(let j = 1; j < array.length; j++) {
      if(array[j-1] > array[j]) {
        let temp = array[j-1];
        array[j-1] = array[j];
        array[j] = temp;
      }
    }
  }

  document.getElementById("sorted").innerHTML=`<h1>Your Sorted Array: ${array.join(",")}</h1>`
 }
