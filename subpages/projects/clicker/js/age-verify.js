const btnYes = document.getElementById('js_button_yes');
const btnNo = document.getElementById('js_button_no');
const click = true;

if(btnYes){
    btnYes.addEventListener('click', () => {
        click(document.location.href = "website/index.html");
    })

    if(btnNo){
        btnNo.addEventListener('click', () => {
            const ageInformation = document.getElementById('js_age_information')
            ageInformation.style.display = 'flex';
            btnYes.disabled = true;
            setTimeout(() => {
                document.location.href = 'https://www.google.com'
            },1500)
        })
    }
}