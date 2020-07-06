/*jshint esversion: 6 */

const images = $("img");
const sizes = {
  showcase: "100vw",
  reason: "(max-width : 799) 100vw,372px",
  feature: "(max-width : 799) 100vw,558px",
  story: "(max-width : 799) 100vw,670px",
};

function makeSrcSet(imgSrc) {
  let markup = [];
  let width = 400;

  for (let i = 0; i < 5; i++) {
    markup[i] = imgSrc + "-" + width + ".jpg" + width + "w";
    width += 400;
    console.log(markup);
  }
}

for (let i = 0; i < images.length; i++) {
  let imgSrc = images[i].getAttribute("src");
  //slice the last eight characters
  imgSrc = imgSrc.slice(0, -8);
  let srcSet = makeSrcSet(imgSrc);
  images[i].setAttribute("srcSet", srcSet);
  let type = images[i].getAttribute("data-type");
  let size = sizes[type];
  images[i].setAttribute("size", size);
  console.log(size);
}
