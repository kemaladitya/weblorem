  // function Login(){
        
  //        var username=document.login.username.value;
  //        username=username.toLowerCase();
  //       var password=document.login.password.value;
  //       password=password.toLowerCase();
        
  //           if (username=="kemal" && password=="123"){
  //           window.open( "index2.html");
  //           }
  //           else{
  //           alert("User name dan password anda salah!");
  //           }
  //       }


 // function login(passwordAdmin) {
//   if(passwordAdmin=='admin'){
//     window.location= "index2.html";
//   }else{
//     alert("You entered the wrong password!")
//   }
// }

function namaPassword(username, password){
  if(username == "admin" && password == "kemal"){
    window.location.assign('index2.html');
    alert("ok?");
  } else{
    alert("coba lagi")
  }

}