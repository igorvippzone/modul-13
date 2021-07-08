document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".list__link").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;
      console.log(path);
      document
        .querySelectorAll(".work__wrapper")
        .forEach(function (tabContent) {
          tabContent.classList.remove("work__wrapper-active");
          console.log(tabContent);
        });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("work__wrapper-active");
    });
  });
});

let tab = document.querySelector(".swiper-button-prev");
let tab2 = document.querySelector(".swiper-button-next");
document
  .querySelectorAll(".swiper-pagination-bullet")
  .forEach(function (tabs) {
    removeTabIndex(tabs)
  });
function removeTabIndex(element) {
  element.removeAttribute("tabindex");
}
removeTabIndex(tab);
removeTabIndex(tab2);

