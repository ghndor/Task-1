var y =
  '<div class="card" id="car">  <div class="phto"><img src="img/photo- (2).jpg"/></div><div class="contant"><h2>card 1</h2> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi   saepe labore ullam maxime quod dolores iusto illo at magni     veritatis. </p> <button id="btn"> SEE MORE</button> </div>  </div>';

  
  let btn = document.getElementById("btn");
  
  btn.onclick =function(){
    console.log('hello')
    for (i = 0; i < 100; i++) {
      document.getElementById("con").innerHTML += y;
    }
    
    
    
  }