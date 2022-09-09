import PropTypes from 'prop-types';

export default function SpellCard(props) {
  /**
   * TODO: 
   * * when a description has a list, convert to an actual list? see Conjure Animals
   * * when a description has a table, convert to an actual table? see Confusion
   * * add class lists
   * * add school
   * * add level
   * * add damage info
   * * add concentration and other meta info
   */
  return (
    <div className="spell-card">
      <h3 className="spell-card__title">{props.name}</h3>
      <div className="spell-card__description">
        {props.description.map((content, i) => (
          <p key={i}>{content}</p>
        ))}
      </div>
    </div>
  );
}

SpellCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
}