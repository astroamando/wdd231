const timestampField = document.querySelector('#timestamp');

if (timestampField) {
  timestampField.value = new Date().toISOString();
}

const modalButtons = document.querySelectorAll('.modal-link');
const closeButtons = document.querySelectorAll('.close-modal');

modalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const dialogId = button.dataset.dialog;
    const dialog = document.getElementById(dialogId);
    if (dialog) {
      dialog.showModal();
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('dialog').close();
  });
});