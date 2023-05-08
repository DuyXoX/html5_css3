function mysignup() {
    let tk=0,em=0,mk=0,lmk=0;
    let name=document.forms["myForm"]["fname"].value;
    if(name=="" || name.length<1){
      document.getElementById("errhovaten").innerHTML="Vui lòng nhập tên!";
      document.getElementById("username").setAttribute('class','');
      document.getElementById("errhovaten").focus();            
    }else{
      document.getElementById("errhovaten").innerHTML="";
      document.getElementById("username").setAttribute('class','');
      tk=1;
    }
    /*
    var ggg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    */
    let ename=document.forms["myForm"]["ename"].value;    
    if(ename==""){
      document.getElementById("erremail").innerHTML="Vui lòng nhập email!";
      document.getElementById("email").setAttribute('class','');
      document.getElementById("erremail").focus();  
    }  
    else{
      document.getElementById("erremail").innerHTML="";
      document.getElementById("email").setAttribute('class','');
      em=1;
    }
    let pname=document.forms["myForm"]["pname"].value;
    if(pname==""){
      document.getElementById("errpassword").innerHTML="Vui lòng nhập mật khẩu!";
      document.getElementById("password").setAttribute('class','');
      document.getElementById("errpassword").focus();  
    }
    if(pname.length<6){
      document.getElementById("errpassword").innerHTML="Mật khẩu phải trên 6 ký tự!";
      document.getElementById("password").setAttribute('class','');
      document.getElementById("errpassword").focus();  
    }
    else{ 
      document.getElementById("errpassword").innerHTML="";
      document.getElementById("password").setAttribute('class','');
      mk=1;
    }
    let ppname=document.forms["myForm"]["ppname"].value;
    if(ppname!=pname){
      document.getElementById("errppassword").innerHTML="Mật khẩu phải khớp với nhau!";
      document.getElementById("ppassword").setAttribute('class','');
      document.getElementById("errppassword").focus();  
    }
    else{ 
      document.getElementById("errppassword").innerHTML="";
      document.getElementById("ppassword").setAttribute('class','');
      lmk=1;
    }
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
      username: username,
      email: email,
      password: password,
    };
    if(tk==1&&em==1&&mk==1&&lmk==1){ 
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng ký thành công");
    }else{
      alert("Đăng ký thất bại");
    }

  }

  function mylogin() {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user||user==null) {
      alert("Vui lòng nhập thông tin!");     
    }else if(username==""){
      alert("Vui lòng nhập tên tài khoảng!");
    }else if(email==""){
      alert("Vui lòng nhập thông tin Email!");
    }else if(password==""){
      alert("Vui lòng nhập mật khẩu!");
    }else if (
      username == data.username &&
      email == data.email &&
      password == data.password
    ){
      alert("Đăng nhập thành công");
      window.location.href = "trangchu.html";
    }else {
      alert("Đăng nhập thất bại!");
      alert("Sai tên tài khoản email hoặc mật khẩu!");
    }
  }


