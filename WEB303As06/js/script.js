$(function () {
    //Bio Accordion
    $('.bioControl').on('click', function (e) {
        console.log("Event data", e);
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .next('.bioPanel')
            .slideToggle(2000);
    });
    //Album Accordion
    $('.albumControl').on('click', function (e) {
        console.log("Event data", e);
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .next('.albumPanel')
            .slideToggle(2000);
    });
    // Art Panel
    $('.artList').each(function () {
        var $this = $(this);

        $this.on('click', '.artControl', function (e) {
            e.preventDefault();
            var $currentLink = $(this);
            var $currentTab = $currentLink.parent();
            var currentId = this.hash;

            if (currentId && !$currentTab.is('.active')) {

                var $oldActivetab = $this.find('li.active');
                var $oldSelector = $oldActivetab.find('a').attr('href');
                var $oldPanel = $($oldSelector);

                $oldPanel.removeClass('active');
                $oldActivetab.removeClass('active');

                $(currentId).addClass('active');
                $currentTab.addClass('active');
            }
        });
    });
});