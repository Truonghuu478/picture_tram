function handleMusic() {
  const music = document.getElementById("music");

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
document.querySelector(".play-music").addEventListener("click", handleMusic);

const magnifier = document.getElementById("magnifier");

if (magnifier) {
    document.addEventListener("mousemove", (event) => {
        magnifier.style.display = "block"; // Hiện kính lúp khi di chuột
        magnifier.style.left = `${event.pageX - 25}px`; // Căn giữa kính lúp theo chuột
        magnifier.style.top = `${event.pageY - 25}px`; // Căn giữa kính lúp theo chuột
      });
      
      document.addEventListener("mouseleave", () => {
        magnifier.style.display = "none"; // Ẩn kính lúp khi chuột rời khỏi trang
      });
      
};
