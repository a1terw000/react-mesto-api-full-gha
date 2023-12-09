export default function InfoTolltip({ name, isOpen, onClose, isSuccess }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ""}`} onClick={onClose}>
      <div className="popup__container" onClick={(evt => evt.stopPropagation())}>
        <div className={`popup__registration-image-result ${!isSuccess ? 'popup__registration-image-result_type_error' : '' }`} />
        <button className="popup__close-button" type="button" onClick={onClose} />
        <h2 className="popup__tolltip-title">{isSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте еще раз"}</h2>
      </div>
    </div>
  )
}