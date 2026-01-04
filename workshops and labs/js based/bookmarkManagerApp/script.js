const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form");
const viewCategoryBtn = document.getElementById("view-category-button");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const closeFormBtn = document.getElementById("close-form-button");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const categoryList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

function getBookmarks() {
  const bookmarks = localStorage.getItem("bookmarks");
  if (!bookmarks) return [];

  try {
    const parsedBookmarks = JSON.parse(bookmarks);
    if (Array.isArray(parsedBookmarks)) {
      return parsedBookmarks.filter(
        (b) =>
          typeof b.name === "string" &&
          typeof b.url === "string" &&
          typeof b.category === "string"
      );
    } else {
      return [];
    }
  } catch (e) {
    return [];
  }
}

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

function updateListItems() {
  if (
    getBookmarks().filter(
      (bookmark) => bookmark.category === categoryDropdown.value
    ).length === 0
  ) {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
  } else {
    categoryList.innerHTML = "";
    getBookmarks()
      .filter((bookmark) => bookmark.category === categoryDropdown.value)
      .forEach((bookmark) => {
        categoryList.innerHTML += `<input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="test"><label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>`;
      });
  }
}

addBookmarkBtn.addEventListener("click", () => {
  categoryName.innerText = `${categoryDropdown.value}`;
  displayOrCloseForm();
});

closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkFormBtn.addEventListener("click", () => {
  const bookmark = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value,
  };
  let currentBookmarkArr = getBookmarks();
  currentBookmarkArr.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(currentBookmarkArr));
  clearInputFields();
  displayOrCloseForm();
});

viewCategoryBtn.addEventListener("click", () => {
  categoryName.innerText = `${categoryDropdown.value}`;
  updateListItems();
  displayOrHideCategory();
});

function clearInputFields() {
  nameInput.value = "";
  urlInput.value = "";
}

closeListBtn.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmarkButton.addEventListener("click", () => {
  const selectedInput = categoryList.querySelector(
    'input[type="radio"]:checked'
  );

  if (!selectedInput) return;

  const currentBookmarks = getBookmarks();

  // FIX: Filter by BOTH name and the current category in the dropdown
  const updatedBookmarks = currentBookmarks.filter(
    (b) =>
      !(b.name === selectedInput.value && b.category === categoryDropdown.value)
  );

  localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  updateListItems();
});
