const inViewport = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    // toggle(token, force); force == true: add only (& vice versa)
  });
};

const obsOptions = {};
const Obs = new IntersectionObserver(inViewport, obsOptions);

// Attach observer to every [data-inViewport] element:
const ELs_inViewPort = document.querySelectorAll("[data-inViewport]");
ELs_inViewPort.forEach((EL) => {
  Obs.observe(EL);
});
