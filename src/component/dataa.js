
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<style media="screen">

*{
  margin: 0; padding: 0;
  box-sizing: border-box;
  text-transform: capitalize;
  transition: all .2s linear;
  font-family: tahoma;
}

html{
  scroll-behavior: smooth;
}

body{
  overflow-x: hidden;
}

.sec{
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  color:#777;
  background: #f9f9f9;
  letter-spacing: 2px;
}

.sec:nth-child(odd){
  background: #ddd;
}

.navbar{
  position: fixed;
  top:50%; right:30px;
  transform: translateY(-50%);
  z-index: 1000;
}

.navbar ul{
  list-style: none;
  padding:0; margin: 0;
}

.navbar ul li{
  width: 200px;
  position: relative;
  text-align: right;
}

.navbar ul li .dot{
  color:#fff;
  display: block;
  padding:5px 0;
}

.navbar ul li .dot span{
  display: inline-block;
  background: #f44336;
  letter-spacing: 1px;
  padding:10px 25px;
  margin-right: 30px;
  border-radius: 3px;
  transform: translateX(30px);
  opacity: 0;
}

.navbar ul li:hover .dot span{
  transform: translateX(0px);
  opacity: 1;
}

.navbar ul li .dot span::before{
  content: '';
  position: absolute;
  top:50%; right:0;
  transform: translate(7px, -50%);
  border-left: 7px solid #f44336;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  display: block;
}

.navbar ul li .dot::before,
.navbar ul li .dot::after{
  content: '';
  position: absolute;
  top:50%;
  border-radius: 50%;
  display: block;
  transition: .2s ease-out;
}

.navbar ul li .dot::before{
  height:5px;
  width: 5px;
  border: 2px solid #333;
  right:0;
  transform: translateY(-50%);
}

.navbar ul li .dot.active::before,
.navbar ul li:hover .dot::before{
  border-color: #f44336;
  background: #f44336;
}

.navbar ul li .dot::after{
  height:15px;
  width: 15px;
  border: 2px solid #f44336;
  right:-5px;
  transform: translateY(-50%) scale(0);
}

.navbar ul li .dot.active::after,
.navbar ul li:hover .dot::after{
  transform: translateY(-50%) scale(1);
}

</style>
</head>
<body>

<nav class="navbar">

<ul>

  <li>
    <a href="#home" class="dot active" data-scroll="home">
      <span>home</span>
    </a>
  </li>

  <li>
    <a href="#about" class="dot" data-scroll="about">
      <span>about</span>
    </a>
  </li>

  <li>
    <a href="#service" class="dot" data-scroll="service">
      <span>service</span>
    </a>
  </li>

  <li>
    <a href="#project" class="dot" data-scroll="project">
      <span>project</span>
    </a>
  </li>

  <li>
    <a href="#contact" class="dot" data-scroll="contact">
      <span>contact</span>
    </a>
  </li>

</ul>

</nav>

<section class="sec" id="home">home</section>
<section class="sec" id="about">about</section>
<section class="sec" id="service">service</section>
<section class="sec" id="project">project</section>
<section class="sec" id="contact">contact</section>




<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" charset="utf-8"></script>


<script type="text/javascript">

$(document).ready(function(){

  $(window).on('scroll',function(){

    var link = $('.navbar a.dot');
    var top = $(window).scrollTop();

    $('.sec').each(function(){
      var id = $(this).attr('id');
      var height = $(this).height();
      var offset = $(this).offset().top - 150;
      if(top >= offset && top < offset + height){
        link.removeClass('active');
        $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });

  });

});


</script>











</body>
</html>
