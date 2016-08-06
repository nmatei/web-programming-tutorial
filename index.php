<?php include("header-tpl.php"); ?>

<div id="breadcrumb">HOME : welcome home</div>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<h1><?php the_title(); ?></h1>
<p><?php the_content(__('(more...)')); ?></p>
<hr> <?php endwhile; else: ?>
<p><?php _e('Sorry, no posts matched your criteria.'); ?></p><?php endif; ?>

<?php include("footer-tpl.php"); ?>