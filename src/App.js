import './App.css'
import BannerCardItem from './components/BannerCardItem'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

function App() {
  return (
    <div className="App">
      <ul className="banner-card-list">
        {bannerCardsList.map(eachItem => (
          <BannerCardItem
            key={eachItem.id}
            id={eachItem.id}
            headerText={eachItem.headerText}
            description={eachItem.description}
            className={eachItem.className}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
