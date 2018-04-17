const catsArr = [
	{
		name: 'first cat',
		img: 'cat_1'
	},{
		name: 'second cat',
		img: 'cat_2'
	},{
    name: 'third cat',
    img: 'cat_3'
  },{
    name: 'forth cat',
    img: 'cat_4'
  },{
    name: 'fifth cat',
    img: 'cat_5'
  },{
    name: 'sixth cat',
    img: 'cat_6'
  },{
    name: 'seven cat',
    img: 'cat_7'
  },{
    name: 'eighth cat',
    img: 'cat_8'
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