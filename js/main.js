$(function(){

  var modal = {
  	// declare the selected cat
    selectedCat: null,

    // store all the cats data
    cat: [
	    {
				name: 'first cat',
				imgSrc: 'cat_1.jpg',
				clicks: 0
			},{
				name: 'second cat',
				imgSrc: 'cat_2',
				clicks: 0
			},{
		    name: 'third cat',
		    imgSrc: 'cat_3',
				clicks: 0
		  },{
		    name: 'forth cat',
		    imgSrc: 'cat_4',
				clicks: 0
		  },{
		    name: 'fifth cat',
		    imgSrc: 'cat_5',
				clicks: 0
		  },{
		    name: 'sixth cat',
		    imgSrc: 'cat_6',
				clicks: 0
		  },{
		    name: 'seven cat',
		    imgSrc: 'cat_7',
				clicks: 0
		  },{
		    name: 'eighth cat',
		    imgSrc: 'cat_8',
				clicks: 0
		  }

    ]
  };

  var octopus = {
  	init: function(){

  	}
  };

  var selectedCatView = {
  	init: function(){
	  	// grab elements and html for using in the render function
	    this.selectedCatTemplate = $("script[data-template ='selected-cat']").html();

    }
  };

  var catListView = {

  };

  octopus.init();

});

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
		console.log($(this).children('.clicks'));
		$(this).children('.clicks').text(clicks);
   });
});