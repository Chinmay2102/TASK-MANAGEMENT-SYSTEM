import { useState } from 'react';

export default function TaskCard({ task, onEdit, onDelete, onComplete }) {
  const [deleting, setDeleting] = useState(false);
  const [completing, setCompleting] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm('Delete this task?')) return;
    setDeleting(true);
    await onDelete(task.id);
  };

  const handleComplete = async () => {
    setCompleting(true);
    await onComplete(task.id);
    setCompleting(false);
  };

  return (
    <div className={`task-card ${deleting ? 'task-card--deleting' : 'task-card--enter'}`}>

      <div className="task-card-top">
        <h2 className="task-title">{task.title}</h2>
        {task.status !== 'completed' && (
          <button
            className="btn-complete"
            onClick={handleComplete}
            disabled={completing}
            title="Mark as complete"
          >
            {completing ? '...' : '✓'}
          </button>
        )}
        {task.status === 'completed' && (
          <span className="completed-badge">✓ Done</span>
        )}
      </div>

      {task.description && (
        <p className="task-desc">{task.description}</p>
      )}

      <div className="task-badges">
        <span className={`badge status-${task.status}`}>{task.status}</span>
        <span className={`badge priority-${task.priority}`}>{task.priority}</span>
        {task.due_date && (
          <span className="badge due">📅 {task.due_date}</span>
        )}
      </div>

      <div className="task-actions">
        <button className="btn-edit" onClick={() => onEdit(task)}>Edit</button>
        <button className="btn-delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}