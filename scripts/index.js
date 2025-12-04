const editProfileButton = document.querySelector(".profile__button-edit");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);

const newPostButton = document.querySelector(".profile__button-new");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

editProfileButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-open");
});

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-open");
});

newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-open");
});

newPostCloseButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-open");
});
