
<div><header class="banner p-4 flex items-center justify-between">
  <a class="brand text-[32px] tracking-wider font-medium text-white ml-5 mr-3" href="{{ home_url('/') }}">
    {!! $siteName !!}
  </a>






  
  
  <div class="cityscape">
    
    <div class="sun"></div>
    <div class="building b1" data-node="Node 1"></div>
    <div class="building b2" data-node="Node 2"></div>
    <div class="building b3" data-node="Node 3"></div>
    <div class="building b4" data-node="Node 4"></div>
    <div class="building b5" data-node="Node 5"></div>
    <div class="building b6" data-node="Node 6"></div>
    <div class="building b7" data-node="Node 7"></div>
    <div class="building b8" data-node="Node 8"></div>
  </div>
  
  <!-- Contenedor para el popup -->
  <div class="popup-container" id="popupContainer"></div>
  
</div>

@if (has_nav_menu('primary_navigation'))
  <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
    <div class="navbar-container">
      <div class="cyberpunk-led-panel">
        <div class="led-screen" id="ledScreen">
          <div class="led-content" id="ledContent"></div>
        </div>
      </div>

      <div class="navbar-menu">
        {!! wp_nav_menu([
            'theme_location' => 'primary_navigation',
            'menu_class' => 'nav-menu',
            'link_class' => 'nav-link',
            'walker' => new \App\Walkers\CustomMenuWalker(),
            'echo' => false
        ]) !!}
      </div>
    </div>
  </nav>
@endif




</header>

