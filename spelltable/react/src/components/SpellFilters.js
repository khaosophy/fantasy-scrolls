import Input from './forms/Input';

function SpellFilters(props) {
  return (
    <div className="spell-filters">
      <Input
        value={props.search}
        onChange={props.setSearch}
        placeholder="Search Known Spells..."
      />
      {/* todo: spell levels (range, i.e. 0-3) */}
      {/* todo: school (evocation, illusion, etc) */}
      {/* todo: class list */}
      {/* todo: is it a ritual? */}
      {/* todo: is it concentration? */}
      {/* todo: source (PHB, Xanathar's Guide, Tasha's Guide, etc) */}
      {/* todo: are materials consumed? */}
      {/* todo: components (material, verbal, somatic), not clear how this will work */}
      {/* todo: action type (1 action, bonus action, reaction, longer than one action, any) */}
      {/* todo: melee, ranged, etc */}
      {/* todo: attack, save, etc */}
    </div>
  )
}

export default SpellFilters;