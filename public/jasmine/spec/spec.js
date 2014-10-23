describe('Menu.test', function () {
  var mask = document.getElementsByClassName('mask')[0];  
  var btn = document.getElementsByClassName('btn_close')[0];  
  var boxOne = document.getElementsByClassName('mn_mobile')[0];

  it("Open Menu", function() {
    document.getElementsByClassName('ham')[0].onclick = function() {
      if(this.innerHTML === 'Menu') 
      { 
        mask.classList.remove('hide');      
        btn.classList.remove('hide');
        boxOne.classList.remove('anima_close');      
        boxOne.classList.add('anima_open');              
      } else {
        this.innerHTML = 'Menu';
        var computedStyle = window.getComputedStyle(boxOne),
            marginLeft = computedStyle.getPropertyValue('margin-left');
        boxOne.style.marginLeft = marginLeft;
        boxOne.classList.remove('anima_open');    
      }  
    }
  });
  
  it("Close Menu", function() {
    document.getElementsByClassName('btn_close')[0].onclick = function() {
      if(this.innerHTML === 'Close') 
      { 
        mask.classList.add('hide');
        btn.classList.add('hide');      
        boxOne.classList.remove('anima_open');
        boxOne.classList.add('anima_close');
      } else {
        this.innerHTML = 'Close';
        var computedStyle = window.getComputedStyle(boxOne),
            marginLeft = computedStyle.getPropertyValue('margin-left');
        boxOne.style.marginLeft = marginLeft;
        boxOne.classList.remove('anima_close');    
      }  
    }
  });
  
  it("Close Menu using Mask", function() {  
    document.getElementsByClassName('mask')[0].onclick = function() {
      if(this.innerHTML === 'Close') 
      { 
        mask.classList.add('hide');            
        btn.classList.add('hide');      
        boxOne.classList.remove('anima_open');
        boxOne.classList.add('anima_close');
      } else {
        this.innerHTML = 'Close';
        var computedStyle = window.getComputedStyle(boxOne),
            marginLeft = computedStyle.getPropertyValue('margin-left');
        boxOne.style.marginLeft = marginLeft;
        boxOne.classList.remove('anima_close');    
      }  
    }
  });  
});