const form = document.querySelector('.form');

form.addEventListener('submit',function(event){
    event.preventDefault(); 

    const weigt = document.getElementById('weigt').value;
    const heigt = document.getElementById('heigt').value;

    const bmi = (weigt / ((heigt/100) * (heigt/100))).toFixed(2); //toFixed = duas casas depois da virgula//

    const value = document.getElementById('value');
    let description = ''; //descrição do texto inicialmente vazia//

    value.classList.add('attention'); //atribui ao valor a classe do CSS attention//

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você esta abaixo do peso!'
    } else if(bmi >= 18.5 && bmi <= 25){
        description = 'Você esta no peso ideal!';
        value.classList.remove('attention'); //remove o o style da classe do CSS attention = Vermelho// 
        value.classList.add('normal'); //atribui ao valor a classe do CSS normal = Verde//
    } else if(bmi > 25 && bmi <= 30){
        description = 'Cuidado! Você esta com sobrepeso!';
    } else if(bmi > 30 && bmi <= 35){
        description = 'Cuidado! Você esta com obesidade moderada!';
    } else if(bmi > 35 && bmi <= 40){
        description = 'Cuidado! Você esta com obesidade severa!';
    } else {
        description = 'Cuidado! Você esta com obesidade morbida!';
    }

        value.textContent = bmi.replace('.',','); //replace trocando o '.' pela ','//
        document.getElementById('description').textContent = description;

        

});

