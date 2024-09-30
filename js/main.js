const form=document.querySelector(".form");
const inputForm=document.querySelector(".inputForm");
// console.log(inputForm)

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form enviado");

    if(inputForm.value===""){
        console.log("LLene el input")
    }else{
        console.log(`El valor del input es: ${inputForm.value}`)
        inputForm.value="";
    }

}


form.addEventListener("submit",handleSubmit)



