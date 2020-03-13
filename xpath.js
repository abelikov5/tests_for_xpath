
$x("//*[text() = 'телефоны']");      //xpath for telefony

$x("//input[@class='TextInputV2_component_Haks']")[0];	//from 1990 rub;
$x("//input[@class='TextInputV2_component_Haks']")[1];	//to 131990 rub;

$x("//span[@class='ShowAllButton_text_VwKl']")[1];	//показать все в разделе "Производители";
$x("//span[@class='content' and text() = 'Meizu']"); //производитель Meizu или любой другой;

$x("//span[text() = ' Цене']"); //фильтрация по Цене
$x("//div[@class='ProductCard_header_U0M_']"); //товар из списка, можно указать с индексом

$x("//div[@class='InlineSet_item_i47B']")[0]; //значение цены в карточке товара

$x("//button[@class='ReactiveButton_baseComponent_2ask BuyButtonLayout_button_RVZc Button_button_2_o3']");
 // кнопка купить

 $x("//span[@class='modify-link']")[0];

 $x("//div[@class='shop-basket-item-service-note ']")[0]; //элемент удален 
 $x("//*[text() = 'Восстановить']")[0]; //восстановить из корзины




