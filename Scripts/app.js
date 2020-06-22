//IIFE - Immediately Invoked Function Expression - anonymous self-executing function-closure
(function(){
    //named function   
   function Start()
     {
        let x=5;
        if(x>="5")
        {

            if (confirm("Are you sure?"))
            {
                console.log("X is definitely 5");
            }
            else
            {
                console.log("X is maybe 5???")
            }
        }
        console.log("%cApp Started...", "color:blue; font-size: 24px;");
        
    }

    

    //declarative format
    /* let Start =function()
     {
        console.log("App Started...");
     });

    /* let Start = ()=>
    {
        console.log("App Started...")
    } */
    window.addEventListener("load", Start);

})();



