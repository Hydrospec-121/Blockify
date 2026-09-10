import { Select } from '../ui/Select'
import { SORT_OPTIONS } from '../../utils/catalog'

export function SortControl({ value, onChange, id = 'sort' }) {
  return (
    <Select
      id={id}
      label="Sort by"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      options={SORT_OPTIONS}
    />
  )
}
