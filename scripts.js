// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


const updateColor = () => {

STATUS_MAP.checkedOut.color = 
STATUS_MAP.overdue,
STATUS_MAP.reserved,
STATUS_MAP.shelf,
}

const book1 = {
    status: document.querySelector("status"),
    reserve: document.querySelector("reserve"),
    checkout: document.querySelector("checkout"),
    checkin : document.querySelector("checkin") ,
}


const updateColor2 = () => {

}
const book2 = {
    status: document.querySelector("status"),
    reserve: document.querySelector("reserve"),
    checkout: document.querySelector("checkout"),
    checkin : document.querySelector("checkin") 
}

const updateColor3 = () => {

}
const book3 = {
    status: document.querySelector("status"),
    reserve: document.querySelector("reserve"),
    checkout:document.querySelector("checkout"),
    checkin : document.querySelector("checkin") 
}


book1.checkin.color = 'grayscale'
book1.status.style.color = STATUS_MAP.status.color
book1.reserve = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
book1.checkout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
book1.checkin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'



book2.checkin.color = 'grayscale'
book2.status.style.color = STATUS_MAP.status.color
book2.reserve = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
book2.checkout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
book2.checkin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'



book3.checkin.color = 'grayscale'
book3.status.style.color = STATUS_MAP.status.color
book3.reserve = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
book3.checkout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
book3.checkin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

