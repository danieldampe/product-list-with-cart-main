export const useModal = (): { toggleModal: () => void } => {
  const modal = document.querySelector('#modal')
  const order = document.querySelector('#order')

  const toggleModal = (): void => {
    if (modal !== null && order !== null) {
      modal.classList.toggle('invisible')
      order.classList.toggle('translate-y-full')
    }
  }

  return { toggleModal }
}
