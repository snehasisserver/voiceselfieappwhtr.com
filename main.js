
var synth = window.speechSynthesis;
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

    
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
   // if(Content == "Take my selfie."){
       // console.log("taking selfie --- ")
       // speak();
   // }
    
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:500,
    img_format:'png',
    png_quality:90
})
Webcam.attach("#camera");

setTimeout(function(){
    img_id = "selfie1";
    take_Snapshot();
   speak_data = "Taking your next selfie in 5 seconds";
   var utterthis = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterthis);
},5000);

setTimeout(function(){
    img_id = "selfie2";
    take_Snapshot();
   speak_data = "Taking your next selfie in 10 seconds";
   var utterthis = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterthis);
},10000);

setTimeout(function(){
    img_id = "selfie3";
    take_Snapshot();
   speak_data = "Taking your next selfie in 15 seconds";
   var utterthis = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterthis);
},15000);

function take_Snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri){
       if(img_id == "selfie1"){
           document.getElementById("result1").innerHTML="<img id='result1' src='"+data_uri+"'/>";
       }
       if(img_id == "selfie2"){
        document.getElementById("result2").innerHTML="<img id='result2' src='"+data_uri+"'/>";
    }
    if(img_id == "selfie3"){
        document.getElementById("result3").innerHTML="<img id='result3' src='"+data_uri+"'/>";
    }
    });
}


