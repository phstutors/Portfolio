var $titulo = document.querySelector('h1');
var $linkedin = document.querySelector('.fa-linkedin-in');
var $github = document.querySelector('.fa-github');
var $google= document.querySelector('.fa-google-plus-g');
var $texto= document.querySelector('p');
var $links= document.querySelector('.link4');
var $links2= document.querySelector('.link');
var $links3= document.querySelector('.link2');
var $links4= document.querySelector('.link3');
var $links5= document.querySelector('.link5');


function cor(){
	document.getElementById('body').style.backgroundColor = '#9400D3'
	$titulo.style.color = "white";
    $linkedin.style.color = "white";
    $github.style.color = "white";
    $google.style.color = "white";
    $texto.style.color="white";
    $links.style.color ="white";
    $links2.style.color ="white";
    $links3.style.color ="white";
    $links4.style.color ="white";
    $links5.style.color ="white";
    $links5.style.after ="white";
    document.getElementById('noturno').style.fontSize = '0px';
    document.getElementById('claro').style.fontSize = "18px";
    document.getElementById('claro').style.color = "white";
}
function corPadrao(){
	document.getElementById('body').style.backgroundColor = 'white';
	document.getElementById('body').style.color = "black";
    $titulo.style.color = "#B310FF";
    $linkedin.style.color = "#B310FF";
    $github.style.color = "#B310FF";
    $google.style.color = "#B310FF";
    $texto.style.color="black";
    $links.style.color ="black";
    $links2.style.color ="black";
    $links3.style.color ="black";
    $links4.style.color ="black";
    $links5.style.color ="black";
    $links5.style.after ="black";
    document.getElementById('noturno').style.fontSize = '16px';
    document.getElementById('claro').style.fontSize = "0px";
    document.getElementById('claro').style.color = "white";
}