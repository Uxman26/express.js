const sudmitbtn = document.getElementById('btn');
const data = document.getElementById('idname');
const datahide = document.querySelector('.classname');
const returnData = document.getElementById('idname');

const getInfo = async(event) => {
    event.preventDefault();

    let name = data.value;
    if (name === ''){
        returnData.innerText = 'dshkjdshf';
        datahide.classList.add('data-hide');
    }else{
        try{
            let url = 'url';
            const response = await fetch(url);
            const resData = response.json();
            const arrData = [data];

            returnData.innerText = arrData[0].main.temp;
            returnData.innerText = `${arrData[0].weather[0].main}, ${arrData[0].main.temp}`;
            const tempMood = arrData[0].main.temp;

            if (tempMood == 'clear'){
                returnData.innerText = "<i className='fa fa-star'></i>"
            }
            datahide.classList.remove('data-hide');
        }
        catch{
            returnData.innerText = 'jskjsdfh';
        }
    }

}


submitbtn.addEventListner('click', getInfo())