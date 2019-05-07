 var Douban = {}, Book = {}
      var Do=function(){Do.actions.push([].slice.call(arguments))};Do.ready=function(){Do.actions.push([].slice.call(arguments))},Do.add=Do.define=function(o,l){Do.mods[o]=l},Do.global=function(){Do.global.mods=Array.concat(Do.global.mods,[].slice.call(arguments))},Do.global.mods=[],Do.mods={},Do.actions=[];
      
  define.ns('Book')
  define.config({
    'jquery': '$'
  , 'piwik': 'Piwik'
  , 'mod/ga': 'Book.ga'
  , 'mod/ajax': 'Book.ajax'
  , 'mod/cookie': 'Book.cookie'
  })

  Do.add('mod/cookie', {
    path: 'http://gateway.sinrun.top'
  , type: 'js'
  })

  Do.add('mod/ajax', {
    path: 'http://gateway.sinrun.top'
  , requires: ['mod/cookie']
  , type: 'js'
  })

  Do.add('mod/ga', {
    path: 'http://gateway.sinrun.top'
  , type: 'js'
  })



   window.user_id = window.user_id || ''
  define.config({
    'ui/slide1': 'Book.slide1'
  , 'ui/bubble1': 'Book.Bubble1'
  })
  Do.add('book/index1', { path: 'http://gateway.sinrun.top/js/book/index1.js' })
  Do.add('ui/slide1', { path: 'http://gateway.sinrun.top/js/book/slide1.js' })
  Do.add('ui/bubble1', { path: 'http://gateway.sinrun.top/js/book/bubble1.js' })
  Do.add('widget/tabs', { path: 'http://gateway.sinrun.top/js/book/tabs.js' })
  Do('book/index1')