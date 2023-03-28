// allows scrolling
const article = document.querySelector('div.css-mcm29f');
const main = document.querySelector('main');

if (article || main) {
  article.style.position = 'relative';
  main.style.position = 'relative';
}

// removes paywall + gradient
const paywall = document.getElementById("gateway-content");
// possible other articles have diff classes, continue random sampling
const paywall_gradient = document.querySelector('div.css-gx5sib');

if (paywall || paywall_gradient) {
  paywall.remove();
  paywall_gradient.remove();

}
