var image_files = false;
var pdf_files = false;
var word_documents = false;
var powerpoint = false;



function changeFilter(checkboxElem) {
    if (checkboxElem.id == "Image Files") {
        image_files = checkboxElem.checked;
    }
    if (checkboxElem.id == "PDF Files") {
        pdf_files = checkboxElem.checked;
    }
    if (checkboxElem.id == "Word Documents") {
        word_documents = checkboxElem.checked;
    }
    if (checkboxElem.id == "PowerPoint") {
        powerpoint = checkboxElem.checked;
    }
}


$(document).ready(function () {
    $('#all-filters-toggle').click(toggleAllFilterVisibility);
    $('#all-filters-toggle').mousedown(function () {
        $('#all-filters-toggle').css('color', '#84aaf2');
    });
    $('#all-filters-toggle').mouseup(function () {
        $('#all-filters-toggle').css('color', '');
    });
});

function toggleAllFilterVisibility() {
    if ($('#all-filters').css("display") == "none") {
        $('#all-filters').css("display", "")
        $('#all-filters-toggle').text("\u25BC Filter by file type \u25BC")
    } else {
        $('#all-filters').css("display", "none")
        $('#all-filters-toggle').text("\u25B2 Filter by file type \u25B2")
    }
}

