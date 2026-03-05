import React from 'react'
import { useState, useEffect } from 'react'
const EMPTY = { title: '', description: '', status: 'pending', priority: 'regular', due_date: '' };

const TaskForm = ({onSubmit, editingTask, onCancel }) => {
    
    const [form,setForm] = useState(EMPTY);
    useEffect(()=>{
        setForm(editingTask || EMPTY);
    }, [editingTask]);
    
    const handleChange=(e)=>{setForm({...form, [e.target.name]: e.target.value});};

    const handleSubmit=()=>{
        if (!form.title.trim()) return alert('Title is required');
        onSubmit(form);
        setForm(EMPTY);
    };

    return (
     <div className="task-form">
      <h2>{editingTask ? 'Edit Task' : 'New Task'}</h2>

      <input
        name="title"
        placeholder="Task title *"
        value={form.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description (optional)"
        value={form.description}
        onChange={handleChange}
        rows={3}
      />

      <div className="form-row">
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <select name="priority" value={form.priority} onChange={handleChange}>
          <option value="regular">Regular</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <input
        type="date"
        name="due_date"
        value={form.due_date || ''}
        onChange={handleChange}
      />

      <div className="form-row">
        <button className="btn-submit" onClick={handleSubmit}>
          {editingTask ? 'Update Task' : 'Create Task'}
        </button>
        {editingTask && (
          <button className="btn-cancel" onClick={onCancel}>Cancel</button>
        )}
      </div>
    </div>
  );
}

export default TaskForm
