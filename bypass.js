// allows scrolling
const article = document.querySelector('div.css-mcm29f');

if (article) {
  article.style.position = 'relative';
}

// removes paywall
const paywall = document.querySelector('div.css-5x99bu');

if (paywall) {
  paywall.remove();
}

// removes paywall gradient
const paywall_gradient = document.querySelector('div.css-gx5sib');

if (paywall_gradient) {
  paywall_gradient.remove();
}



