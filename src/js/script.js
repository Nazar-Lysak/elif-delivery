
const mcDonny = [
    {
        "name": "Crunchy Onion Rings",
        "price": 295
    },
    {
        "name": "Tandoori Makhane",
        "price": 295
    },
    {
        "name": "Achaari Peanut Masala",
        "price": 295
    },
    {
        "name": "Peri Peri Corn Chaat",
        "price": 325
    },
    {
        "name": "Peri Peri French Fries",
        "price": 325
    },
    {
        "name": "Maggi Masala Fries",
        "price": 325
    },
    {
        "name": "Cheese garlic bread sticks",
        "price": 325
    },
    {
        "name": "Batata Stones",
        "price": 295
    },
    {
        "name": "Vada Pao",
        "price": 325
    },
    {
        "name": "Aloo Chaat",
        "price": 295
    }
];

const cfkData = [
    {
        "name": "Caesar Salad",
        "price": 295,
    },
    {
        "name": "Lovely Corns",
        "price": 375,
    },
    {
        "name": "Duet of Soya Chaap",
        "price": 375,
    },
    {
        "name": "Chili Cheese rolls",
        "price": 375,
    },
    {
        "name": "Palak Patta Mille Fieulle",
        "price": 325,
    },
    {
        "name": "Bhelpuri Bar",
        "price": 325,
    },
    {
        "name": "Pao Bhaji Mollete",
        "price": 375,
    },
    {
        "name": "Magic Quesadilla",
        "price": 375,
    },
    {
        "name": "Bharwan Dahi Kebab",
        "price": 375,
    },
    {
        "name": "Exotic Mushroom Croquette",
        "price": 375,
    },
    {
        "name": "Old School Chili Paneer",
        "price": 395,
    },
    {
        "name": "Trinity of Paneer Tikka",
        "price": 425,
    },
    {
        "name": "Obsessive Nachos",
        "price": 425,
    },
    {
        "name": "Chili Paneer Puff",
        "price": 425,
    },
    {
        "name": "Chili Mushroom",
        "price": 425,
    }
];

let currentShopData = [];

const mainNavigation = document.querySelectorAll('.header__nav-list li');
const shopNavigation = document.querySelectorAll('.sidebar_nav-list li');

const donnyList = document.querySelector('.donnyList')
const cfkList = document.querySelector('.cfkList');

const cartInputName = document.querySelector('.cart-input-name');
const cartInputEmail = document.querySelector('.cart-input-email');
const cartInputPhone = document.querySelector('.cart-input-phone');
const cartInputAdress = document.querySelector('.cart-input-adress');


const cartOrderList = document.querySelector('.section__cart_right');
const cartBtnSubmit = document.querySelector('.cart-btn-submit');
const couponInp = document.querySelector('.coupon-int');

const productsPage = document.querySelector('#shop-section');
const couponsPage = document.querySelector('#section_coupons');
const cartPage = document.querySelector('#section__cart');
const historyPage = document.querySelector('#section_history');

const historyInputMail = document.querySelector('.history-inp-mail');
const historyInputPhone = document.querySelector('.history-inp-phone');
const historySubmit = document.querySelector('.history-bnt-submit');

const navArr = [productsPage, couponsPage, cartPage, historyPage];

const couponsData = [
    {id: 0, status: true, copy: 'Copy Coupon', disscount: 10, key: 'QDsh!@k_!jSDS', color: 'green'},
    {id: 1, status: true, copy: 'Copy Coupon', disscount: 12, key: '!jSDSQDsh!@k_', color: 'yellow'},
    {id: 2, status: true, copy: 'Copy Coupon', disscount: 15, key: 'QDSDSsh!@k_!j', color: 'blue'},
    {id: 3, status: true, copy: 'Copy Coupon', disscount: 20, key: 'jSDh!@k_!SQDs', color: 'gold'}
];

const orderHistory = [
    {
        email: 'test@gmail.com',
        name: 'test-name',
        address: 'str. Shevchenka, 1/13',
        coupon: '',
        phone: '1234567890',
        totalPrice: '699',
        orderList: [
            {name: 'test1', price: '133'}, {name: 'test2', price: '233'}, {name: 'test3', price: '333'}, {name: 'test2', price: '233'}
        ]
    },
    {
        email: 'test1@gmail.com',
        name: 'test-name',
        address: 'str. Shevchenka, 1/13',
        coupon: '',
        phone: '5678901234',
        totalPrice: '966',
        orderList: [
            {name: 'test1', price: '433'}, {name: 'test2', price: '533'}
        ]
    },
    {
        email: 'test2@gmail.com',
        name: 'test-name',
        address: 'str. Shevchenka, 1/13',
        coupon: '',
        phone: '1234890567',
        totalPrice: '2499',
        orderList: [
            {name: 'test1', price: '733'}, {name: 'test2', price: '833'}, {name: 'test3', price: '933'},
        ]
    },
    {
        email: 'test@gmail.com',
        name: 'test-name',
        address: 'str. Shevchenka, 1/13',
        coupon: '',
        phone: '1234567890',
        totalPrice: '1600',
        orderList: [
            {name: 'test1', price: '200'}, {name: 'test2', price: '300'}, {name: 'test3', price: '400'}, {name: 'test2', price: '300'}, {name: 'test3', price: '400'}
        ]
    },
];

const currentOrder = [];

function renderOrderedElements () {
    let orderedElems = '';
    currentOrder.forEach((el, ind) => {
        orderedElems += `
        <div class="section__cart_item">
            <div class="section__cart_image">
                <img src="" alt="">
            </div>
            <div class="section__cart_item-content">
                <p>${el.name}</p>
                <p>${el.price} $</p>
                <input class="orderItemVal" type="number">
            </div>
        </div>
        `
    })

    cartOrderList.innerHTML = orderedElems;
}

cartBtnSubmit.addEventListener('click',() => {
    const val = document.querySelector('.orderItemVal')
    let num = 0
    for(let i = 0; i <= 3; i++) {
        if(document.querySelectorAll('.cartForm input')[i].value.length >= 1) {
            num += 1;
        }
    }
    num == 4 && val.value > 0 ?  getUserData() : alert("fill all fields");
    currentOrder.length > 0 ? cartBtnSubmit.disabled = false : cartBtnSubmit.disabled = true;
})

function getUserData() {

    const values = [...document.querySelectorAll('.orderItemVal')].map(el => +el.value);
    const totalPriceValue = currentOrder.reduce((acc, el, ind) => acc + (el.price * values[ind]), 0);

    for(let i = 0; i <= couponsData.length; i++) {
        if(couponsData[i].key === couponInp.value && couponInp.value.length !== 0) {
            couponsData[i].status = false;
            couponsData[i].copy = 'coupon was used';
            couponsData[i].key = '-';
            couponsData[i].color = 'gray';
            renderCoponesPage();

            const orderObj = {
                email: cartInputEmail.value,
                name: cartInputName.value,
                address: cartInputAdress.value,
                coupon: couponInp.value,
                phone: cartInputPhone.value,
                totalPrice: totalPriceValue - (totalPriceValue / 100 * couponsData[i].disscount),
                orderList: [...currentOrder]
            };

            const text = `total price: ${orderObj.totalPrice}, Thanks`;
            alert(text)

            orderHistory.push(orderObj);
            break;
        }
        else if (couponsData[i].key != couponInp.value && couponInp.value.length === 0) {
            const orderObj = {
                email: cartInputEmail.value,
                name: cartInputName.value,
                address: cartInputAdress.value,
                coupon: couponInp.value,
                phone: cartInputPhone.value,
                totalPrice: totalPriceValue,
                orderList: [...currentOrder]
            };

            const text = `total price: ${orderObj.totalPrice}, Thanks`;
            alert(text)

            orderHistory.push(orderObj);
            break;
        }
    }

    cartInputEmail.value = '';
    cartInputName.value = '';
    cartInputAdress.value = '';
    couponInp.value = '';
    cartInputPhone.value = '';
    currentOrder.length = 0;

    renderOrderedElements();
};

cfkList.addEventListener('click', () => {
    currentShopData.length = 0;
    currentOrder.length = 0;
    currentShopData = [...mcDonny];
    renderCfkPage();
})

donnyList.addEventListener('click', () => {
    currentShopData.length = 0;
    currentOrder.length = 0;
    currentShopData = [...cfkData];
    renderProductPage();
})

function renderCfkPage() {
    let productsHtml = '';
    currentShopData.forEach((el, i) => {
        productsHtml += `
        <div class="item_product">
            <div style="background-color: orange;" class="item_product-image"></div>
            <div class="product-content">
                <p class="name">${el.name}</p>
                <p>${el.price} $</p>
            </div>
            <button onclick="addToCart(${i})" class="add-to-card">Add to cart</button>
        </div>
        `
    })
    productsPage.innerHTML = productsHtml;
}

function renderProductPage() {
    let productsHtml = '';
    currentShopData.forEach((el, i) => {
        productsHtml += `
        <div class="item_product">
            <div style="background-color: greenyellow;" class="item_product-image"></div>
            <div class="product-content">
                <p class="name">${el.name}</p>
                <p>${el.price} $</p>
            </div>
            <button onclick="addToCart(${i})" class="add-to-card">Add to cart</button>
        </div>
        `
    })
    productsPage.innerHTML = productsHtml;
}

function addToCart(i) {
    currentOrder.push(currentShopData[i]);
    renderOrderedElements();
}

renderProductPage();

let historyFiltredArr = [];

function renderHistoryList() {
    let historyHtml = '';
    historyFiltredArr.forEach((el, i) => {
        const orderLi = el.orderList.reduce((accum, el) => accum +=`<li>${el.name} - price ${el.price} $</li>`, '');
        historyHtml += `
        <div class="history_list-item">
            <ul>
                ${orderLi}
            </ul>
            <p>Total Price: ${el.totalPrice} $</p>
        </div>
        `
    })
    historyPage.querySelector('.history_list').innerHTML = historyHtml;
}

renderHistoryList();

mainNavigation.forEach(el => {
    el.addEventListener('click', function(e) {
        e.preventDefault();

        mainNavigation.forEach(el => el.removeAttribute("class"));
        navArr.forEach(el => el.style.display = 'none');
        this.classList.add("nav-list_item-active");


        if (this.children[0].innerHTML == 'Coupons') {
            couponsPage.style.display = 'block';
        } else if (this.children[0].innerHTML == 'Shopping Cart') {
            currentOrder.length == 0 ? cartBtnSubmit.disabled = true : cartBtnSubmit.disabled = false;
            cartPage.style.display = 'block';
        } else if (this.children[0].innerHTML == 'History') {
            historyPage.style.display = 'block';
        } else if (this.children[0].innerHTML == 'Shop') {
            productsPage.style.display = 'grid';
        }
    })
})

function renderCoponesPage() {
    let CoponesHtml = '';
    couponsData.forEach((el, i) => {
        CoponesHtml += `
        <div class="coupons_list__item">
            <div style="background-color: ${el.color}" class="img"></div>
            <p>Coupon: ${el.disscount}%, ( ${el.key} )</p>
            <button onclick="copyCouponCode(${i})">${el.copy}</button>
        </div>
        `
    })
    couponsPage.querySelector('.coupons_list').innerHTML = CoponesHtml;
}

function copyCouponCode(i) {
    couponsData.forEach(el => {el.copy = 'Copy Coupon'})
    let text = couponsData[i].key;
    couponsData[i].copy = 'Copied';
    navigator.clipboard.writeText(text);
    renderCoponesPage();
}

renderCoponesPage();

historySubmit.addEventListener('click', ()=> {
    let txtMail = historyInputMail.value;
    let txtPhone = historyInputPhone.value;

    isPossiblyValidEmail(txtPhone, txtMail);
})

function isPossiblyValidEmail(phone, mail) {
    historyFiltredArr.length = 0;
    if(mail.length === 0) {
        phone.length > 3 ? searchHistory(phone, mail) : console.log('incorrect Phone');
    }
    else if(phone.length === 0) {
        mail.length > 3 && mail.indexOf('@')>0 ? searchHistory(phone, mail) : console.log('incorrect Email');
    } else if(phone.length != 0 && mail.length != 0) {
        mail.length > 3 && mail.indexOf('@')>0 && phone.length > 3 ? searchHistory(phone, mail) : console.log('incorrect Email');
    }
}

function searchHistory(txtPhone, txtMail) {

    historyFiltredArr = orderHistory.filter((el) => el.phone == txtPhone || el.email == txtMail ? el : null);
    renderHistoryList();
}

shopNavigation.forEach(el => {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        shopNavigation.forEach(el => el.classList.remove("sidebar_nav-list_item-active"));
        this.classList.add("sidebar_nav-list_item-active");
    })
})