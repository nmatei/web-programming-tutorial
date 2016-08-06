<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title( '|', true, 'right' ); ?></title>

    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri()?>/css/reset.css">
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri()?>/css/style.css">
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri()?>/css/cards.css">
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri()?>/css/agenda.css">

    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri()?>/css/responsive/max-600px.css" media="(max-width: 600px)">
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri()?>/css/responsive/min-1024px.css" media="(min-width: 1024px)">
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri()?>/css/fonts/genericons/genericons.css" media="all" />
</head>
<body>

<div id="layout" class="x-borders">

    <?php include ("top-menu-tpl.php");?>

    <div id="content-wrapper">

        <?php include ("left-bar-tpl.php");?>

        <div id="content">
