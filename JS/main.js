let inputs = document.querySelectorAll(".jsEvent");

inputs.forEach(input => {
  
  input.addEventListener("input", () => {
    
    if (input.value != "") {
      
      document.querySelector(`#${input.dataset.labelname}`).style.display = "none";
      
    } else {
      
      document.querySelector(`#${input.dataset.labelname}`).style.display = "block";
      
    }
    
  })
  
})