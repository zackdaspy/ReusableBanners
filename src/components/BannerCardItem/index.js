import './index.css'

const BannerCardItem = ({ id, headerText, description, className }) => (
  <li className={className} key={id}>
    <h2>{headerText}</h2>
    <p>{description}</p>
    <button className="show-more-button" type="button">
      Show More
    </button>
  </li>
)

export default BannerCardItem
