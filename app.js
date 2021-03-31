const form = document.querySelector('.form-quizz');
let tableauReponse = [];
const reponses = ['b','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let reponseUs =[];

// console.log(form);
// console.log(tableauReponse);

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
  for(let i = 1; i < 6 ;i++){
    tableauReponse.push(document.querySelector(`input[name="q${i}"]:checked`).value)
  }
  console.log(tableauReponse);
  verifResultat(tableauReponse);
  tableauReponse= [];

});

function verifResultat(tableauReponse){
  
    for(let u = 0; u < 5; u++){
        if(tableauReponse[u]===reponses[u]){
            reponseUs.push(true);
        }else{(!tableauReponse[u]===reponses[u])
            reponseUs.push(false);           
        }
        
    }
    console.log(reponseUs);
    afficherResultats(reponseUs);
    couleursFonction(reponseUs);
    reponseUs = [];
}

function afficherResultats(tabCheck){
    
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);

    switch(nbDeFautes) {

        case 0:
            titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            aideResultat.innerText = ''
            noteResultat.innerText = '5/5 tu gagnes 15 euros'
            break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5 tu gagnes 10 euros '
            break;
        case 2:
            titreResultat.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez tu es nul !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez tu es un caca !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez NUUUUUL !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez NUUUUL !'
            noteResultat.innerText = '0/5'
        break;

        default:
            'Wops, cas innatendu.';

    }

}

 function couleursFonction (tabChange) {
     
    for(let i = 0; i < tabChange.length; i ++){
        if(tabChange[i] === true){
            toutesLesQuestions[i].style.background = "blue";
        }else{
            toutesLesQuestions[i].style.background = "red";
            toutesLesQuestions[i].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[i].classList.remove('echec');
            }, 500)
        }
        
    }

}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})
        
    
 





