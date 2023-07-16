import './index.css'

const ButtonItem = props => {
  const {buttonDetails, isActive, onClickItem} = props
  const {buttonText, id} = buttonDetails

  const buttonClassName = isActive ? 'activeButton' : 'button'

  const onClickButton = () => onClickItem(id)

  return (
    <li className="buttonItem">
      <button
        className={buttonClassName}
        onClick={onClickButton}
        value={isActive}
        type="button"
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonItem
