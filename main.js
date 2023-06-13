var app= new Vue({
    el:'#app',
    data:{
        product:'Socks',
        image: './images/kaoskaki1.jpg',
        link :'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg', 
        inventory:0,
        onSale:true,
        details:["80% cotton", "20% polyester","Gender-neutral"],
        variants:[{
            variandId:2234,
            variantColor:"green"},
            {
            variandId:2235,
            variantColor:"blue"},
            
        ],
        sizes:["L","XL","S"],

        cart:100, 
      }
})