import {Component} from 'react'
import ButtonItem from '../ButtonItem'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {activeId: languageGreetingsList[0].id}

  onClickItem = id => {
    this.setState({activeId: id})
  }

  render() {
    const {activeId} = this.state
    const {imageUrl, imageAltText} = languageGreetingsList[
      languageGreetingsList.findIndex(each => each.id === activeId)
    ]
    console.log(imageUrl)
    console.log(imageAltText)
    return (
      <div className="bgContainer">
        <h1 className="title">Multilingual Greetings</h1>
        <ul className="buttonList">
          {languageGreetingsList.map(each => (
            <ButtonItem
              key={each.id}
              buttonDetails={each}
              isActive={activeId === each.id}
              onClickItem={this.onClickItem}
            />
          ))}
        </ul>
        <img src={imageUrl} alt={imageAltText} className="image" />
      </div>
    )
  }
}

export default Greetings
