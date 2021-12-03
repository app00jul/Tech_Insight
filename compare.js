function updateLinkAndCounter() {
    var ids = $('.box .prod-id').map(function(i, x) { 
        return ['P', ++i, '=', $(this).text()].join(''); 
    }).toArray();
    
    $('#container > a').attr('href', 'Compare.html?' + ids.join('&'));

    var count = $(".box").length;
    $("p").text(count == 1 ? 'There is 1 box.' : 'There are ' + count + ' boxes.');
}

$(".more").click(function() {
    var id=$(this).next('.ProdId').html();
    $('<div/>', { 'class': 'box' })
       .append($('<span/>', { class: 'prod-id', text: id }))
       .append($('<a/>', { href: '#', text: 'x' }))
       .appendTo('#pop_up_body');
    
    updateLinkAndCounter();
    $("#pop_up_body").removeClass("hidden");
});

$(".box a").live("click", function() {
    $(this).parent().remove();
    updateLinkAndCounter();
});