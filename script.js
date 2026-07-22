const slices = document.querySelectorAll('.slice');

slices.forEach((slice) => {
  // Opsi 1: Berubah saat di-hover
  slice.addEventListener('mouseenter', () => {
    removeActiveClasses();
    slice.classList.add('active');
  });

  // Opsi 2: Berubah saat diklik (sangat berguna di mobile/touchscreen)
  slice.addEventListener('click', () => {
    removeActiveClasses();
    slice.classList.add('active');
  });
});

function removeActiveClasses() {
  slices.forEach((slice) => {
    slice.classList.remove('active');
  });
}