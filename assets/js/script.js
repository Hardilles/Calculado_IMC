const form = document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const weigh = document.getElementById('weigt').value;
    const heigt = document.getElementById('heigt').value;

    const bmi = (weigh / (heigt * heigt)).toFixed(2); //toFixed = duas casas depois da virgula//

    const value = document.getElementById('value');
    let description = ''; //descrição do texto inicialmente vazia//

    document.getElementById('infos').classList.remove('hidden')

});

