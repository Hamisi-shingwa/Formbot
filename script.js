function iamfiller(color='red',position='50px'){
    const body = document.querySelector('body');
    const fillerElement = document.createElement('div');
    fillerElement.setAttribute('class','fillerElement');
    fillerElement.innerHTML = 'F'
    fillerElement.style.backgroundColor = color
    fillerElement.style.position = 'absolute'
    fillerElement.style.top = position
    body.appendChild(fillerElement)

    const texts = ['Shuain','shivinj','jacksonyoi','kasboom','xaviry','shono','shalo','shemejion','shabani','mau',
    'Mosii','yujuju','shuoi','aisha','faraji','xeeky','shaoulinid','yahoshi','meya','kasiu','khamisi',
    'Maisala','makiwa','bulkinabe','jonh','Shabiby','xeeely','Mwita','jason','deruu','Hasan','Joseph',
    'kachiri','Mwenge','Muona','Beka','bazzer','Chauloo','kwisa','Mohammed','David','Sultani','meshack',
    'sahun','sjkss','jidiss','wujiiosp','hiajkla','bsbaaa','ahajkjk','rahis','bshioiao','umenena','shabiki',
    'jumaa','mayele','ki stephan','sure boy','chama','shabiki','shaulini','makala','bikirima','asburee']

    const number = [2005,2005513057,199278,8828,12990192,10098999,123100,122839,9909910,1201929,1111029,122334,1233,
    233456,4567,56578,6789,6890,1234567,45789,457890,2345678,56789,2345678,456789,12345,34567,1234456789,
    235466666,456789,09876,098432,0756567,0734567,0623456,07234567,071234567,072324567,8941235]

    const email = ['hahksk@gmai.com','ghj@ev.org','vbn@smtp.com','fgvhjk@h.net','gfgjj@gmail.com','fgyhuj@is.net',
    'bakaa@jmv.tz','hjkkj@cmd.org','roonk@gxp.net','ghjk@bom.vi','ghjkl@j.net','ghjm@woop.com','vhjk@net.isa',
    'gooov.@gmail.com','dooomblo@svnet.google','boweza@mo.cd','emird@isa.net']

    const filler = document.querySelector('.fillerElement');

    filler.onclick = ()=>{
        let inputs = document.querySelectorAll('input');
        inputs.forEach(input=>{
            if(input.type=='text'){
                let values = Math.floor(Math.random() * texts.length)
                input.value = texts[values]
            }

            if(input.type=='email'){
                let values = Math.floor(Math.random() * email.length)
                input.value = email[values]
            }

            if(input.type=='number'){
                let values = Math.floor(Math.random() * number.length)
                input.value = number[values]
            }
            if(input.type == 'radio'){
                let types = document.querySelectorAll('input[type=radio]')
                let values = Math.floor(Math.random() * types.length)
                types[values].click();
            }

            if(input.type == 'checkbox'){
                let types = document.querySelectorAll('input[type=checkbox]')
                let values = Math.floor(Math.random() * types.length)
                types[values].click();
            }
            if(document.querySelector('select')){
                let selects = document.querySelectorAll('select')
                selects.forEach(select=>{
                    select.onclick = (e)=>{
                        console.log(e.target.options[1].text)
                        
                    }
                })
            }
        }) 
    }

}

iamfiller('green')

