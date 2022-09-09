import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function SpellCard(props) {
  /**
   * TODO: 
   * * when a description has a list, convert to an actual list? see Conjure Animals
   * * when a description has a table, convert to an actual table? see Confusion
   * * add school
   * * add damage info
   * * add concentration and other meta info
   */
  return (
    <div className={classnames(
      'spell-card',
      props.className,
    )}>
      <h3 className="spell-card__title">{props.name}</h3>
      <div className="spell-card__meta d-flex gap-1">
        <span className="badge bg-info text-dark">
          {(props.level > 0) ? (
            `Level ${props.level}`
          ) : (
            `Cantrip`
          )}
        </span>
        {props.lists.map(list => <span key={list.name} className="badge bg-secondary">{list.name}</span>)}
      </div>
      <div className="spell-card__description">
        {props.description.map((content, i) => (
          <p key={i}>{content}</p>
        ))}
      </div>
    </div>
  );
}

SpellCard.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  lists: PropTypes.array.isRequired,
  level: PropTypes.number.isRequired,
}