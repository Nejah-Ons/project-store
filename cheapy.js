var total_prix =0 ;
		  function incriment (id_item ,id_remove) { 
		  	 document.getElementById(id_remove).style.display = "flex";
          var qtt= document.getElementById(id_item)
          document.getElementById(id_item).value= (Number(qtt.value))+1;
          this. total_price();
        
        } 
    
     function remove (id_remove ,id_item , id_prix){
         total_prix -=document.getElementById(id_item).value * id_prix
         console.log(total_prix)
         $("#total").html(total_prix);
		 document.getElementById(id_remove).style.display = "none";
		    var qtt= document.getElementById(id_item)
          document.getElementById(id_item).value= 0;

			}

      $('#purshase').on("click", function(){
        alert("Thank you for your visit ")
      })


			
				
	function total_price(){

		
		 total_prix =( document.getElementById("dresse-2").value*30) + ( document.getElementById("dresse-1").value*60)+ ( document.getElementById("suit-1").value*90)
		 + ( document.getElementById("suit-2").value*80)+( document.getElementById("dresse-3").value*70)+( document.getElementById("dresse-4").value*65)
		 + ( document.getElementById("suit-3").value*95)+ ( document.getElementById("suit-4").value*85);
		$("#total").html(total_prix);
 
	}


	$(document).ready(function(){

    $("#section_dresse-1").hide();
    $("#section_dresse-2").hide();
    $("#section_dresse-3").hide();
    $("#section_dresse-4").hide();
    $("#section_suit-1").hide();
    $("#section_suit-2").hide();
    $("#section_suit-3").hide();
    $("#section_suit-4").hide();
    
				
});