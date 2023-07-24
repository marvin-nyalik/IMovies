const countLikes = (likes) => {
  const counter = document.querySelector('.counter');
  if (likes.length === 0) {
    counter.textContent = '0';
    return;
  }
  counter.textContent = likes.length;
};

export default countLikes;