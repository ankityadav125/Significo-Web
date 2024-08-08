(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

function homepageAnimation() {
  gsap.set(".slides-mar", { scale: 10 });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home-page",
      scrub: 1,
      start: "top top",
      end: "bottom top",
      pin: true,
    },
  });

  tl.to(
    ".video-div",
    {
      "--clip": "0%",
      ease: Power2,
      // duration:5
    },
    "s"
  );

  tl.to(
    ".slides-mar",
    {
      scale: 1,
      ease: Power2,
    },
    "s"
  );

  tl.to(
    ".lft-move",
    {
      xPercent: -10,
      ease: Power4,
      stagger: 0.3,
    },
    "m"
  );

  tl.to(
    ".rst-move",
    {
      xPercent: -10,
      ease: Power4,
      stagger: 0.3,
    },
    "m"
  );
}

homepageAnimation();

function realpageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".slides",

      // markers:true,
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
    xPercent: -300,
    ease: Power4,
  });
}

realpageAnimation();

function teamAnimation() {
  document.querySelectorAll(".list-elem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelectorAll(".picture"), {
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        opacity: 1,
        ease: Power4,
        duration: 0.5,
      });
    });

    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelectorAll(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}

teamAnimation();

function paraanimation() {
  var clutter = "";
  document
    .querySelector(".textpara")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter += `<span>&nbsp</span>`;
      clutter += `<span class="opacity-10">${e}</span>`;
    });

  document.querySelector(".textpara").innerHTML = clutter;

  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",

      // markers:true,
      start: "-20% 60%",
      end: "50% 50%",
      scrub: 1,
    },
    opacity: 1,
    stagger: 0.3,
    ease: Power4,
  });

  // var clutter1 = "";
  document
    .querySelector(".textpara2")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter += `<span>&nbsp</span>`;
      clutter += `<span class="opacity-10">${e}</span>`;
    });

  document.querySelector(".textpara2").innerHTML = clutter;

  gsap.to(".textpara2 span", {
    scrollTrigger: {
      trigger: ".para",

      // markers:true,
      start: "40% 60%",
      end: "50% 50%",
      scrub: 1,
    },
    opacity: 1,

    stagger: 0.3,
    ease: Power4,
  });
}

paraanimation();

function capsuleAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",

      // markers:true,
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}

capsuleAnimation();

function bodyColorChange() {
  document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
      trigger: e,
      // markers:true,
      start: "top 50%",
      end: "bottom 50%",
      scrub: 1,
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
}

bodyColorChange();
