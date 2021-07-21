var filter_dict = {"image": true, "pdf": true, "docx": true, "pptx": true}


$(document).ready(function () {
    $('#other').css('padding-bottom', '4em');
    $("[id='Overall Match Total Score']").css('padding-bottom', '4em');
    setupFilters();
    $('#main-filters-toggle').click();
    $('#other').click();
    $('#chart-toggle').click();
    $('#table-toggle').click();

    updateChartScope();
});

function setupFilters() {
    $('#all-filters-toggle').click(toggleAllFilterVisibility);
    $('#all-filters-toggle').mousedown(function () {
        $('#all-filters-toggle').css('color', '#84aaf2');
    });
    $('#all-filters-toggle').mouseup(function () {
        $('#all-filters-toggle').css('color', '');
    });

    $('#chart-toggle').click(toggleChartVisibility);
    $('#chart-toggle').mousedown(function () {
        $('#chart-toggle').css('color', '#84aaf2');
    });
    $('#chart-toggle').mouseup(function () {
        $('#chart-toggle').css('color', '');
    });

    $('#table-toggle').click(toggleTableVisibility);
    $('#table-toggle').mousedown(function () {
        $('#table-toggle').css('color', '#84aaf2');
    });
    $('#table-toggle').mouseup(function () {
        $('#table-toggle').css('color', '');
    });
}


function toggleAllFilterVisibility() {
    if ($('#all-filters').css("display") == "none") {
        $('#all-filters').css("display", "")
        $('#all-filters-toggle').text("\u25BC Filter by file type \u25BC")
    } else {
        $('#all-filters').css("display", "none")
        $('#all-filters-toggle').text("\u25B2 Filter by file type \u25B2")
    }
}

function toggleChartVisibility() {
    if ($('#chart-parent').css("display") == "none") {
        $('#chart-parent').css("display", "block")
        $('#chart-toggle').text("\u25BC Chart \u25BC")
    } else {
        $('#chart-parent').css("display", "none")
        $('#chart-toggle').text("\u25B2 Chart \u25B2")
    }
}

function toggleTableVisibility() {
    if ($('#table-parent').css("display") == "none") {
        $('#table-parent').css("display", "block")
        $('#table-toggle').text("\u25BC Scouting Data \u25BC")
    } else {
        $('#table-parent').css("display", "none")
        $('#table-toggle').text("\u25B2 Scouting Data \u25B2")
    }
}

function changeFilter(checkboxElem) {
    changeVisibility(checkboxElem.id, checkboxElem.checked)
    if(checkboxElem.id=="Image Files" && !checkboxElem.checked){
        filter_dict["image"] = false;
    }
    if(checkboxElem.id=="PDF Files" && !checkboxElem.checked){
        filter_dict["pdf"] = false;
    }
    if(checkboxElem.id=="Word Documents" && !checkboxElem.checked){
        filter_dict["docx"] = false;
    }
    if(checkboxElem.id=="PowerPoint" && !checkboxElem.checked){
        filter_dict["pptx"] = false;
    }
}

function changeVisibility(columnName, isVisible) {
    var filterElems = document.getElementsByClassName('filter-' + columnName)
    if (isVisible) {
        for (var i = 0; i < filterElems.length; i++) {
            filterElems[i].style.display = ''
        }
    } else {
        for (var i = 0; i < filterElems.length; i++) {
            filterElems[i].style.display = 'none'
        }
    }
}