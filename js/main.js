$(function(){

  var modal = {
  	// declare the selected cat
    selectedCat: null,

    // boolean for admin view
    adminView: false,

    // store all the cats data
    cats: [
	    {
				name: 'first cat',
				img: 'img/cat_1.jpg',
				clicks: 0
			},{
				name: 'scnd cat',
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
      adminPanel.init();
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
    setSelectedCat: function (cat,){
      modal.selectedCat = cat;
    },
    // increase clicks for cat
    increaseClick: function(){
      modal.selectedCat.clicks ++;
      // render both views to increase th click at the list and the selected cat
      selectedCatView.render();
      catListView.render();
      adminPanel.render();
    },

    setAdminView: function(boolean){
      modal.adminView = boolean;
    },

    // render admin view if modal.adminView is true
    getAdminView: function (){
      return modal.adminView;
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
      // path 0 here as an index cause this is the first time to render the selected cat view
      this.render(0);
    },

    render: function(index){
      var selectedCat = octopus.getSelectedCat();

      this.selectedCatTemplate.attr( 'data-index', index);
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
        selectedCatView.render([catObjectIndex]);
        adminPanel.init();
        adminPanel.render();
      });
    }
  };

  var adminPanel = {
    init:  function(){
      this.adminPanelHtml = $('#admin-area');

      $('#cancel-btn').on("click", function(){
        octopus.setAdminView(false);
        adminPanel.render();
      });

      $('#edit-btn').on("click", function(){
        octopus.setAdminView(true);
        adminPanel.render();
      });

      $('#save-btn').on("click", function(){
        var selectedCatIndex = $('#selected-cat').attr('data-index');
        var newCat = {};
        newCat.name = $('#name').val();
        newCat.img = $('#url').val();
        newCat.clicks = $('#clicks').val();
        
        modal.cats[selectedCatIndex] = newCat;
        octopus.setSelectedCat(newCat);
        catListView.render();
        selectedCatView.render();
      });

      this.render();
    },

    render: function(){
      var boolean = octopus.getAdminView();

      // function to toggle the  view
      (function adminViewContent(){
        $('#name').val(octopus.getSelectedCat().name);
        $('#url').val(octopus.getSelectedCat().img);
        $('#clicks').val(octopus.getSelectedCat().clicks);
      })();

      // function to toggle the  view
      (function toggleAdminView(){
        if (boolean) {
          adminPanel.adminPanelHtml.show();
        }else if(!boolean){
          adminPanel.adminPanelHtml.hide();
        }
      })();
    }
  }

  octopus.init();

});

