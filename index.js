document.getElementById("btn").addEventListener("click",()=>{
  let input = document.getElementById("data").value
  if(input.length > 0 && input){
   let unsortedArr= input.split(",")
   if(unsortedArr.length>1){
     this.sortArr(unsortedArr)
   }else{
      document.getElementById("sorted").firstElementChild=`<h3>${unsortedArr[0]}</h3>`
   }
  }else{
    alert("Input cannot be left blank")
  }
})
