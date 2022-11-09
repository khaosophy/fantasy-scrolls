import PropTypes from 'prop-types';
import classnames from 'classnames';
import { marked } from 'marked';
import parse from 'html-react-parser';
import { FaCopyright, FaRegistered } from 'react-icons/fa';

export default function SpellCard(props) {
  /**
   * TODO: 
   * * when a description has a table, convert to an actual table? see Confusion
   */
  return (
    <div className={classnames(
      'spell-card',
      props.className,
    )}>
      <h3 className="spell-card__title">
        {props.name}
        {props.concentration ? (
            <sup>
              <small>
                {' '}<FaCopyright />
              </small>
            </sup>
          ) : ''}
        {props.ritual ? (
          <sup>
            <small>
              {' '}<FaRegistered />
            </small>
          </sup>
        ) : ''}
      </h3>
      <div className="spell-card__meta d-flex gap-1">
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
      <div className="spell-card__details mt-3">
        <dl>
          {props.components && (<>
            <dt>Components</dt>
            <dd>{props.components.join(' ')}</dd>
          </>)}
          {props.material && (<>
            <dt>Material</dt>
            <dd>{props.material}</dd>
          </>)}
          {props.castingTime && (<>
            <dt>Casting Time</dt>
            <dd>{props.castingTime}</dd>
          </>)}
          {props.duration && (<>
            <dt>Duration</dt>
            <dd>{props.duration}</dd>
          </>)}
          {props.range && (<>
            <dt>Range</dt>
            <dd>{props.range}</dd>
          </>)}
          {props.damageType && (<>
            <dt>Damage Type</dt>
            <dd>{props.damageType}</dd>
          </>)}
          {props.saveType && (<>
            <dt>Save</dt>
            <dd>{props.saveType}</dd>
          </>)}
        </dl>
      </div>
      <div className="spell-card__description">
        {props.description.map((content) => (
          parse(marked.parse(content))
        ))}
      </div>
      {props.higherLevel && (
        <div className="spell-card__higher-level">
          <p className="m-0 fw-bold fst-italic">At Higher Levels</p>
          {props.higherLevel.map(content => (
            parse(marked.parse(content))
          ))}
        </div>
      )}
    </div>
  );
}

SpellCard.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  lists: PropTypes.array.isRequired,
  level: PropTypes.number.isRequired,
  school: PropTypes.string.isRequired,
  concentration: PropTypes.bool.isRequired,
  ritual: PropTypes.bool.isRequired,
  castingTime: PropTypes.string,
  duration: PropTypes.string,
  components: PropTypes.arrayOf(PropTypes.string),
  material: PropTypes.string,
  range: PropTypes.string,
  damageType: PropTypes.string,
  saveType: PropTypes.string,
  higherLevel: PropTypes.arrayOf(PropTypes.string),
}