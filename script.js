/* eventos */

var nome01 = "Organização e gestão do tempo";
var data01 = "31/01/2023";
var aoVivo01 = "https://us06web.zoom.us/j/85814983939";
var gravacao01 = "https://www.youtube.com/embed/KgWjNtx5kHw";

var nome02 = "Como fugir do plágio e dicas da ABNT";
var data02 = "02/02/2023";
var aoVivo02 = "https://us06web.zoom.us/j/81520404900";
var gravacao02 = "https://www.youtube.com/embed/DUlbOW3wcBg";

var nome03 = "Inteligência Emocional";
var data03 = "07/02/2023";
var aoVivo03 = "https://us06web.zoom.us/j/83074334509";
var gravacao03 = "https://www.youtube.com/embed/MCOrvl8NFFY";

var nome04 = "A Indústria 4.0";
var data04 = "09/02/2023";
var aoVivo04 = "https://us06web.zoom.us/j/84153733982";
var gravacao04 = "https://www.youtube.com/embed/";

var nome05 = "Técnicas de Estudos";
var data05 = "14/02/2023";
var aoVivo05 = "https://stream.meet.google.com/stream/9105ef05-9655-4913-a2f8-f15e02b5d858";
var gravacao05 = "https://www.youtube.com/embed/";

var nome06 = "Planejamento de Carreira";
var data06 = "16/02/2023";
var aoVivo06 = " https://stream.meet.google.com/stream/70b73d23-312a-4c69-8f1c-2d65d9ad5d76";
var gravacao06 = "https://www.youtube.com/embed/";

var nome07 = "";
var data07 = "";
var aoVivo07 = "";
var gravacao07 = "https://www.youtube.com/embed/";

var nome08 = "";
var data08 = "";
var aoVivo08 = "";
var gravacao08 = "https://www.youtube.com/embed/";

var nome09 = "";
var data09 = "";
var aoVivo09 = "";
var gravacao09 = "https://www.youtube.com/embed/";

var nome10 = "";
var data10 = "";
var aoVivo10 = "";
var gravacao10 = "https://www.youtube.com/embed/";


/* quadrados */

if(aoVivo01 == "" & gravacao01 == "https://www.youtube.com/embed/" & nome01 == "" & data01 == ""){
    document.getElementById("quadrado02").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>timer</div> <div class='descricaoTexto'>FASE 01</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
    
    document.getElementById("quadrado02").classList.add('bloqueado');
    document.getElementById("quadrado02").classList.remove('fase');
}
else if(gravacao01 != "https://www.youtube.com/embed/"){
    document.getElementById("quadrado02").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>timer</div> <div class='descricaoTexto'>FASE 01</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data01 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao01 + "' class='link'>" + nome01 + "</a></p></div></div>";

    document.getElementById("quadrado02").classList.remove('bloqueado');
    document.getElementById("quadrado02").classList.add('fase');
}
else if(aoVivo01 != ""){
    document.getElementById("quadrado02").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>timer</div> <div class='descricaoTexto'>FASE 01</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data01 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo01 + "' class='link'>" + nome01 + "</a></p></div></div>";

    document.getElementById("quadrado02").classList.remove('bloqueado');
    document.getElementById("quadrado02").classList.add('fase');
}


if(aoVivo02 == "" & gravacao02 == "https://www.youtube.com/embed/" & nome02 == "" & data02 == ""){
    document.getElementById("quadrado04").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>book</div> <div class='descricaoTexto'>FASE 02</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
    
    document.getElementById("quadrado04").classList.add('bloqueado');
    document.getElementById("quadrado04").classList.remove('fase');
}
else if(gravacao02 != "https://www.youtube.com/embed/"){
    document.getElementById("quadrado04").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>book</div> <div class='descricaoTexto'>FASE 02</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data02 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao02 + "' class='link'>" + nome02 + "</a></p></div></div>";

    document.getElementById("quadrado04").classList.remove('bloqueado');
    document.getElementById("quadrado04").classList.add('fase');
}
else if(aoVivo02 != ""){
    document.getElementById("quadrado04").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>book</div> <div class='descricaoTexto'>FASE 02</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data02 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo02 + "' class='link'>" + nome02 + "</a></p></div></div>";

    document.getElementById("quadrado04").classList.remove('bloqueado');
    document.getElementById("quadrado04").classList.add('fase');
}


if(aoVivo03 == "" & gravacao03 == "https://www.youtube.com/embed/" & nome03 == "" & data03 == ""){
    document.getElementById("quadrado06").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>neurology</div> <div class='descricaoTexto'>FASE 03</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
    
    document.getElementById("quadrado06").classList.add('bloqueado');
    document.getElementById("quadrado06").classList.remove('fase');
}
else if(gravacao03 != "https://www.youtube.com/embed/"){
    document.getElementById("quadrado06").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>neurology</div> <div class='descricaoTexto'>FASE 03</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data03 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao03 + "' class='link'>" + nome03 + "</a></p></div></div>";

    document.getElementById("quadrado06").classList.remove('bloqueado');
    document.getElementById("quadrado06").classList.add('fase');
}
else if(aoVivo03 != ""){
    document.getElementById("quadrado06").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>neurology</div> <div class='descricaoTexto'>FASE 03</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data03 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo03 + "' class='link'>" + nome03 + "</a></p></div></div>";

    document.getElementById("quadrado06").classList.remove('bloqueado');
    document.getElementById("quadrado06").classList.add('fase');
}


if(aoVivo04 == "" & gravacao04 == "https://www.youtube.com/embed/" & nome04 == "" & data04 == ""){
    document.getElementById("quadrado12").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>computer</div> <div class='descricaoTexto'>FASE 04</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
    
    document.getElementById("quadrado12").classList.add('bloqueado');
    document.getElementById("quadrado12").classList.remove('fase');
}
else if(gravacao04 != "https://www.youtube.com/embed/"){
    document.getElementById("quadrado12").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>computer</div> <div class='descricaoTexto'>FASE 04</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data04 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao04 + "' class='link'>" + nome04 + "</a></p></div></div>";

    document.getElementById("quadrado12").classList.remove('bloqueado');
    document.getElementById("quadrado12").classList.add('fase');
}
else if(aoVivo04 != ""){
    document.getElementById("quadrado12").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>computer</div> <div class='descricaoTexto'>FASE 04</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data04 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo04 + "' class='link'>" + nome04 + "</a></p></div></div>";

    document.getElementById("quadrado12").classList.remove('bloqueado');
    document.getElementById("quadrado12").classList.add('fase');
}


if(aoVivo05 == "" & gravacao05 == "https://www.youtube.com/embed/" & nome05 == "" & data05 == ""){
    document.getElementById("quadrado16").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>book</div> <div class='descricaoTexto'>FASE 05</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
    
    document.getElementById("quadrado16").classList.add('bloqueado');
    document.getElementById("quadrado16").classList.remove('fase');
}
else if(gravacao05 != "https://www.youtube.com/embed/"){
    document.getElementById("quadrado16").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>book</div> <div class='descricaoTexto'>FASE 05</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data05 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao05 + "' class='link'>" + nome05 + "</a></p></div></div>";

    document.getElementById("quadrado16").classList.remove('bloqueado');
    document.getElementById("quadrado16").classList.add('fase');
}
else if(aoVivo05 != ""){
    document.getElementById("quadrado16").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>book</div> <div class='descricaoTexto'>FASE 05</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data05 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo05 + "' class='link'>" + nome05 + "</a></p></div></div>";

    document.getElementById("quadrado16").classList.remove('bloqueado');
    document.getElementById("quadrado16").classList.add('fase');
}


if(aoVivo06 == "" & gravacao06 == "https://www.youtube.com/embed/" & nome06 == "" & data06 == ""){
    document.getElementById("quadrado15").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>engineering</div> <div class='descricaoTexto'>FASE 06</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
    
    document.getElementById("quadrado15").classList.add('bloqueado');
    document.getElementById("quadrado15").classList.remove('fase');
}
else if(gravacao06 != "https://www.youtube.com/embed/"){
    document.getElementById("quadrado15").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>engineering</div> <div class='descricaoTexto'>FASE 06</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data06 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao06 + "' class='link'>" + nome06 + "</a></p></div></div>";

    document.getElementById("quadrado15").classList.remove('bloqueado');
    document.getElementById("quadrado15").classList.add('fase');
}
else if(aoVivo06 != ""){
    document.getElementById("quadrado15").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>engineering</div> <div class='descricaoTexto'>FASE 06</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data06 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo06 + "' class='link'>" + nome06 + "</a></p></div></div>";

    document.getElementById("quadrado15").classList.remove('bloqueado');
    document.getElementById("quadrado15").classList.add('fase');
}


if(aoVivo07 == "" & gravacao07 == "https://www.youtube.com/embed/" & nome07 == "" & data07 == ""){
    document.getElementById("quadrado13").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 07</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
    
    document.getElementById("quadrado13").classList.add('bloqueado');
    document.getElementById("quadrado13").classList.remove('fase');
}
else if(gravacao07 != "https://www.youtube.com/embed/"){
    document.getElementById("quadrado13").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 07</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data07 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao07 + "' class='link'>" + nome07 + "</a></p></div></div>";

    document.getElementById("quadrado13").classList.remove('bloqueado');
    document.getElementById("quadrado13").classList.add('fase');
}
else if(aoVivo07 != ""){
    document.getElementById("quadrado13").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 07</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data07 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo07 + "' class='link'>" + nome07 + "</a></p></div></div>";

    document.getElementById("quadrado13").classList.remove('bloqueado');
    document.getElementById("quadrado13").classList.add('fase');
}


if(aoVivo08 == "" & gravacao08 == "https://www.youtube.com/embed/" & nome08 == "" & data08 == ""){
    document.getElementById("quadrado25").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 08</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
    
    document.getElementById("quadrado25").classList.add('bloqueado');
    document.getElementById("quadrado25").classList.remove('fase');
}
else if(gravacao08 != "https://www.youtube.com/embed/"){
    document.getElementById("quadrado25").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 08</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data08 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao08 + "' class='link'>" + nome08 + "</a></p></div></div>";

    document.getElementById("quadrado25").classList.remove('bloqueado');
    document.getElementById("quadrado25").classList.add('fase');
}
else if(aoVivo08 != ""){
    document.getElementById("quadrado25").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 08</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data08 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo08 + "' class='link'>" + nome08 + "</a></p></div></div>";

    document.getElementById("quadrado25").classList.remove('bloqueado');
    document.getElementById("quadrado25").classList.add('fase');
}


if(aoVivo09 == "" & gravacao09 == "https://www.youtube.com/embed/" & nome09 == "" & data09 == ""){
    document.getElementById("quadrado27").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 09</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
    
    document.getElementById("quadrado27").classList.add('bloqueado');
    document.getElementById("quadrado27").classList.remove('fase');
}
else if(gravacao09 != "https://www.youtube.com/embed/"){
    document.getElementById("quadrado27").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 09</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data09 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao09 + "' class='link'>" + nome09 + "</a></p></div></div>";

    document.getElementById("quadrado27").classList.remove('bloqueado');
    document.getElementById("quadrado27").classList.add('fase');
}
else if(aoVivo09 != ""){
    document.getElementById("quadrado27").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 09</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data09 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo09 + "' class='link'>" + nome09 + "</a></p></div></div>";

    document.getElementById("quadrado27").classList.remove('bloqueado');
    document.getElementById("quadrado27").classList.add('fase');
}


if(aoVivo10 == "" & gravacao10 == "https://www.youtube.com/embed/" & nome10 == "" & data10 == ""){
    document.getElementById("quadrado29").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 10</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto'>Aguarde o desbloqueio dessa fase!</p></div></div>";
    
    document.getElementById("quadrado29").classList.add('bloqueado');
    document.getElementById("quadrado29").classList.remove('fase');
}
else if(gravacao10 != "https://www.youtube.com/embed/"){
    document.getElementById("quadrado29").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 10</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data10 + "</p><p class='pTexto3'><b>GRAVAÇÃO:</b> <a target='_blank' href='" + gravacao10 + "' class='link'>" + nome10 + "</a></p></div></div>";

    document.getElementById("quadrado29").classList.remove('bloqueado');
    document.getElementById("quadrado29").classList.add('fase');
}
else if(aoVivo10 != ""){
    document.getElementById("quadrado29").innerHTML = "<div class='divTexto1'><div class='pTexto pTexto1'><div class='material-symbols-outlined imgTexto'>cached</div> <div class='descricaoTexto'>FASE 10</div></div></div><div class='divTexto2'><div class='divNomeTexto'><p class='pTexto pTexto2'><b>DATA:</b> " + data10 + "</p><p class='pTexto3'><b>AO VIVO:</b> <a target='_blank' href='" + aoVivo10 + "' class='link'>" + nome10 + "</a></p></div></div>";

    document.getElementById("quadrado29").classList.remove('bloqueado');
    document.getElementById("quadrado29").classList.add('fase');
}

