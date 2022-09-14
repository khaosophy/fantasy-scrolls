import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default function SpellBrief(props) {
  /* todo: rename to SpellLink? */
  console.log(props.id);
  return (
    <div className={classnames(
      'spell-brief',
      props.className,
    )}>
      <h3 className="spell-brief__title">
        <Link to={`/spells/${props.id}`}>
          {props.name}
        </Link>
      </h3>
      <div className="spell-brief__meta d-flex gap-1">
        <span className="badge bg-info text-dark">
          {(props.level > 0) ? (
            `Level ${props.level}`
          ) : (
            `Cantrip`
          )}
        </span>
        <span className="badge bg-danger">{props.school}</span>
        {props.lists.map(list => <span key={list.name} className="badge bg-secondary">{list.name}</span>)}
      </div>
    </div>
  )
}

SpellBrief.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lists: PropTypes.array.isRequired,
  level: PropTypes.number.isRequired,
  school: PropTypes.string,
}