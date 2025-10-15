 const selectelement=document.querySelector("#myselect")
 selectelement.addEventListener("change",(Event)=>{
    const selectedvalue=Event.target.value;
    if(selectedvalue){
        const targetelement=document.getElementById(selectedvalue);
        if(targetelement){
            targetelement.scrollIntoView({behavior:"smooth",block:"start"});
        }
    }

 })