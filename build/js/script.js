'use strict';
(function () {
  var PADDING = 20;


  var asideCreationBlock = document.querySelector('.first-section__left');
  var fixedBlock = asideCreationBlock.querySelector('.first-section__creation');
  var downBlock = asideCreationBlock.querySelector('.first-section__left-down');

  var header = document.querySelector('.page-header');
  var headerBottom = header.getBoundingClientRect().bottom;


  window.addEventListener('scroll', function () {
    var fixedBlockHeight = fixedBlock.getBoundingClientRect().bottom;
    var downBlockTop = downBlock.getBoundingClientRect().top;
    var fixedBlockHeightTop = fixedBlock.getBoundingClientRect().top;


    if (asideCreationBlock.classList.contains('first-section__left--fixed') && (downBlockTop - fixedBlockHeight) <= PADDING) {
      asideCreationBlock.classList.remove('first-section__left--fixed');
    }

    if (!asideCreationBlock.classList.contains('first-section__left--fixed') && (headerBottom + PADDING - fixedBlockHeightTop) <= 0) {
      asideCreationBlock.classList.add('first-section__left--fixed');
    }

  });
})();
