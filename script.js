/* eventos */

var nome01 = "Organização e gestão do tempo";
var data01 = "31/01/2023";
var aoVivo01 = "https://us06web.zoom.us/j/85814983939";
var gravacao01 = "";

var nome02 = "Como fugir do plágio e dicas da ABNT";
var data02 = "02/02/2023";
var aoVivo02 = "https://us06web.zoom.us/j/81520404900";
var gravacao02 = "";

var nome03 = "Inteligência Emocional";
var data03 = "07/02/2023";
var aoVivo03 = "https://us06web.zoom.us/j/83074334509";
var gravacao03 = "";

var nome04 = "A Indústria 4.0";
var data04 = "09/02/2023";
var aoVivo04 = "https://us06web.zoom.us/j/84153733982";
var gravacao04 = "";

var nome05 = "Técnicas de Estudos";
var data05 = "14/02/2023";
var aoVivo05 = "https://us06web.zoom.us/j/84660002566";
var gravacao05 = "";

var nome06 = "Planejamento de Carreira";
var data06 = "16/02/2023";
var aoVivo06 = "https://us06web.zoom.us/j/87062978949";
var gravacao06 = "";

var nome07 = "";
var data07 = "";
var aoVivo07 = "";
var gravacao07 = "";

var nome08 = "";
var data08 = "";
var aoVivo08 = "";
var gravacao08 = "";

var nome09 = "";
var data09 = "";
var aoVivo09 = "";
var gravacao09 = "";

var nome10 = "";
var data10 = "";
var aoVivo10 = "";
var gravacao10 = "";


/* quadrados */

if(aoVivo01 == "" & gravacao01 == ""){
    document.getElementById("texto02").innerHTML = "Aguarde o desbloqueio dessa fase!";
}
else if(gravacao01 != ""){
    document.getElementById("texto02").innerHTML = data01 + "<br><br>" + nome01 + "<br><br><a target='_blank' href='" + gravacao01 + "'>Acessar Gravação</a>";
}
else if(aoVivo01 != ""){
    document.getElementById("texto02").innerHTML = data01 + "<br><br>" + nome01 + "<br><br><a target='_blank' href='" + aoVivo01 + "'>Acessar Webconferência</a>";
}


if(aoVivo02 == "" & gravacao02 == ""){
    document.getElementById("texto04").innerHTML = "Aguarde o desbloqueio dessa fase!";
}
else if(gravacao02 != ""){
    document.getElementById("texto04").innerHTML = data02 + "<br><br>" + nome02 + "<br><br><a target='_blank' href='" + gravacao02 + "'>Acessar Gravação</a>";
}
else if(aoVivo02 != ""){
    document.getElementById("texto04").innerHTML = data02 + "<br><br>" + nome02 + "<br><br><a target='_blank' href='" + aoVivo02 + "'>Acessar Webconferência</a>";
}


if(aoVivo03 == "" & gravacao03 == ""){
    document.getElementById("texto10").innerHTML = "Aguarde o desbloqueio dessa fase!";
}
else if(gravacao03 != ""){
    document.getElementById("texto10").innerHTML = data03 + "<br><br>" + nome03 + "<br><br><a target='_blank' href='" + gravacao03 + "'>Acessar Gravação</a>";
}
else if(aoVivo03 != ""){
    document.getElementById("texto10").innerHTML = data03 + "<br><br>" + nome03 + "<br><br><a target='_blank' href='" + aoVivo03 + "'>Acessar Webconferência</a>";
}


if(aoVivo04 == "" & gravacao04 == ""){
    document.getElementById("texto15").innerHTML = "Aguarde o desbloqueio dessa fase!";
}
else if(gravacao04 != ""){
    document.getElementById("texto15").innerHTML = data04 + "<br><br>" + nome04 + "<br><br><a target='_blank' href='" + gravacao04 + "'>Acessar Gravação</a>";
}
else if(aoVivo04 != ""){
    document.getElementById("texto15").innerHTML = data04 + "<br><br>" + nome04 + "<br><br><a target='_blank' href='" + aoVivo04 + "'>Acessar Webconferência</a>";
}


if(aoVivo05 == "" & gravacao05 == ""){
    document.getElementById("texto13").innerHTML = "Aguarde o desbloqueio dessa fase!";
}
else if(gravacao05 != ""){
    document.getElementById("texto13").innerHTML = data05 + "<br><br>" + nome05 + "<br><br><a target='_blank' href='" + gravacao05 + "'>Acessar Gravação</a>";
}
else if(aoVivo05 != ""){
    document.getElementById("texto13").innerHTML = data05 + "<br><br>" + nome05 + "<br><br><a target='_blank' href='" + aoVivo05 + "'>Acessar Webconferência</a>";
}


if(aoVivo06 == "" & gravacao06 == ""){
    document.getElementById("texto12").innerHTML = "Aguarde o desbloqueio dessa fase!";
}
else if(gravacao06 != ""){
    document.getElementById("texto12").innerHTML = data06 + "<br><br>" + nome06 + "<br><br><a target='_blank' href='" + gravacao06 + "'>Acessar Gravação</a>";
}
else if(aoVivo06 != ""){
    document.getElementById("texto12").innerHTML = data06 + "<br><br>" + nome06 + "<br><br><a target='_blank' href='" + aoVivo06 + "'>Acessar Webconferência</a>";
}


if(aoVivo07 == "" & gravacao07 == ""){
    document.getElementById("texto16").innerHTML = "Aguarde o desbloqueio dessa fase!";
}
else if(gravacao07 != ""){
    document.getElementById("texto16").innerHTML = data07 + "<br><br>" + nome07 + "<br><br><a target='_blank' href='" + gravacao07 + "'>Acessar Gravação</a>";
}
else if(aoVivo07 != ""){
    document.getElementById("texto16").innerHTML = data07 + "<br><br>" + nome07 + "<br><br><a target='_blank' href='" + aoVivo07 + "'>Acessar Webconferência</a>";
}


if(aoVivo08 == "" & gravacao08 == ""){
    document.getElementById("texto21").innerHTML = "Aguarde o desbloqueio dessa fase!";
}
else if(gravacao08 != ""){
    document.getElementById("texto21").innerHTML = data08 + "<br><br>" + nome08 + "<br><br><a target='_blank' href='" + gravacao08 + "'>Acessar Gravação</a>";
}
else if(aoVivo08 != ""){
    document.getElementById("texto21").innerHTML = data08 + "<br><br>" + nome08 + "<br><br><a target='_blank' href='" + aoVivo08 + "'>Acessar Webconferência</a>";
}


if(aoVivo09 == "" & gravacao09 == ""){
    document.getElementById("texto23").innerHTML = "Aguarde o desbloqueio dessa fase!";
}
else if(gravacao09 != ""){
    document.getElementById("texto23").innerHTML = data09 + "<br><br>" + nome09 + "<br><br><a target='_blank' href='" + gravacao09 + "'>Acessar Gravação</a>";
}
else if(aoVivo09 != ""){
    document.getElementById("texto23").innerHTML = data09 + "<br><br>" + nome09 + "<br><br><a target='_blank' href='" + aoVivo09 + "'>Acessar Webconferência</a>";
}


if(aoVivo10 == "" & gravacao10 == ""){
    document.getElementById("texto24").innerHTML = "Aguarde o desbloqueio dessa fase!";
}
else if(gravacao10 != ""){
    document.getElementById("texto24").innerHTML = data10 + "<br><br>" + nome10 + "<br><br><a target='_blank' href='" + gravacao10 + "'>Acessar Gravação</a>";
}
else if(aoVivo10 != ""){
    document.getElementById("texto24").innerHTML = data10 + "<br><br>" + nome10 + "<br><br><a target='_blank' href='" + aoVivo10 + "'>Acessar Webconferência</a>";
}
