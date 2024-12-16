<?php

namespace App\Walkers;

class CustomMenuWalker extends \Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = null) {
        $output .= "<ul class='sub-menu'>";
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args, $depth));
        $class_names .= $item->has_children ? ' menu-item-has-children' : '';
        
        $output .= $indent . '<li class="' . esc_attr($class_names) . '">';

        $atts = array(
            'title'  => ! empty($item->attr_title) ? $item->attr_title : '',
            'target' => ! empty($item->target)     ? $item->target     : '',
            'rel'    => ! empty($item->xfn)        ? $item->xfn        : '',
            'href'   => ! empty($item->url)        ? $item->url        : '',
            'class'  => 'nav-link',
        );

        $attributes = '';
        foreach ($atts as $attr => $value) {
            if (! empty($value)) {
                $value = ('href' === $attr) ? esc_url($value) : esc_attr($value);
                $attributes .= ' ' . $attr . '="' . $value . '"';
            }
        }

        $item_output = $args->before;
        $item_output .= '<a' . $attributes . '>';
        $item_output .= $args->link_before . apply_filters('the_title', $item->title, $item->ID) . $args->link_after;
        $item_output .= $item->has_children ? ' <span class="dropdown-arrow">▼</span>' : '';
        $item_output .= '</a>';
        $item_output .= $args->after;

        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}