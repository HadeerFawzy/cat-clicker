$(function(){

  var modal = {
  	// declare the selected cat
    selectedCat: null,

    // store all the cats data
    cats: [
	    {
				name: 'first cat',
				img: 'img/cat_1.jpg',
				clicks: 0
			},{
				name: 'second cat',
				img: 'img/cat_2.jpg',
				clicks: 0
			},{
		    name: 'third cat',
		    img: 'img/cat_3.jpg',
				clicks: 0
		  },{
		    name: 'forth cat',
		    img: 'img/cat_4.jpg',
				clicks: 0
		  },{
		    name: 'fifth cat',
		    img: 'img/cat_5.jpg',
				clicks: 0
		  },{
		    name: 'sixth cat',
		    img: 'img/cat_6.jpg',
				clicks: 0
		  },{
		    name: 'seven cat',
		    img: 'img/cat_7.jpg',
				clicks: 0
		  },{
		    name: 'eighth cat',
		    img: 'img/cat_8.jpg',
				clicks: 0
		  }

    ]
  };

  var octopus = {
  	init: function(){
      // set the selected cat to the first one
      modal.selectedCat = modal.cats[0];
      // call the views
      selectedCatView.init();
      catListView.init();
  	},
    // get the list of the cats
    getCats: function (){
      return modal.cats;
    },
    // get the selected cat
    getSelectedCat: function (){
      return modal.selectedCat;
    },
    // set the selected cats to the one argument sent to the setter function
    setSelectedCat: function (cat){
      modal.selectedCat = cat;
    },
    // increase clicks for cat
    increaseClick: function(){
      modal.selectedCat.clicks ++;
      // render both views to increase th click at the list and the selected cat
      selectedCatView.render();
      catListView.render();
    }
  };

  var selectedCatView = {
  	init: function(){
	  	// grab elements and html for using in the render function
	    this.selectedCatTemplate = $("#selected-cat");

      // add click event to img
      this.selectedCatTemplate.children('.img').on("click", function(){
        octopus.increaseClick();
      });

      // call render to update the selected cat at the view
      this.render();
    },

    render: function(){
      var selectedCat = octopus.getSelectedCat();
      this.selectedCatTemplate.children('.name').text(selectedCat.name);
      this.selectedCatTemplate.children('.img').attr( 'src', selectedCat.img);
      this.selectedCatTemplate.children('.clicks').text(selectedCat.clicks);
    }
  };

  var catListView = {
    init: function(){
      this.catListWrapper = $('#cats-list');
      this.render();
    },

    render: function(){
      var allCats = octopus.getCats();
      this.catListWrapper.html('');

      allCats.forEach((cat, index) => {
        let wrapper = `<div class="wrapper" data-index=${index}>
                          <p class="name"> ${cat.name} </p>
                          <span class="clicks">${cat.clicks}</span>
                          <img src="${cat.img}" class="img">
                        </div>`;
        this.catListWrapper.append(wrapper);  
      });  

      // add click function to cats
      $('.wrapper').on("click", function(){
        var catObjectIndex = $(this).attr("data-index");
        octopus.setSelectedCat(allCats[catObjectIndex]);
        selectedCatView.render();
      });


    }
  };

  octopus.init();

});

