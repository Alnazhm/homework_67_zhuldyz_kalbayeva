 let urlParams = new URLSearchParams(window.location.search);
    let param = urlParams.get('id');
    $.get(`https://www.breakingbadapi.com/api/characters/${param}`, function(data) {
    let detailCard = $('<div class="card" style="width: 38rem;">\n' +
        '  <img src="..." id="img" class="card-img-top" alt="actors">\n' +
        '  <div class="card-body">\n' +
        '  <h2 class="card-text" id="keys" style="color: grey"></h2>\n' +
        '  </div>\n' +
        '</div>');
    $('#container-card').append(detailCard);
    for (const [key, value] of Object.entries(data[0])) {
        if(key != 'birthday'){
            $('#keys').append(`${key}: ${value}<br>`);
        }
        else
            if(key == 'birthday'){
                if(data[0]['birthday'] == "Unknown") {
                    $('#keys').append(`age: not defined<br>`);
                }
                else {
                    let today = new Date();
                    let date = data[0]['birthday']
                    let birthYear = date.substring(6, )
                    let value = today.getFullYear() - birthYear;
                    $('#keys').append(`Age: ${value}<br>`);
                }
            }
    }
    $("#img").attr("src", `${data[0].img}`);
})