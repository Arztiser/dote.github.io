(function () {
 const src = "https://unpkg.com/sweetalert@2.1.2/dist/sweetalert.min.js";
 var img = new Image();
 img.src = "https://"+window.location.hostname+"/favicon.ico";
 document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
 img.onerror = function(){
 swal({
  title: window.hostname+" is down!",
  text: "We noticed that the website is currently unavailable, please try again later.",
  icon: "warning",
  button: "Uh oh!",
});
 }
 img.onload = function(){
 swal({
  title: window.hostname+" is Up!",
  text: "We noticed that the website is currently Up! WooHoo!",
  icon: "success",
  button: "Yeah boi!",
});
 }
   // document.write('<scr' + 'ipt></scr' + 'ipt>');
})