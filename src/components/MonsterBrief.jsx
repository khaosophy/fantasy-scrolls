import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { capitalize } from '../utils/text-utils';

export default function MonsterBrief(props) {
  return (
    <div className={classNames(
      'monster-brief',
      props.className,
    )}>
      <h3 className="monster-brief__title">
        <Link to={`/monsters/${props.id}`}>
          {props.name}
        </Link>
      </h3>

      <div className="monster-brief__meta d-flex gap-1">
        <span className="badge bg-danger">
          {capitalize(props.type)}
        </span>
        
        {props.speed.fly && <SpeedBadge>Fly</SpeedBadge>}
        {props.speed.swim && <SpeedBadge>Swim</SpeedBadge>}
        {props.speed.burrow && <SpeedBadge>Burrow</SpeedBadge>}
        {props.speed.climb && <SpeedBadge>Climb</SpeedBadge>}
      </div>
    </div>
  )
}

function SpeedBadge({ children }) {
  return (
    <span className="badge bg-info text-dark">
      {children}
    </span>
  )
}