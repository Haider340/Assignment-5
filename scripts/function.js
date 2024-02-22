
const allBtn = document.getElementsByClassName('btn-bg');
for (const btn of allBtn){
    btn.addEventListener('click', function(event){

        const ticketName = event.target. parentNode.childNodes[i].innerText;

        const ticketClass = event.target. parentNode.childNodes[i].innerText;

        const ticketPrice = event.target. parentNode.childNodes[i].innerText;

        const ticketPrice = 550;
        const ticketClass = 'Economy';
        
       
        
        const selectedSeats = document.getElementById('selected-seats-container');

        event.target.setAttribute('disable', false);
       
        const ticketSelected =  getValue('seats');

        if(ticketSelected+1 > 4){
            alert('Finish your limit');
            return;
        }

        event.target.btn.style.backgroundcolor ='green'; 


         
        const seatLeft = getElementById('seat-left');
        document.getElementById('seat-left').innerText= seatLeft-1;

        const seatCount = getElementById('seats');
        document.getElementById('seats').innerText= seatCount+1;





        
        const div = document.createElement('div');
        div.classList.add('flex');
        div.classList.add('flex-grow');
        
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText = ticketName;
        p2.innerText = 'Economy';
        p3.innerText = '550';
        
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedSeats.appendChild(div);
        UpdateTotalPrice(ticketPrice);
        updateGrandTotal()

         
    });
}
function UpdateTotalPrice(Value){
    const totalPrice = getValue('total-price');
    const sum = totalPrice + parseInt.Value;
    document.getElementById('total-price').innerText= sum;

}
function updateGrandTotal(status){
    const totalPrice = getValue('total-price');
    if(status == undefined){
       
        document.getElementById('grand-total').innerText= totalPrice;
    }else{
        const couponCode = document.getElementById('coupon-code').Value;
        if(couponCode=='NEW15'){
            const discount = totalPrice* .15;
            document.getElementById('grand-total').innerText= totalPrice-discount
        }else{
            console.log('invalid code');
        }if(couponCode== 'couple 20'){
            const discount = totalPrice*0.2;
            document.getElementById('grand-total').innerText= totalPrice-discount;

        }else{
            console.log('invalid code');
        }
    }

    }
       
// const seatLeft = getValue('seat-left');
// const  seats = getValue('seats');
// const  totalPrice = getValue('total-price');

function getValue(elementId){
    const ticketPrice = document.getElementById(elementId).innerText;
   const convertPrice = parseInt(ticketPrice);
   return convertPrice;

}