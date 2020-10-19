function validarFormulario(){
 
  var usr = document.getElementById('usuario').value;
  var psw = document.getElementById('pass').value;
  

  var banderaRBTN = false;

  //Test campo obligatorio
  if(usr == null || usr.length == 0 || /^\s+$/.test(usr)){
    alert('ERROR: El campo usuario no debe ir vacio o lleno de solamente espacios en blanco');
    return false;
  }
   //Test campo obligatorio
   if(psw == null || psw.length == 0 || /^\s+$/.test(psw)){
    alert('ERROR: El campo password no debe ir vacio o lleno de solamente espacios en blanco');
    return false;
  }
  if (!(/@/g.test(usr))){
    alert('ERROR: El campo usr debe tener un arroba');
    return false;
  }


  return true;
}