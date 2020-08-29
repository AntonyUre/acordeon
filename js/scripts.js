var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // el acordeón está abierto, así que ciérralo
      content.style.maxHeight = null;
    } else {
      // el acordeón está cerrado, así que ábrelo
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
