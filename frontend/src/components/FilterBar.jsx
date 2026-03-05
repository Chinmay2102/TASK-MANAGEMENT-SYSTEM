import React from 'react'

const FilterBar = ({filters, onChange}) => {
  return (
    <div className='filter-bar'>
      <select value={filters.status}
        onChange={(e) => onChange({ ...filters, status: e.target.value })}>
            <option value=''>All Statuses</option>
            <option value='pending'>Pending</option>
            <option value='completed'>Completed</option>
        </select>

        <select value={filters.priority} onChange={(e)=>onChange({ ... filters, priority: e.target.value})}>
            <option value=''>All Priority</option>
            <option value='regular'>Regular</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
        </select>
    </div>
  );
}

export default FilterBar
