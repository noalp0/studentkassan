alert("JavaScript file loaded!");


var slider = document.getElementById("slider");
var number = document.getElementById("number");

slider.oninput = function () {
  number.innerHTML = slider.value;
  updateTotal();
}

var slider1 = document.getElementById("slider1");
var number1 = document.getElementById("number1");

slider1.oninput = function () {
  number1.innerHTML = slider1.value + "kr";
  updateTotal();
}

var total = document.getElementById("total-forsaljning");

function updateTotal() {
  var result = slider1.value * slider.value * 0.35;
  total.innerHTML = parseInt(result) + "kr";
}




document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(function (button) {
      button.addEventListener('click', function () {
          var category = this.getAttribute('data-category');
          filterSelection(category);
          setActiveButton(this);
      });
  });
});

function filterSelection(category) {
  var figures = document.querySelectorAll('.gallery figure');

  figures.forEach(function (figure) {
      var figureCategories = figure.className.split(' ');

      if (category === 'all' || figureCategories.includes(category)) {
          figure.style.display = 'block';
      } else {
          figure.style.display = 'none';
      }
  });
}

function setActiveButton(activeButton) {
  var buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(function (button) {
      button.classList.remove('active');
  });

  activeButton.classList.add('active');
}


document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(function (button) {
      button.addEventListener('click', function () {
          var category = this.getAttribute('data-category');
          filterSelection(category);
          setActiveButton(this);
      });
  });

  // Set "Visa Alla" button as active on page load
  var visaAllaButton = document.querySelector('.filter-btn[data-category="all"]');
  visaAllaButton.classList.add('active');
});


function showSidebar() {
  const sidebar = document.querySelector('.sidebar-header')
  sidebar.style.display = 'flex'
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar-header')
  sidebar.style.display = 'none'
}


