
var cursorOnFilter=0;
var changes=0;
var lastOpenFilter =0;
function showFilterMenu(id){
    if(changes>0 && lastOpenFilter!=id) reFilter();
    lastOpenFilter=id;
    $('#optionFilter'+id).unbind('move',function(){cursorOnFilter=1;});
    $('#filterGroup'+id).unbind('move',function(){cursorOnFilter=1;});
    $('#optionFilter'+id).unbind('mouseleave',function(){cursorOnFilter=0;});
    $('#filterGroup'+id).unbind('mouseleave',function(){cursorOnFilter=0;});
    $('body').unbind('click');


    if($('#optionFilter'+id).css('display')!='block') {
        $('.optionFilterList').hide();
        $('form.filterForm>div').removeClass('filterGroupOpen');

        cursorOnFilter=1;
        $('#optionFilter'+id).bind('mousemove',function(){cursorOnFilter=1;});
        $('#filterGroup'+id).bind('mousemove',function(){cursorOnFilter=1;});
        $('#optionFilter'+id).bind('mouseleave',function(){cursorOnFilter=0;});
        $('#filterGroup'+id).bind('mouseleave',function(){cursorOnFilter=0;});
        $('#optionFilter'+id).slideDown(function(){
            $('body').bind('click',function(){
                if(!cursorOnFilter){
                    $('.optionFilterList').hide();
                    $('form.filterForm>div').removeClass('filterGroupOpen');
                    $('body').unbind('click');
                }
            });
        });
        $('#filterGroup'+id).addClass('filterGroupOpen');
    } else {
        $('#optionFilter'+id).hide();
        $('#filterGroup'+id).removeClass('filterGroupOpen');
    }
}
function deleteFromCart(id){
    jQuery.ajax({
        url: "/classes/Sibloma.php",
        type: "POST",
        data: { "delete": id },
        success: function(response) {
            //alert("#item-cart-"+id);
            $(".item-cart-"+id).css("display", "none");
        }
    });
}
