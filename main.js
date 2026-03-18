


    
// document.getElementById("submit").addEventListener("click",function(event){
    // let input = document.getElementById("input").value ;
    // //let btn = document.getElementById("submit") ;
    // let list = document.getElementById("list") ;
//     let listItem = document.createElement("li");
//     if(input ==""){
//       alert("Do not  empty spaces !!");
//     }
//    listItem.textContent = input;

//    list.appendChild(listItem);
//    document.getElementById("input").value ="";
   


// })

document.getElementById("submit").addEventListener("click" , function(event){

    let task = document.getElementById("input").value ;
    
    let list = document.getElementById("list") ;
    let output = document.getElementById("output");
    if(task ==""){
            //   alert("Enter a task !!");
            //   return;
            output.innerHTML ="Do not leave empty spaces!!";
            output.style.color ="red";
            return;

            }


          // creating list item
            let listItem = document.createElement("li");
            listItem.textContent = task;
            // creating delete button
            let DeletBTN = document.createElement("button");
            DeletBTN.textContent= "Delete";
            // creating Toggle button / Mark as done button
            let Toggle= document.createElement("button");
            Toggle.textContent= "Mark as done";
            
            // appendibng delete button
            listItem.appendChild(DeletBTN);
            // appending Toggle
            listItem.appendChild(Toggle);
            list.appendChild(listItem);
            // adding functionality to delete button
            DeletBTN.addEventListener("click", function(){


                list.removeChild(listItem)
            })
             // adding functionality to Toggle button
            Toggle.addEventListener("click", function(){

                listItem.style.textDecoration= "line-through";
            })

            document.getElementById("task").value="";


})