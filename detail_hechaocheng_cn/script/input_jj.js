window.onload = function(){
 if(document.forms.length>0){
  for(i=0;i<document.forms[0].elements.length; i++){
   var Input = document.forms[0].elements[i];
   if(Input.type!="hidden" && Input.value.length>0){
     Input.blur();
     return;
   }else if(Input.type!="hidden"){
    Input.focus();return
    }
  }
 }
}