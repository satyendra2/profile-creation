 function onSubmit(){
	 var Name = document.getElementById("name").value;
	 var Phone = document.getElementById("phone").value;
	 var Email = document.getElementById("email").value;
	 var Comment = document.getElementById("comment").value;
	/*  if (Name == false){
		 alert("Please fill the name");
		 return false;
	  }
	  else if(Phone== false){
		 alert("Please fill proper phone no");
		 return false;
	  }
	  if(Phone.length<10){
		 alert("Phone no should be 10 digit");
		 return false;
	  }
	   else if(Email==false){
		 alert("Please fill proper email id");
		 return false;
	   } 
	 else if(Comment==false){
		 alert("Please do a comment");
		 return false;	 
	 }*/
	 
		 window.alert("Name:" + Name + "\n" + "Phone: " + Phone + "\n" + "Email ID: " + Email + "\n" + "Comment: " + Comment);
	 
 }