export const handleClickScroll = (id) => {
  console.log(id);
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
