// Get all the list items
const listItems = document.querySelectorAll('li');

// Loop through each list item and add a click event listener
listItems.forEach(item => {
  item.addEventListener('click', () => {
    // Toggle the "active" class on the clicked item
    item.classList.toggle('active');

    // Get the description element
    const desc = item.querySelector('.description');

    // Toggle the "show" class on the description element
    desc.classList.toggle('show');
  });
});
