$(window).on("load", pageLoad);
String.prototype.hashCode = function () {
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
function pageLoad() {
    console.log('PageLoad');
    $('#btnPasswordSubmit').click(function() {
        if ($(this).val().toLowerCase().hashCode() = 102866733){
            console.log('lewd view activated');
        }
    });
}
