(function () {
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('.author__contact').forEach(function (contact) {
    contact.addEventListener('toggle', function () {
      if (!contact.open || reducedMotion.matches) return;

      var panel = contact.querySelector('.author__contact-panel');
      if (!panel || !panel.getAnimations) return;

      // Closed details can retain finished animations in their hidden subtree.
      panel.getAnimations({ subtree: true }).forEach(function (animation) {
        if (animation.animationName && animation.animationName.indexOf('contact-') === 0) {
          animation.currentTime = 0;
          animation.play();
        }
      });
    });
  });
})();
