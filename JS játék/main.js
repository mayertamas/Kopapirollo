const ellenfelkiir = document.getElementById('ellenfel');
const sajatkiir = document.getElementById('sajat');
const eredmenykiir = document.getElementById('eredmeny');
const lehetseges = document.querySelectorAll('button');
let sajat;
let ellenfel;
let eredmeny;

lehetseges.forEach(lehetseges => lehetseges.addEventListener('click', (e) => {
    sajat = e.target.id;
    sajatkiir.innerHTML = sajat;
    ellenfelGeneral();
    eredmenyVegso();
}))

function ellenfelGeneral() {
    const veletlen = Math.ceil(Math.random() * 3);

    if (veletlen == 1){
        ellenfel = 'Kő';
    }
    if (veletlen == 2){
        ellenfel = 'Papír';
    }
    if (veletlen == 3){
        ellenfel = 'Olló';
    }
    ellenfelkiir.innerHTML = ellenfel;
}

/*function eredmenyVegso() {
    if (ellenfel == sajat){
        eredmeny = 'Döntetlen';
    }
    if (ellenfel == 'Kő' && sajat == 'Papír'){
        eredmeny = 'Győzelem';
    }
    if (ellenfel == 'Kő' && sajat == 'Olló'){
        eredmeny = 'Vereség';
    }
    if (ellenfel == 'Olló' && sajat == 'Kő'){
        eredmeny = 'Győzelem';
    }
    if (ellenfel == 'Olló' && sajat == 'Papír'){
        eredmeny = 'Vereség';
    }
    if (ellenfel == 'Papír' && sajat == 'Olló'){
        eredmeny = 'Győzelem';
    }
    if (ellenfel == 'Papír' && sajat == 'Kő'){
        eredmeny = 'Vereség';
    }
    eredmenykiir.innerHTML = eredmeny;
}*/

function eredmenyVegso() {
    if (ellenfel == sajat)
    {
        eredmeny = 'Döntetlen';
    }
    else
    {
        if ((sajat == 'Kő' && ellenfel == 'Olló') 
            || (sajat == 'Papír' && ellenfel == 'Kő') 
            || (sajat == 'Olló' && ellenfel == 'Papír'))
            {
                eredmeny = 'Győzelem';
            }
        else 
        {
            eredmeny = 'Vereség';
        }
    }
    eredmenykiir.innerHTML = eredmeny;
}