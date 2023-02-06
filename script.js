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

if(aoVivo01 == "" & gravacao01 == "" & nome01 == "" & data01 == ""){
    document.getElementById("quadrado02").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>timer</div> <div class='descricaoTexto'>FASE 01</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
}
else if(gravacao01 != ""){
    document.getElementById("quadrado02").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>timer</div> <div class='descricaoTexto'>FASE 01</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data01 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao01 + "'>" + nome01 + "</a></p></div></div>";
}
else if(aoVivo01 != ""){
    document.getElementById("quadrado02").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>timer</div> <div class='descricaoTexto'>FASE 01</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data01 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo01 + "'>" + nome01 + "</a></p></div></div>";
}


if(aoVivo02 == "" & gravacao02 == "" & nome02 == "" & data02 == ""){
    document.getElementById("quadrado04").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>book</div> <div class='descricaoTexto'>FASE 02</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
}
else if(gravacao02 != ""){
    document.getElementById("quadrado04").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>book</div> <div class='descricaoTexto'>FASE 02</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data02 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao02 + "'>" + nome02 + "</a></p></div></div>";
}
else if(aoVivo02 != ""){
    document.getElementById("quadrado04").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>book</div> <div class='descricaoTexto'>FASE 02</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data02 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo02 + "'>" + nome02 + "</a></p></div></div>";
}


if(aoVivo03 == "" & gravacao03 == "" & nome03 == "" & data03 == ""){
    document.getElementById("quadrado06").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>neurology</div> <div class='descricaoTexto'>FASE 03</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
}
else if(gravacao03 != ""){
    document.getElementById("quadrado06").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>neurology</div> <div class='descricaoTexto'>FASE 03</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data03 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao03 + "'>" + nome03 + "</a></p></div></div>";
}
else if(aoVivo03 != ""){
    document.getElementById("quadrado06").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>neurology</div> <div class='descricaoTexto'>FASE 03</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data03 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo03 + "'>" + nome03 + "</a></p></div></div>";
}


if(aoVivo04 == "" & gravacao04 == "" & nome04 == "" & data04 == ""){
    document.getElementById("quadrado12").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>computer</div> <div class='descricaoTexto'>FASE 04</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
}
else if(gravacao04 != ""){
    document.getElementById("quadrado12").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>computer</div> <div class='descricaoTexto'>FASE 04</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data04 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao04 + "'>" + nome04 + "</a></p></div></div>";
}
else if(aoVivo04 != ""){
    document.getElementById("quadrado12").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>computer</div> <div class='descricaoTexto'>FASE 04</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data04 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo04 + "'>" + nome04 + "</a></p></div></div>";
}


if(aoVivo05 == "" & gravacao05 == "" & nome05 == "" & data05 == ""){
    document.getElementById("quadrado16").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>book</div> <div class='descricaoTexto'>FASE 05</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
}
else if(gravacao05 != ""){
    document.getElementById("quadrado16").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>book</div> <div class='descricaoTexto'>FASE 05</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data05 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao05 + "'>" + nome05 + "</a></p></div></div>";
}
else if(aoVivo05 != ""){
    document.getElementById("quadrado16").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>book</div> <div class='descricaoTexto'>FASE 05</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data05 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo05 + "'>" + nome05 + "</a></p></div></div>";
}


if(aoVivo06 == "" & gravacao06 == "" & nome06 == "" & data06 == ""){
    document.getElementById("quadrado15").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>engineering</div> <div class='descricaoTexto'>FASE 06</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
}
else if(gravacao06 != ""){
    document.getElementById("quadrado15").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>engineering</div> <div class='descricaoTexto'>FASE 06</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data06 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao06 + "'>" + nome06 + "</a></p></div></div>";
}
else if(aoVivo06 != ""){
    document.getElementById("quadrado15").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>engineering</div> <div class='descricaoTexto'>FASE 06</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data06 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo06 + "'>" + nome06 + "</a></p></div></div>";
}


if(aoVivo07 == "" & gravacao07 == "" & nome07 == "" & data07 == ""){
    document.getElementById("quadrado13").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 07</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
}
else if(gravacao07 != ""){
    document.getElementById("quadrado13").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 07</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data07 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao07 + "'>" + nome07 + "</a></p></div></div>";
}
else if(aoVivo07 != ""){
    document.getElementById("quadrado13").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 07</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data07 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo07 + "'>" + nome07 + "</a></p></div></div>";
}


if(aoVivo08 == "" & gravacao08 == "" & nome08 == "" & data08 == ""){
    document.getElementById("quadrado25").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 08</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
}
else if(gravacao08 != ""){
    document.getElementById("quadrado25").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 08</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data08 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao08 + "'>" + nome08 + "</a></p></div></div>";
}
else if(aoVivo08 != ""){
    document.getElementById("quadrado25").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 08</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data08 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo08 + "'>" + nome08 + "</a></p></div></div>";
}


if(aoVivo09 == "" & gravacao09 == "" & nome09 == "" & data09 == ""){
    document.getElementById("quadrado27").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 09</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
}
else if(gravacao09 != ""){
    document.getElementById("quadrado27").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 09</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data09 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao09 + "'>" + nome09 + "</a></p></div></div>";
}
else if(aoVivo09 != ""){
    document.getElementById("quadrado27").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 09</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data09 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo09 + "'>" + nome09 + "</a></p></div></div>";
}


if(aoVivo10 == "" & gravacao10 == "" & nome10 == "" & data10 == ""){
    document.getElementById("quadrado29").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 10</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
}
else if(gravacao10 != ""){
    document.getElementById("quadrado29").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 10</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data10 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao10 + "'>" + nome10 + "</a></p></div></div>";
}
else if(aoVivo10 != ""){
    document.getElementById("quadrado29").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 10</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data10 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo10 + "'>" + nome10 + "</a></p></div></div>";
}

