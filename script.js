const title = document.querySelector('.el-title')
const h2 = document.querySelector('.el-name')
const p = document.querySelector('.el-text')

const tri = document.querySelector('.tri')
const tri2 = document.querySelector('.tri2')

const sel = document.querySelectorAll('.s-el')
const pel = document.querySelectorAll('.p-el')
const del = document.querySelectorAll('.d-el')

let metals = ['Li', 'Be', 'Na', 'Mg', 'Al', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cu', 'In', 'Sn', 'Sb', 'Cs', 'Ba', 'La', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg','Ti', 'Pb', 'Bi', 'Po', 'Fr', 'Ra', 'Ac', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv']

for (const elem of sel) {
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
        title.style.backgroundColor = '#3300ac'
        tri.style.borderTopColor = `#976aff`
        tri.style.borderLeftColor = `#976aff`

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
        tri.style.borderTopColor = `#2a8dff`
        tri.style.borderLeftColor = `#2a8dff`

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