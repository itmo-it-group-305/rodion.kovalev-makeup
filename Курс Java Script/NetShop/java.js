/**
 * Created by rod on 14.12.15.
 */
    jQuery(document).ready(
        function() {
            function Basket() {
                var t = this;
                this.totalPrice=0;
                this.price= 0;
                this.init= function () {
                    //в init нужно вставить обработку кнопок, обработку крестика(Х), то, что мы имеем в сеттере
                    jQuery('button').on('click', t.addGoods);
                    jQuery('body').on('click', '.deleteAll', t.delGoods);
                    jQuery('body').on('click', '.btn-slide', t.openBasket);
                    jQuery('body').on('click', '.basket-delete', t.delOne);
                    jQuery('body').on('click', 'record', t.record);
                    //тут написать код обработчиков jquery
                };
                this.record= function(){
                    jQuery.ajax({
                        'type': 'POST',
                        'url': '/dir/myscript.php',
                        'contentType': 'json',
                        'data': {'login': jQuery("#login").val(),
                            'passw': jQuery("#passw").val},
                        'cache':false,
                        'success': function (html){
                            if(html.length){
                                //do something
                            }
                        }
                    })
                };

                this.openBasket= function () {
                    jQuery(".panel").slideToggle("slow");
                    jQuery(this).toggleClass("active");
                    return false;
                };



                this.addGoods= function () {
                    var elm = jQuery(this);
                    var newElm = elm.closest('.button_add');
                    var name = elm.attr('name');
                    var price = elm.attr('price');
                    var code = elm.attr('code');

                    //усы здесь!

                    var tempStr = '<div class="good"> Код продукта {{code}} цена {{price}} наименование {{name}} <button class="basket-delete">x</button></div>';

                    var data = {
                        'code': function(){
                            return code;
                        },
                        'price': function(){
                            return price;
                        },
                        'name': function(){
                            return name
                        }
                    };
                    var output=Mustache.render(tempStr,data);
                    jQuery('#basket').prepend(output);


                    t.totalPrice += +price;
                    console.log(t.totalPrice);
                    jQuery('.total-sum').html('Сумма набежала: ' + t.totalPrice);
                };

                this.delGoods= function () {
                    jQuery('.deleteAll').click( function() {
                    jQuery('#basket').remove();
                        jQuery('#basket').html('Сумма набежала: 0');

                    });
                };

                this.delOne= function () {
                    //удалить из корзины
                    jQuery(this).closest('.good').remove();
                    this.totalPrice -= +price;
                };

                this.reculcPrice= function () {

                };
                this.changeAmount= function () {
                    //
                };
                this.discount= function () {

                };
                this.print= function () {
                    //когда пользователь нажимает печать чек
                }
            }
//обработчик
            var basket1= new Basket('basket');
            basket1.init();
        });

jQuery.ajax({
    'type': 'POST',
    'url': '/dir/'
});

//ООП
//Создаем шаблон. По которому будем в будущем создавать объекты
//function Storage() {
//    this.store = [];
//    //return  {maxSize=100} теперь при var obj = new Storage() уже до store не достучаться. будет undefined. Так как фунция вернет
//    // {maxSize=100}, а не локадльные методы и свойства, которые в нем есть
//    function Construct(){
//        this.set=function(name,value){
//            store[name]=value};
//        this.get=function(name){
//            return this.store[name];
//        }
//    }
//return new Construct();
//}
//и теперь obj.store будет равно undefined. Так как он стал приватным

// Storage.prototype.set = function(name,value) {
//        this.store[name]= value;
//
//    };
//Storage.prototype.get = function (name) {
//        return this.store[name];
//    };
//
//Storage.set('name', 'Piter');
//Storage.get('name');
//
//
//var db = new Storage();
//db.set('name','Piter');
//var db2 = new Storage();
//db2.set ('set', 'Rodeo');
//console.log(db2.store);
//
//
//var db = new Storage();
//
//
////теперь дети элемента могут использовать функцию удаления, заданную в прототайпе
//Storage.prototype.del= function(){
//    this.store=[];
//};
//db.del();
//
////также можно адресоваться в массив store
//db.store


