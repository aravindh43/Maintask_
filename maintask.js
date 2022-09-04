// start of hamburger menu
const hamburger=document.querySelector(".hamburger");
const navmenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
     navmenu.classList.toggle("active");
     })
 document.querySelectorAll(".link1").forEach(n => n.addEventListener("click",() =>{
     hamburger.classList.remove("active");
     navmenu.classList.remove("active");
    
}))
  // end of hamburger menu

  //start of Email validation
  
document.getElementById("subscribe").addEventListener("click", function() {
 
  var email=document.getElementById("email").value;
      document.getElementById("email").value=" ";
      
      
  if(email == ""){


    document.getElementById("alertbox").style.display="block";
    document.getElementById("over").style.display="block";
    document.querySelector('h6').innerHTML="Please Provide Email Address:("; 

    document.querySelector('.ok').addEventListener("click", function() {
      document.getElementById("alertbox").style.display="none"; 
      document.getElementById("over").style.display="none";
    })
  

return true;
  }
  if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ){
    document.getElementById("alertbox").style.display="block";
    document.getElementById("over").style.display="block";
    document.querySelector('h6').innerHTML=email+" "+"SUBSCRIBED:)";
    
    document.getElementById("ok").addEventListener("click", function() {
      document.getElementById("alertbox").style.display="none";
      document.getElementById("over").style.display="none";
      return true;
    })
   
  }
  else{
    document.getElementById("alertbox").style.display="block";
    document.getElementById("over").style.display="block";
    alertbox.querySelector('h6').innerHTML=email+" "+ "is"+ " "+"incorrect email ID";

    document.getElementById("ok").addEventListener("click", function() {
    document.getElementById("alertbox").style.display="none";
    document.getElementById("over").style.display="none";
    return false;
    })
  } 
  })
 


// for mobile view

document.getElementById("subscribe1").addEventListener("click", function() {
  var email1=document.getElementById("email1").value;
      document.getElementById("email1").value=" ";
    
  if(email1 == ""){
   
    document.getElementById("alertbox1").style.display="block";
    document.getElementById("over").style.display="block";
    alertbox1.querySelector('h6').innerHTML="Please Provide Email Address:("; 
    
   
    document.querySelector('.ok1').addEventListener("click", function() {
      document.getElementById("alertbox1").style.display="none"; 
      document.getElementById("over").style.display="none";

})
return true;
  }
  if(email1.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ){
    document.getElementById("alertbox1").style.display="block";
    document.getElementById("over").style.display="block";
    alertbox1.querySelector('h6').innerHTML=email1+" "+"SUBSCRIBED:)";
    
    document.getElementById("ok1").addEventListener("click", function() {
      document.getElementById("alertbox1").style.display="none";
      document.getElementById("over").style.display="none";
    return true;
    })
   
  }
  else{
    document.getElementById("alertbox1").style.display="block";
    document.getElementById("over").style.display="block";
    alertbox1.querySelector('h6').innerHTML=email1+" "+ "is"+ " "+"incorrect email ID";

    document.getElementById("ok1").addEventListener("click", function() {
    document.getElementById("alertbox1").style.display="none";
    document.getElementById("over").style.display="none";
   
  })
  return false;
  }
  
  
})


//end of Email validation

//start of dynamic content
const data = [
  {
    profile:"Assets/Userpic.svg",
    quote:"Assets/Twitter.svg",
    message:"Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
    Author:"Katherine Bishop",
    facebook:"Assets/Facebook.svg",
    twitter:"Assets/Twitter1.svg"
  },
  {
    profile:"Assets/Userpic.svg",
    quote:"Assets/Twitter.svg",
    message:"Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
    Author:"Bertha Blake",
    facebook:"Assets/Facebook.svg",
    twitter:"Assets/Twitter1.svg"
  },
  {
    profile:"Assets/Userpic.svg",
    quote:"Assets/Twitter.svg",
    message:"Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
    Author:"Sarah Bailey",
    facebook:"Assets/Facebook.svg",
    twitter:"Assets/Twitter1.svg"
  }
]
let scriptTag ="";
data.forEach((element) => {
  scriptTag +="<div class='whiteboxes'><div class='whitebox'>";
  scriptTag +="<div class='profile'><img src='"+element.profile+ "' alt='profile'/><img src=' "+element.quote+"' class='quote' alt='quote'/></div>";
  scriptTag +="<p>"+ element.message+"</p>";
  scriptTag +="<div class='author'><h6>" + element.Author+"</h6><div><img src='"+element.facebook+"' class='twfb' alt='facebook'/><img src='" +element.twitter +"' class='twfb' alt='twitter'/>";
  scriptTag +="</div></div></div></div>";
});
document.querySelector(".whiteboxes").innerHTML=scriptTag;
//end of dynamic content
