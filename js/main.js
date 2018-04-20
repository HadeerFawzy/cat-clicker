$(function(){

  var modal = {
  	// declare the selected cat
    selectedCat: null,

    // store all the cats data
    cat: [
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
      modal.selectedCat = modal.cat[0];
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
      console.log(modal.selectedCat.clicks);
      // render both views to increase th click at the list and the selected cat
      // catListView.render();
      selectedCatView.render();
    }
  };

  var selectedCatView = {
  	init: function(){
	  	// grab elements and html for using in the render function
	    this.selectedCatTemplate = $("#selected-cat");
      // console.log(selectedCatTemplate);

      // add click event to img
      this.selectedCatTemplate.children('.img').on("click", function(){
        octopus.increaseClick();
        // console.log(octopus.getSelectedCat().clicks);
      });

      // call render to update the selected cat at the view
      this.render();
    },

    render: function(){
      var selectedCat = octopus.getSelectedCat();
      // console.log(selectedCat);
      // console.log(this.selectedCatTemplate);
      this.selectedCatTemplate.children('.name').text(selectedCat.name);
      this.selectedCatTemplate.children('.img').attr( 'src', selectedCat.img);
      this.selectedCatTemplate.children('.clicks').text(selectedCat.clicks);
    }
  };

  var catListView = {
    init: function(){

    }
  };

  octopus.init();

});
