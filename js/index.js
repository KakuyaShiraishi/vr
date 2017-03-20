 var scene

	function init() {
	
   for (i = 0; i < 500; i++) {
    var position =  getRandomCoord() + ' '  + getRandomCoord() + ' ' +         getRandomCoord() ;
    
    addElement(randomColor(), position, getRandomSize()); 
   }
  }

function getRandomCoord(){
   return (Math.random() * 10) - 5; 
}

function getRandomSize() {
  return (Math.random() *0.2);  
}
			
function addElement(color, position, size) {
		var testObject = document.createElement('a-box')
		testObject.setAttribute('position', position || '0 0 0')
		testObject.setAttribute('color',  color)
    testObject.setAttribute('height', size || '1')
    testObject.setAttribute('width', size || '1')
    testObject.setAttribute('depth', size || '1')
  
		scene.appendChild(testObject)
	}

	scene = document.querySelector('a-scene');
  if (scene.hasLoaded) {
    init();
  } else {
  	scene.addEventListener('loaded', init)
  }