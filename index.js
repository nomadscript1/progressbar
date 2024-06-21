// Lets add functionality
// get the button
const button = document.querySelector("#progress_bar_button");

// Adding Event Listener
button.addEventListener("click",()=>{
    // When function is restart or restart the process then change button text to "start"
    button.innerHTML="start"
   let i=0;

   if(i==0){
    // width for progress bar
    let width=0;
    // Time interval
    const progressBarInterval = setInterval(progressFun,150);

    // Progress Function
    function progressFun(){
        // Get progress bar div
        const progressBar = document.getElementById("progress_bar");
        if(width>=100){
            // If progress bar is completed then
            // Remove interval
            clearInterval(progressBarInterval)
            i=0;
            // Adding text to button if its(progress)  completed and can restart
            button.innerHTML="restart";
        }else{
            // If progress bar is not complete
            width++;
            // Add progress to progress bar
            progressBar.style.width=`${width}%`;
            // Add progress number to progress bar
            progressBar.innerHTML=`${width}%`;
        }
    }
   }
})