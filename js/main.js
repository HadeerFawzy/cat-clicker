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

for (const cat of catsArr) {
	let wrapper = `<div class="wrapper">
                    <p class="name"> ${cat.name} </p>
                    <span class="clicks"></span>
                    <img src="img/${cat.img}.jpg" class="img">
                  </div>`;
  wrapperArr.push(wrapper);
}

$('#content').append(wrapperArr);

$('.wrapper').each(function(index, el) {
  let clicks = 0;
	$(this).on("click", function(){
    clicks ++;
    $(this).children('.clicks').text(clicks);
   });
});