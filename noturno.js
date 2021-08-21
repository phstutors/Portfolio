var $titulo = document.querySelector('h1');
var $linkedin = document.querySelector('.fa-linkedin-in');
var $github = document.querySelector('.fa-github');
var $google= document.querySelector('.fa-google-plus-g');
var $texto= document.querySelector('.introduction');
var $texto2= document.querySelector('p');
var $texto3= document.querySelector('.texto');
var $links= document.querySelector('.link4');
var $links2= document.querySelector('.link');
var $links3= document.querySelector('.link2');
var $links4= document.querySelector('.link3');
var $links5= document.querySelector('.link5');
var $btn= document.querySelector('.btn');


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
    $links5.style.color ="white";
    $texto2.style.color ="white";
    $texto3.style.color ="white";
    $btn.style.backgroundColor ="white";
    $btn.style.color ="black";
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
    $texto2.style.color ="black";
    $texto3.style.color ="black";
    $btn.style.backgroundColor ="#B310FF";
    $btn.style.color ="white";
    document.getElementById('noturno').style.fontSize = '16px';
    document.getElementById('claro').style.fontSize = "0px";
    document.getElementById('claro').style.color = "white";
}