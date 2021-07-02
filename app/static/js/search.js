function changeFilter(checkboxElem) {
    if (checkboxElem.id == "Match Feeder Bot") {
        match_feeder = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Stacking Bot") {
        match_stacker = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Speedy") {
        match_speedy = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Tall Lift") {
        match_tall_lift = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Fits Under Bridge") {
        match_under_bridge = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Doesn't Fit Under Bridge") {
        match_not_under_bridge = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Toppled Own Tower") {
        match_knocked_tower = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match DC :(") {
        match_DC = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Dangerous Driving") {
        match_dangerous_driving = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Steps Over Bridge") {
        match_steps_over_bridge = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match GP :)") {
        match_very_gp = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Not GP :(") {
        match_not_gp = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Gold Division") {
        match_gold = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Silicon Division") {
        match_silicon = checkboxElem.checked;
    }
    searchChange();
}

function changeFilter(checkboxElem) {
    if (checkboxElem.id == "Match Feeder Bot") {
        match_feeder = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Stacking Bot") {
        match_stacker = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Speedy") {
        match_speedy = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Tall Lift") {
        match_tall_lift = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Fits Under Bridge") {
        match_under_bridge = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Doesn't Fit Under Bridge") {
        match_not_under_bridge = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Toppled Own Tower") {
        match_knocked_tower = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match DC :(") {
        match_DC = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Dangerous Driving") {
        match_dangerous_driving = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Steps Over Bridge") {
        match_steps_over_bridge = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match GP :)") {
        match_very_gp = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Not GP :(") {
        match_not_gp = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Gold Division") {
        match_gold = checkboxElem.checked;
    }
    if (checkboxElem.id == "Match Silicon Division") {
        match_silicon = checkboxElem.checked;
    }
    searchChange();
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
        $('#all-filters-toggle').text("\u25BC All Filters \u25BC")
    } else {
        $('#all-filters').css("display", "none")
        $('#all-filters-toggle').text("\u25B2 All Filters \u25B2")
    }
}


searchChange();