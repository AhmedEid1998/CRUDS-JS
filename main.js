// daclaration variables
var title = document.getElementById('title');
var price = document.getElementById('price');
var taxes = document.getElementById('taxes');
var ads = document.getElementById('ads');
var discount = document.getElementById('discount');
var total = document.getElementById('total');
var count = document.getElementById('count');
var category = document.getElementById('category');
var search = document.getElementById('search');
var submit = document.getElementById("submit");
var btnDeleteAll = document.getElementById('deleteAll');
var boxAnime = document.getElementById('boxAnime');
var rightAnimeP = document.getElementById('right-anime');
var rightAnimeBox = document.getElementById('right-animeBox');
var mood = 'create';
var tmp ;


// get total function
// it takes the values from the price,taxes,ads and discount inputs
// and outputs the final price
function getTotal(){
    if(price.value != '')
    {
        var resulte = (+price.value + +taxes.value + +ads.value )
                    - +discount.value;
        total.innerHTML = resulte;
        total.style.backgroundColor = 'green'
    }
    else
    {
        total.innerHTML = '';
        total.style.backgroundColor = '#0b0e0b'

    }
}

var productsContainer ;
// save data in localstorage
// check about if the localStorage have data in products key when we refresh
// if that have data desplay this. if not, make productsContainer as Array 
if(localStorage.members != null)
{
    productsContainer = JSON.parse(localStorage.members) ;
    read();
}
else
{
    var productsContainer = [];
}

// create product function
// this function add the product which user enter that in the form, in the row is below the form
// add that in the Array as object and storage the Array in the localStorage
submit.onclick = function create(){

    if(validateProductInputs() == true)
    {

        var newPro = {
            title : title.value,
            price : price.value,
            taxes : taxes.value,
            ads : ads.value,
            discount : discount.value,
            total : total.innerHTML,
            category : category.value
        }
        
        if(mood == 'create')
        {
    
                //count operation
                if(count.value > 1)
                {
                    for( var i = 0 ; i < count.value ; i++)
                    {
                        productsContainer.push(newPro);      
                    }
                }
                else
                {
                    productsContainer.push(newPro);
                }
    
        }
        else
        {
            productsContainer[tmp] = newPro;
            submit.innerHTML = 'Create';
            mood = 'create';
            count.style.display = 'block';
        }
        localStorage.setItem('members', JSON.stringify(productsContainer));
        read();
        clrForm();

        rightAnimeP.innerHTML = 'enter your data';
        rightAnimeP.style.textShadow = `0 0 10px #718e71`;
        rightAnimeBox.style.boxShadow = `0 0 10px #718e71 ,
                                         0 0 10px #718e71 ,
                                         0 0 10px #718e71`;
        rightAnimeBox.style.animationPlayState = 'running';
        rightAnimeBox.style.setProperty('--baforeDisplay' , 'none');
        rightAnimeBox.style.cursor = 'cell';
    }
    else
    {
        
        rightAnimeP.innerHTML = 'enter capitalized first letter and positive number';
        rightAnimeP.style.textShadow = '0 0 10px #ff0000';
        rightAnimeBox.style.boxShadow = '0 0 10px #ff0000';
        rightAnimeBox.style.animationPlayState = 'paused';
        rightAnimeBox.style.cursor = 'no-drop';
        rightAnimeBox.style.setProperty('--baforeDisplay' , 'block')

    }
   
}

// read function
// this function desplay all products for productsContainer array 
// Desplay that in the table which below the form
function read(){
    var cartoona = ''
    for( var i = 0 ; i < productsContainer.length ; i++)
    {
        cartoona +=`<tr>
        <td>${i+1}</td>
        <td>${productsContainer[i].title}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].taxes}</td>
        <td>${productsContainer[i].ads}</td>
        <td>${productsContainer[i].discount}</td>                  
        <td>${productsContainer[i].total}</td>
        <td>${productsContainer[i].category}</td>
        <td><button onclick="updatePro(${i})" >update</button></td>
        <td><button onclick="deletepro(${i})" >delete</button></td>
     </tr>`
    }

    document.getElementById('demo').innerHTML = cartoona;
    boxAnime.innerHTML = `Your System Include (${productsContainer.length}) Products`;

        // deleteAll products 
        if(productsContainer.length > 0 )
        {
            btnDeleteAll.innerHTML = `<button onclick="deleteAll()" >Delete All(${productsContainer.length})</button>`;
        }
        else
        {
            btnDeleteAll.innerHTML = '';
        }
}

// clear inputs function
function clrForm(){
    title.value ='';
    price.value ='';
    taxes.value ='';
    ads.value ='';
    discount.value ='';
    total.innerHTML ='';
    count.value ='';
    category.value ='';
    getTotal();
}

// delete function
function deletepro(i){
    productsContainer.splice(i,1);
    localStorage.setItem('members', JSON.stringify(productsContainer));
    read();
}

// delete all products function
function deleteAll(){
    productsContainer = [];
    localStorage.setItem('members', JSON.stringify(productsContainer));
    read();
}

// update function
function updatePro(i){   
        title.value = productsContainer[i].title;
        price.value = productsContainer[i].price;
        taxes.value = productsContainer[i].taxes;
        ads.value = productsContainer[i].ads;
        discount.value = productsContainer[i].discount;
        getTotal();
        count.style.display = 'none'
        category.value = productsContainer[i].category; 
        submit.innerHTML = 'Update'; 
        mood = 'Update';
        tmp = i;
        scroll({
            top:0,
            behavior:"smooth"
        })
}

// search fuctions
var searchMood = 'Title' ;
function getSearchID(id){
    if( id == 'searchTitle' )
    {
        searchMood = 'Title';
    }
    else
    {
        searchMood = 'Category';
    }
    search.placeholder = 'Search By ' + searchMood ;
    search.focus();
}
// receives the search mood into the (index) parameter
function searchPro(index){
    var cartoona = '';

    for( var i = 0 ; i < productsContainer.length ; i++)
    {
        if( searchMood == 'Title')
        {
            if(productsContainer[i].title.toLowerCase().includes(index.toLowerCase()))
            {
                    cartoona +=`<tr>
                                <td>${i+1}</td>
                                <td>${productsContainer[i].title}</td>
                                <td>${productsContainer[i].price}</td>
                                <td>${productsContainer[i].taxes}</td>
                                <td>${productsContainer[i].ads}</td>
                                <td>${productsContainer[i].discount}</td>                  
                                <td>${productsContainer[i].total}</td>
                                <td>${productsContainer[i].category}</td>
                                <td><button onclick="updatePro(${i})" >update</button></td>
                                <td><button onclick="deletepro(${i})" >delete</button></td>
                            </tr>`
            }
        }
        else
            {            
                if(productsContainer[i].category.toLowerCase().includes(index.toLowerCase()))
                    {
                        cartoona +=`<tr>
                                        <td>${i+1}</td>
                                        <td>${productsContainer[i].title}</td>
                                        <td>${productsContainer[i].price}</td>
                                        <td>${productsContainer[i].taxes}</td>
                                        <td>${productsContainer[i].ads}</td>
                                        <td>${productsContainer[i].discount}</td>                  
                                        <td>${productsContainer[i].total}</td>
                                        <td>${productsContainer[i].category}</td>
                                        <td><button onclick="updatePro(${i})" >update</button></td>
                                        <td><button onclick="deletepro(${i})" >delete</button></td>
                                    </tr>`                   
                    }
        } 
    } 
    document.getElementById('demo').innerHTML = cartoona;
}

// regular Expression Rules
function validateProductInputs(){
    var regxText = /^[A-Z]/;
    var regxNum = /^[1-9]/;
    if(regxText.test(title.value) 
    && regxText.test(category.value) 
    && regxNum.test(price.value) 
    && regxNum.test(taxes.value) 
    && regxNum.test(ads.value) 
    && count.value >= 0 
    && regxNum.test(discount.value) == true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

