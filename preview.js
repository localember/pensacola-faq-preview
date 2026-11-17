(function(){
  var body = document.body;
  var burger = document.querySelector(".burger");
  var mobileNav = document.querySelector(".mobile-nav");
  if (burger && mobileNav){
    burger.addEventListener("click", function(){
      var open = body.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var modal = document.getElementById("book-modal");
  var closeBtn = modal ? modal.querySelector(".modal-close") : null;
  var backdrop = modal ? modal.querySelector(".modal-backdrop") : null;

  function openModal(e){
    if (!modal) return;
    if (e) e.preventDefault();
    modal.hidden = false;
    document.documentElement.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }
  function closeModal(){
    if (!modal) return;
    modal.hidden = true;
    document.documentElement.style.overflow = "";
  }

  document.querySelectorAll("[data-open-book]").forEach(function(el){
    el.addEventListener("click", openModal);
  });
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape" && modal && !modal.hidden) closeModal();
  });

  if (location.hash === "#book") openModal();
  if (location.hash === "#menu" && burger){
    body.classList.add("nav-open");
    burger.setAttribute("aria-expanded", "true");
  }
})();
