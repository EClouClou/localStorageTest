//localStorage.setItem('clé','valeur')
//localStorage.getItem('clé')
//localStorage.clear();
//JSON.stringify(objet)
//JSON.parse(string)

const local = JSON.parse(localStorage.getItem('user'));
const texteSuite = document.querySelector('.suite');

if(local !== null)
{
    formulaire.style.display = 'none';
    h1.textContent = `Bonjour ${local.nom}, tu as ${local.age} ans!`;
}

bouton.onclick = () =>{
    const user = {
        nom: nom.value,
        age: age.value
    }
    localStorage.setItem('user', JSON.stringify(user));
    document.location.reload();
}

clear.onclick = () =>{
    localStorage.clear();
    document.location.reload();
}