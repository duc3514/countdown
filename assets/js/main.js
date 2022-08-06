/*BƯỚC 1: LẤY GIÁ TRỊ BAN ĐẦU*/
const btnStart = document.querySelector('.btn-start')
var h_val = document.getElementById('h_val').value; // Giờ
var m_val = document.getElementById('m_val').value; // Phút
var s_val = document.getElementById('s_val').value; // Giây

let h = null
let m = null
let s = null
btnStart.addEventListener('click', () => {

    HideFormControl()
    start()
})

function HideFormControl() {
    document.querySelector('.form.opacity').remove('opacity')
    document.querySelector('.form-count').classList.add('opacity')

}

function start() {
    if (h === null)
    {
        h = h_val;
        m = m_val;
        s = s_val;
    }
    
    
    if (s === -1){
        m -= 1;
        s = 59;
    }
    
   
    if (m === -1){
        h -= 1;
        m = 59;
    }
    
    
    if (h == -1){
        clearTimeout(timeout);
        const Song = new Audio('./assets/Audio/Audio.mp3')
        Song.play()
        alert('Hết giờ');
        
        return false;
    }
    
    
    
    const hour = document.getElementById('h')
    const minutes = document.getElementById('m')
    const second = document.getElementById('s')

    if(h < 10) {
        hour.innerText = 0 + h.toString();
        
    }else {
        hour.innerText = h.toString();
    }
    if(m < 10) {
        minutes.innerText = 0 + m.toString();
       
    }else{
        hour.innerText = m.toString();
    }
    if(s < 10) {
        second.innerText = 0 + s.toString();
    }else {
        second.innerText = s.toString();
    }
   
   
    
    /*BƯỚC 1: GIẢM PHÚT XUỐNG 1 GIÂY VÀ GỌI LẠI SAU 1 GIÂY */
    timeout = setTimeout(function(){
        s--;
        start();
    }, 1000);

}