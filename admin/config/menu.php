<?php

namespace monad\admin;

$menu->using(__NAMESPACE__, function() use($menu) {
    $menu->group('content')->add('page')
                           ->add('menu');
});

