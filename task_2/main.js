$.get('https://www.breakingbadapi.com/api/characters/?fields=name,img,char_id', function(data) {
    let rows = $('<div class="row" id="rows"></div>');
    $('#container').append('<h1 style="text-align: center;color: blue; padding: 70px;">The Breaking Bad API Tread Lightly</h1>');
    $('#container').append(rows);
    for (let i = 0; i < data.length; i++) {
         $('#rows').append(`<div class="col-4" id="cols"><div class="card" style="width: 20rem;">
               <img src="${data[i].img}" id="img" style="height: 420px;" class="card-img-top" alt="...">
                   <div class="card-body">
                 <h5 class="card-title" id="names">${data[i].name}</h5>
                 <a href="#" class="btn btn-secondary" id="btn">More</a>
               </div></div></div>`);
         $("#btn").attr('href','character.html?id=' +`${data[i].char_id}`);
    }
})