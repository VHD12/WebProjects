'use strict';
(function(){
    var envelope = document.getElementById('envelope');
    var Topenvelope=document.getElementById('envelopeTop');
    var letter = document.getElementById('contact');
    var left = document.getElementById('left');
    var bottomRight= document.getElementById('bottom-right');

envelopeTop.classList.add("close");
envelope.addEventListener('mouseover',openEnvelopeOnHover);
envelope.addEventListener('mouseout',closeEnvelopeOnHover);
function openEnvelopeOnHover(){
    envelopeTop.classList.remove("close");
    envelopeTop.classList.add("open");
    pullOutPartial();
}
function pullOutPartial(){
    letter.classList.remove("in");
    letter.classList.add("out-partial");
}
function closeEnvelopeOnHover(){
    if(flag==1){
        putIn();
        envelopeTop.classList.remove("open");
        envelopeTop.classList.add("close");
    }
    else{
        envelope.removeEventListener('mouseout',closeEnvelopeHover);

    }
}
function putIn(){
    letter.classList.remove("out-partial");
    letter.classList.add("in");
}
envelope.addEventListener('click',openEnvelope);
function openEnvelope(){
    flag=0;
    closeEnvelopeOnHoverI();
    letter.classList.add("pull");
    letter.addEventListener("animationend",function(){
        left.style.zIndex=0;
        bottomRight.style.zIndex=0;
        envelopeTop.style.zIndec=0;
        letter.style.zIndex=20;
        letter.classList.add("put");
        letter.addEventListener("animationend",function(){
            letter.style.transition='none';
            letter.classList.add("final")
            letter.classList.remove("put")
            letter.classList.remove("pull")
            envelope.style.cursor="default";
        });
    });
    envelope.removeEventListener('click',openEnvelope)
}
})();