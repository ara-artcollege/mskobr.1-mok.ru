<?php

function force_https () {
 if ( !is_ssl() ) {
  wp_redirect('https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'], 301 );
  exit();
 }
}
add_action ( 'template_redirect', 'force_https', 1 );



?>