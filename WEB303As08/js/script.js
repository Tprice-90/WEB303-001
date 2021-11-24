$(function() {
    var $aToM = $('#a-m');
    var $nToZ = $('#n-z')
    var aToMArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
    var nToZArray = ['n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var rows = [];
    var $tBody = $('tbody');
    var characterValue = $.getJSON("character.json").done(function (data) {
        $.each(data.characters, function(index, value) {
            var $row = $('<tr></tr>');
            $row.append($('<td></tr>').text(value.name));
            $row.append($('<td></td>').text(value.birthdate));
            $row.append($('<td></td>').text(value.occupation));
            $row.append($('<td></td>').text(value.house));
            rows.push({
                value: value,
                $element: $row
            });
        });
        rows.forEach(function(row){
            $tBody.append(row.$element);
        });
        console.log(rows);
    });
    //Could not figure out the Hide()/Show()...Kept only hiding everything...
    $aToM.on('click', function(){
        aToMArray.forEach(function(char){
            rows.forEach(function(row){
                if(row.value.name.charAt(0) === char) {
                    row.$element.not(":visible").show();
                }
                else {
                    row.$element.not(":hidden").hide();
                }
            })
        })
    });
    $nToZ.on('click', function(){
        nToZArray.forEach(function(char){
            rows.forEach(function(row){
                if(row.value.name.charAt(0) == char) {
                    row.$element.not(":visible").show();
                }
                else {
                    row.$element.not(":hidden").hide();
                }
            })
        })
    });
    $("#filter-char").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("tbody tr").filter(function() {
            if ($(this).text().toLowerCase().indexOf(value) > -1) {
                $(this).css('background-color','yellow');
            }
            else {
                $(this).css('background-color', '');
            }
        });
    });
});