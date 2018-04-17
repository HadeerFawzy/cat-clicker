const catsArr = [
	{
		name: 'first cat',
		img: 'cat_1'
	},{
		name: 'second cat',
		img: 'cat_2'
	}
]

let wrapperArr = []
let clicks = 0;
$('#clicks').text(clicks);

for (const cat of catsArr) {
	let wrapper = `<div class="wrapper">
                    <p class="name"> ${cat.name} </p>
                    <img src="img/${cat.img}.jpg" class="img">
                  </div>`;
  wrapperArr.push(wrapper);
}

$('#content').append(wrapperArr);

$('.wrapper').each(function(index, el) {
	$(this).on("click", function(){
    clicks ++;
    $('#clicks').text(clicks);
   });
});