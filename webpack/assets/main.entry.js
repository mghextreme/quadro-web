/* ################ CSS ################ */

import 'bootstrap/dist/css/bootstrap.min.css';
import '~/sass/reset.css';
import '~/sass/theme.scss';
import '~/sass/cover.css';


/* ################ JavaScript ################ */

import 'babel-polyfill';
import 'bootstrap/js/dist/util';
import $ from 'jquery';
import Vue from 'vue';

//import '~/script.js';


/* ################ FontAwesome ################ */

import fontawesome from '@fortawesome/fontawesome'
import faSolid from '@fortawesome/fontawesome-free-solid'
import faRegular from '@fortawesome/fontawesome-free-regular'
import faBrands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(faSolid)
fontawesome.library.add(faRegular)
fontawesome.library.add(faBrands)


/* ################ Vue ################ */

import pageTitle from '~/vue/page-title.vue';

$(function(){
	var site = new Vue({
		el: '#page',
		components: {
			pageTitle
		}
	})
})