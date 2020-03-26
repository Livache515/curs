$('input.first').click(changeButton);
$('input.second').click(styleButton);

function changeButton() {
    $('div').slydeToggle()
            .html(newElem)
}

function styleButton(){
    $('div').css({
        'background-color':'Lightblue',
        'top':'30vh'
    });
}