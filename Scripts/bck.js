$(window).on("load", pageLoad);

String.prototype.hashCode = function () {
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}

function pageLoad() {
    console.log('PageLoad');
    $('#btnPasswordSubmit').click(function() {
        if ($('#txtPassword').val().toLowerCase().hashCode() == 102866733) {
            console.log('lewd view activated');
        } else {
            console.log('wrong');
        }
        return false;
    });
}
