const title = document.querySelector('.el-title')
const h2 = document.querySelector('.el-name')
const p = document.querySelector('.el-text')

const tri = document.querySelector('.tri')
const tri2 = document.querySelector('.tri2')

const sel = document.querySelectorAll('.s-el')
const pel = document.querySelectorAll('.p-el')
const del = document.querySelectorAll('.d-el')

const metals = ['Li', 'Be', 'Na', 'Mg', 'Al', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cu', 'In', 'Sn', 'Sb', 'Cs', 'Ba', 'La', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg','Ti', 'Pb', 'Bi', 'Po', 'Fr', 'Ra', 'Ac', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv']

for (const elem of sel) {
    elem.addEventListener('click', () => {
        let el = elem.textContent.split(' ')
        console.log(el)
        let first = el[48]
        let second = el[24]
        let third = el[72]
        let fourth = el[124]
        
        first.replace('\n', '')
        second.replace('\n', '')
        third.replace('\n', '')
        fourth.replace('\n', '')
        let elName = [first, second, third, fourth]

        let textSample = `Элемент ${elName[0]} (${elName[1]}), порядковый номер - ${elName[3]} и атомная масса - ${elName[2]}.`
        title.style.backgroundColor = '#3300ac'
        tri.style.borderTopColor = `#7438ff`
        tri.style.borderLeftColor = `#7438ff`

        tri2.style.borderBottomColor = '#17004d'
        tri2.style.borderRightColor = `#17004d`

        p.textContent = textSample
        h2.textContent = `Описание элемента ${elName[0]}`
    }) 
}

for (const elem of pel) {
    elem.addEventListener('click', () => {
        let el = elem.textContent.split(' ')
        let first = el[48]
        let second = el[24]
        let third = el[72]
        let fourth = el[124]
        
        first.replace('\n', '')
        second.replace('\n', '')
        third.replace('\n', '')
        fourth.replace('\n', '')
        let elName = [first, second, third, fourth]

        let textSample = `Элемент ${elName[0]} (${elName[1]}), порядковый номер - ${elName[3]} и атомная масса - ${elName[2]}.`
        title.style.backgroundColor = '#004594'
        tri.style.borderTopColor = `#2ab1ff`
        tri.style.borderLeftColor = `#2ab1ff`

        tri2.style.borderBottomColor = '#002652'
        tri2.style.borderRightColor = `#002652`

        p.textContent = textSample
        h2.textContent = `Описание элемента ${elName[0]}`
    }) 
}

for (const elem of del) {
    elem.addEventListener('click', () => {
        let el = elem.textContent.split(' ')
        let first = el[48]
        let second = el[24]
        let third = el[72]
        let fourth = el[124]
        
        first.replace('\n', '')
        second.replace('\n', '')
        third.replace('\n', '')
        fourth.replace('\n', '')
        let elName = [first, second, third, fourth]

        let textSample = `Элемент ${elName[0]} (${elName[1]}), порядковый номер - ${elName[3]} и атомная масса - ${elName[2]}.`
        title.style.backgroundColor = `#9c0056`
        tri.style.borderTopColor = `#ff50b0`
        tri.style.borderLeftColor = `#ff50b0`

        tri2.style.borderBottomColor = `#4d002a`
        tri2.style.borderRightColor = `#4d002a`

        p.textContent = textSample
        h2.textContent = `Описание элемента ${elName[0]}`
    }) 
}


const factText = document.querySelector('.fact')
const facts = ['Мыльный пузырь – это самая тонкая <br>материя, которую может увидеть <br>человеческий глаз. Мыльный пузырь <br>лопается за 0,001 секунды. При этом, <br>если надуть пузырь в -15 Со, то он <br>замерзнет при соприкосновении с <br>поверхностью, а при -25 Со – <br>замерзнет в воздухе и <br>разобьется при ударе.', 'В водах океана содержится золото. <br>На одну тонну океанской воды <br>приходится 7 миллиграммов золота.', 'Во время полета самолеты <br>используют до 75 тонн кислорода, <br>такое количество кислорода <br>вырабатывает 30000 ГА леса.', 'Железо можно превратить в газ <br>при температуре 1539 С0.', 'Каждый живой организм на нашей <br>планете содержит в себе белок, но <br>в разных соотношениях. <br>Мозг человека – это тоже белок.', 'Смертельная доза метилового <br>спирта составляет 30 мл, при <br>этом антидотом является <br>этиловый спирт.', 'Металл не пахнет. Всем знаком <br>запах не обработанного <br>(не крашеного) металла, так <br>пахнут, например, металлические <br>деньги, перила, старые качели, <br>арматура или просто кусок метала. <br>Но этот запах выделяет не сам <br>металл, это результат <br>соприкосновения <br>металла с органическим веществом, <br>к примеру, с нашей ладонью или <br>пальцем, который выделяет пот.', 'Помидоры – очень умные растения, <br>они умеют кричать «SOS!» В момент, <br>когда насекомое – например, <br>гусеница – начинает грызть листочек <br>помидора, он выделяет химическое <br>вещество с определенным <br>запахом, который привлекает птиц.', 'Чарльз Гудьир – ученый, который <br>совершенно случайно изобрел <br>резину, которая не плавится в жару <br>и не ломается в мороз. Он забыл <br>убрать с включённой плиты смесь <br>серы и каучука, так был изобретен <br>процесс изготовления резины, <br>который назвали вулканизацией.', 'В головном мозге человека <br>ежеминутно происходит около <br>100 тысяч химических реакций.']
let fact = Math.floor(Math.random() * facts.length)

factText.innerHTML = (facts[fact])