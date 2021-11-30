$(function() {
    var rows = [];
    var $tBody = $('table tbody');
    let aToM = 0;
    var $body = $("body");
    //Variables for table sorting
    var $table = $('table');
    var $controls = $table.find('a');
    var rowsArray = [];
    var originalOrder = [];
    //End of table sorting variables
    $.getJSON("character.json", function (data) {
        $.each(data.characters, function(index, value) {
            var $row = $('<tr></tr>');
            $row.append($(`<td>${value.name}</tr>`));
            $row.append($(`<td>${value.birthdate}</tr>`));
            $row.append($(`<td>${value.occupation}</tr>`));
            $row.append($(`<td>${value.house}</tr>`));
            rows.push({
                value: value.name.toLowerCase(),
                $element: $row
            });
            var firstChar = value.name.charAt(0).toLowerCase();
            aToM += firstChar <= "m" ? 1 : 0;
            $tBody.append($row);
            rowsArray.push($row);
            originalOrder.push($row);
        });
        var aMButton = $('<button/>', {
            text: 'A - M (' + aToM + ')',
            click: function (e) {
                rows.forEach(function (char){
                    if(char.value.charAt(0) <= "m") {
                        char.$element.show();
                    }
                    else {
                        char.$element.hide();
                    }
                });
            }
        });
        $body.append(aMButton);
        var nZButton = $('<button/>', {
            text: 'N - Z (' + (rows.length - aToM) + ')',
            click: function (e) {
                rows.forEach(function (char){
                    if(char.value.charAt(0) > "m") {
                        char.$element.show();
                    }
                    else {
                        char.$element.hide();
                    }
                });
            }
        });
        $body.append(nZButton);
    });
    
    $("#filter-char").on("keyup", function() {
        var input = $(this).val().toLowerCase();
        if(input) {
            rows.forEach(function (character){
                var index = 0;
                index = character.value.indexOf(input);
                if(index != -1) {
                    character.$element.addClass('highlight');
                }
                else {
                    character.$element.removeClass('highlight');
                }
            });
        }
        else {
            $('tr').removeClass('highlight')
        }
    });
//finction to sort the table
    var sortLists = function() {
        var compare = {
            date: function(a, b) {
                a = new Date(a);
                b = new Date(b);
    
                return a - b;
            },
            name: function(a, b) {
                if (a < b) {
                    return -1;
                }
                else {
                    return a > b ? 1 : 0;
                }
            }
        };
    
        
        $controls.on('click', function(e) {
            e.preventDefault();
            $link = $(this);
            var order = $link.data('sort');
            var column;
    
            if($link.hasClass('ascending')) {
                $link.toggleClass('ascending up');
                $link.addClass('descending');
                $link.addClass('down');
                $tBody.append(rowsArray.reverse());
            }
            else if ($link.hasClass('descending')) {
                $link.toggleClass('descending down');
                $tBody.append(originalOrder);
            }
            else {
                $link.addClass('ascending');
                $link.addClass('up');
                $link.parent().siblings().children('a').removeClass('descending ascending');
    
                if(compare.hasOwnProperty(order)) {
                    column = $controls.index(this);
    
                    rowsArray.sort(function(a, b) {
                        a = $(a).find('td').eq(column).text();
                        b = $(b).find('td').eq(column).text();
                        return compare[order](a, b);
                    });
                    $tBody.append(rowsArray);
                }
            }
        });
    }();
    
});