let modelContainer = document.querySelector('.model-container')
let button = document.querySelector('.count');

let costs = [
    {
        mark: {
            "Renault": 1000,
            "Opel": 1500,
            "Mazda": 1300,
            'Jaguar': 2500
        }
    },
    {
        model: {
            "Clio": 100,
            "Espace": 50,
            "Megane": 300,
            'Twingo': 20,
            "Crossland": 80,
            "Grandland": 50,
            "Corsa": 30,
            'Astra': 190,
            "CX-4": 19,
            "MX-30": 55,
            "CX-7": 87,
            'CX-9': 200,
            "E-Pace": 10,
            "F-Pace": 40,
            "I-Pace": 30,
            'XE': 20
        }
    },
    {
        fuel: {
            "Бензин": 300,
            "Дизель": 320,
            "Газ": 670,
            'Электричество': 800
        }
    },
    {
        volume: {
            "1.1": 20,
            "1.6": 30,
            "2.1": 40,
            '2.6': 50,
            '3.1': 60,
            '3.6': 80
        }
    },
    {
        quality: {
            new: 1000,
            old: 100
        }
    },
    {
        quantity: {
            2: 500,
            3: 100
        }
    },
    {
        pay: {
            'Наличные': -200,
            'Карта': 0,
            'Счет': 100,
        }
    }
]
function showModel() {
    let mark = document.forms.form.elements.carMark.value;
    if (mark == 'Renault') {
        let modelRenault = document.forms.form.elements.carRenault;
        modelRenault.classList.remove('hover');
    }
    if (mark !== 'Renault') {
        let modelRenault = document.forms.form.elements.carRenault;
        modelRenault.classList.add('hover');
    }
    if (mark == 'Opel') {
        let modelOpel = document.forms.form.elements.carOpel;
        modelOpel.classList.remove('hover');

    }
    if (mark !== 'Opel') {
        let modelOpel = document.forms.form.elements.carOpel;
        modelOpel.classList.add('hover');

    }
    if (mark == 'Mazda') {
        let modelMazda = document.forms.form.elements.carMazda;
        modelMazda.classList.remove('hover');

    }
    if (mark !== 'Mazda') {
        let modelMazda = document.forms.form.elements.carMazda;
        modelMazda.classList.add('hover');

    }
    if (mark == 'Jaguar') {
        let modelJaguar = document.forms.form.elements.carJaguar;
        modelJaguar.classList.remove('hover');

    }
    if (mark !== 'Jaguar') {
        let modelJaguar = document.forms.form.elements.carJaguar;
        modelJaguar.classList.add('hover');

    }
}

function quantOwners() {
    let type = document.querySelector('#quality-old');
    let qual = document.querySelector('.quant-container')
    if (type.checked) {
        qual.classList.remove('hover')
    }
    else { qual.classList.add('hover') }
}
function showChecked(array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i].checked) {
            return array[i].value
        }
    }
}
function calc() {
    let markValue = document.querySelector('#mark').value;
    let modelValueRenault = document.querySelector('#mark-Renault').value;
    let modelValueOpel = document.querySelector('#mark-Opel').value;
    let modelValueMazda = document.querySelector('#mark-Mazda').value;
    let modelValueJaguar = document.querySelector('#mark-Jaguar').value;
    let modelValue = 0;
    if (!modelValueRenault == 0) { 
        modelValue = modelValueRenault 
    };
    if (!modelValueOpel == 0) { 
        modelValue = modelValueOpel 
    };
    if (!modelValueMazda == 0) { 
        modelValue = modelValueMazda 
    };
    if (!modelValueJaguar == 0) { 
        modelValue = modelValueJaguar 
    };
    let fuelInputs = document.forms.form.elements.typeFuel;
    let fuelValue = showChecked(fuelInputs);
    let volumeValue = document.querySelector('#volume').value;
    let qualityInputs = document.forms.form.elements.typeQuality;
    let qualityValue = showChecked(qualityInputs);
    let quantityInputs = document.forms.form.elements.typeQuantity;
    let quantityValue = showChecked(quantityInputs);
    let payInputs = document.forms.form.elements.typePay;
    let payValue = showChecked(payInputs);
    let sum = []
    if (!costs[0].mark[markValue] == 0) 
    sum.push(costs[0].mark[markValue]);
    if (!costs[1].model[modelValue] == 0) 
    sum.push(costs[1].model[modelValue]);
    if (!costs[2].fuel[fuelValue] == 0) 
    sum.push(costs[2].fuel[fuelValue]);
    if (!costs[3].volume[volumeValue] == 0) 
    sum.push(costs[3].volume[volumeValue]);
    if (!costs[4].quality[qualityValue] == 0) 
    sum.push(costs[4].quality[qualityValue]);
    if (!costs[5].quantity[quantityValue] == 0) 
    sum.push(costs[5].quantity[quantityValue]);
    if (!costs[6].pay[payValue] == 0) 
    sum.push(costs[6].pay[payValue]);
    let result = 0;
    for (let i = 0; i < sum.length; i++) {
        result = result + sum[i];
    }
    addResult(result)
}
function addResult(result) {
    let textResult = document.querySelector('.text-result');
    textResult.textContent = `Стоимость автомобиля с такими параметрами: ${result} $`
    
}
function addText () {

    let resultSubmit = document.querySelector('.resultSubmit');
   resultSubmit.classList.remove('hover');
   
    resultSubmit.textContent = document.querySelector('.text-result').text ;
}

button.addEventListener('submit', function calculatePrice() {
    event.preventDefault();
    calc()
    addText()

}
);
