// Mendeteksi scroll ke bawah
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTopButton").style.display = "block";
    } else {
      document.getElementById("scrollToTopButton").style.display = "none";
    }
  };
  
  // Menggulir ke atas dengan efek halus
  document.getElementById("scrollToTopButton").addEventListener("click", function() {
    window.scrollTo(0, 4);
  });
  
  
  function scrollToTop(duration) {
    const scrollStep = -window.scrollY / (duration / 15);
    const scrollInterval = setInterval(function() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
  