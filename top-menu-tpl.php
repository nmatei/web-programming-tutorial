<header>
    <div>
        <a id="logo" href="." title="FastTrackIT">
            <img src="<?php echo get_template_directory_uri()?>/img/logo.png" alt="FastTrackIT" title="FastTrackIT">
        </a>
        <h1><?php echo get_bloginfo( 'description', 'display' ); ?></h1>
    </div>
</header>

<div id="top-menu">
    <div>
        <button id="secondary-toggle" class="genericon genericon-menu">Widgets</button>

        <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu', 'menu_id' => 'primary-menu' ) ); ?>
    </div>
</div>