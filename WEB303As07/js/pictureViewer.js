$.fn.photoViewer = function () {
    this.on('click', '.thumb', function(e) {
        var request;
        var $current;
        var cache = {};
        var $frame = $('.photo-frame');
        var $thumb = $('.thumb');
        var $img;
        var src = this.href;
        var request = src;
        e.preventDefault();
        
        function crossfade ($img) {
            if($current) {
                $current.stop().fadeOut('slow');
            }
            $img.css({
                marginLeft: -$img.width() / 2,
                marginTop: -$img.height() / 2
            });
            $img.stop().fadeTo('slow', 1);
            $current = $img
        }
        $thumb.removeClass('active');
        $(this).addClass('active');

        if (cache.hasOwnProperty(src)) {
            if (cache[src].isLoading === false) {
                crossfade(cache[src].$img);
            }
        }
        else {
            $img = $('<img/>');
            cache[src] = {
                $img: $img,
                isLoading: true
            };
        }
        $img.on('load', function(){
            $(this).hide();
            $frame.removeClass('is-loading').html($img);
            cache[src].isLoading = false;
            if (request === src) {
                crossfade($(this));
            }
        });
        $frame.addClass('is-loading');
        $img.attr({
            'src': src,
            'alt': this.title ?? ""
        });
    });
    return this;
}