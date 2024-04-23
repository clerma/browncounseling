(function(a,t){"use strict";var o;a=a||{},t.extend(a,{PortfolioAjaxPage:{defaults:{elements:".page-portfolios"},initialize:function(a){return this.$elements=a||t(this.defaults.elements),this.build(),this},build:function(){return this.$elements.each((function(){var e=t(this);if(e.find("#portfolioAjaxBox").get(0)&&!e.data("portfolioAjaxOnPage")){var n={$wrapper:t(this),pages:[],currentPage:0,total:0,$ajaxBox:e.find("#portfolioAjaxBox"),$ajaxBoxContent:e.find("#portfolioAjaxBoxContent"),build:function(){var a=this;a.pages=[],a.total=0,e.find("a[data-ajax-on-page]").each((function(){a.add(t(this))})),e.off("mousedown","a[data-ajax-on-page]").on("mousedown","a[data-ajax-on-page]",(function(a){if(2==a.which)return a.preventDefault(),!1}))},add:function(a){var t=this,o=a.attr("href");t.pages.push(o),t.total++,a.off("click").on("click",(function(a){a.preventDefault();var e=a.target.className;return"owl-next"==e||"owl-prev"==e||t.show(t.pages.indexOf(o)),!1}))},events:function(){var a=this;e.off("click","a[data-ajax-portfolio-close]").on("click","a[data-ajax-portfolio-close]",(function(t){return t.preventDefault(),a.close(),!1})),a.total<=1?t("a[data-ajax-portfolio-prev], a[data-ajax-portfolio-next]").remove():(e.off("click","a[data-ajax-portfolio-prev]").on("click","a[data-ajax-portfolio-prev]",(function(t){return t.preventDefault(),a.prev(),!1})),e.off("click","a[data-ajax-portfolio-next]").on("click","a[data-ajax-portfolio-next]",(function(t){return t.preventDefault(),a.next(),!1})))},close:function(){var a=this;if(a.$ajaxBoxContent.find(".rev_slider, rs-module").get(0))try{a.$ajaxBoxContent.find(".rev_slider, rs-module").revkill()}catch(a){}a.$ajaxBoxContent.empty(),a.$ajaxBox.removeClass("ajax-box-init").removeClass("ajax-box-loading")},next:function(){var a=this;a.currentPage+1<a.total?a.show(a.currentPage+1):a.show(0)},prev:function(){var a=this;a.currentPage-1>=0?a.show(a.currentPage-1):a.show(a.total-1)},show:function(e){var n=this;if(o=null,n.$ajaxBoxContent.find(".rev_slider, rs-module").get(0))try{n.$ajaxBoxContent.find(".rev_slider, rs-module").revkill()}catch(a){}if(n.$ajaxBoxContent.empty(),n.$ajaxBox.removeClass("ajax-box-init").addClass("ajax-box-loading"),a.scrolltoContainer(n.$ajaxBox),n.currentPage=e,e<0||e>n.total-1)return n.close(),!1;t.ajax({url:n.pages[e],complete:function(e){var i=t(e.responseText),r=i.find("#content article.portfolio");i.filter('style[data-type]:not("")');t("#portfolioAjaxCSS").get(0)?t("#portfolioAjaxCSS").text(""):t('<style id="portfolioAjaxCSS"></style>').appendTo("head"),r.find(".portfolio-nav-all").html('<a href="#" data-ajax-portfolio-close data-bs-tooltip data-original-title="'+js_porto_vars.popup_close+'"><i class="fas fa-th"></i></a>'),r.find(".portfolio-nav").html('<a href="#" data-ajax-portfolio-prev class="portfolio-nav-prev" data-bs-tooltip data-original-title="'+js_porto_vars.popup_prev+'"><i class="fa"></i></a><a href="#" data-toggle="tooltip" data-ajax-portfolio-next class="portfolio-nav-next" data-bs-tooltip data-original-title="'+js_porto_vars.popup_next+'"><i class="fa"></i></a>'),n.$ajaxBoxContent.html(r.html()).append('<div class="row"><div class="col-lg-12"><hr class="tall"></div></div>'),n.$ajaxBox.removeClass("ajax-box-loading"),t(window).trigger("resize"),porto_init(),a.refreshVCContent(n.$ajaxBoxContent),n.events(),o=n,n.$ajaxBoxContent.find(".lightbox:not(.manual)").each((function(){var a,o=t(this),e=o.data("plugin-options");e&&(a=e),o.themeLightbox(a)}))}})}};n.build(),e.data("portfolioAjaxOnPage",n)}})),this}}}),t(document.documentElement).on("keyup",(function(a){try{if(!o)return;39==a.keyCode&&o.next(),37==a.keyCode&&o.prev()}catch(a){}}))}).apply(this,[window.theme,jQuery]),jQuery(document).ready((function(a){"use strict";void 0!==theme.PortfolioAjaxPage&&theme.PortfolioAjaxPage.initialize()}));