$(function () {
    $('#photo-viewer').photoViewer().show().on('click', '.photo-frame', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here
        class Modal {
            // $window = $(window);
            // $modal = $('<div class="modal"></div>');
        
            constructor() {
                this.$window = $(window);
                this.$modal = $('<div class="modal"></div>');
                this.$content = $('<div class="modal-content"/>');
                this.$close = $('<button role="button" class="modal-close">close</button>');
        
                this.$modal.append(this.$content, this.$close);
                this.$close.on('click', (e) => {
                    e.preventDefault();
                    this.close();
                });
            }
        
            center() {
                // Distance from top and left to center of modal
                var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
                var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
                // Set CSS for the modal
                this.$modal.css({
                    top: top + this.$window.scrollTop(),
                    left: left + this.$window.scrollLeft()
                });
            }
        
            open(settings) { // settings contains content, width and height
                this.$content.empty().append($('.photo-frame').html());
                this.$modal.css({                          // Dimensions
                    width: settings.width ?? '800',    // Set width
                    height: settings.height ?? '450'   // Set height
                }).appendTo('body');                  // Add to page
                this.center();                       // Call center() again 
                this.$window.on('resize', () => this.center()); // On window resize
            }
        
            close() {
                // Remove content from the modal window
                this.$content.empty();
                // Remove modal window from the page
                this.$modal.detach();
                // Remove event handler
                this.$window.off('resize');
            }
        }
        var $modal = new Modal;
        var $modalFrame = $(this).clone($modal.open($('.photo-frame')[0]));
    });
});
