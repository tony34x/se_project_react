import ".//ItemCard.css";

function ItemModal(activeModal, card, onClose) {
 return
 <div className="modal">
    <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close"></button>
    </div>
 </div>
}

export default ItemModal;