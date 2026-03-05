import { useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from './services/api';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';

const App = () => {
  const [tasks, setTasks]             = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filters, setFilters]         = useState({ status: '', priority: '' });
  const [loading, setLoading]         = useState(true);

  useEffect(() => {
    fetchTasks()
      .then(data => setTasks(data))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (form) => {
    if (editingTask) {
      const updated = await updateTask(editingTask.id, form);
      setTasks(tasks.map(t => t.id === updated.id ? updated : t));
      setEditingTask(null);  // ← fixed
    } else {
      const created = await createTask(form);
      setTasks([created, ...tasks]);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this task?')) return;
    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleComplete = async (id) => {
    const task = tasks.find(t => t.id === id);
    const updated = await updateTask(id, { ...task, status: 'completed' });
    setTasks(tasks.map(t => t.id === updated.id ? updated : t));
  };

  const filtered = tasks.filter(t => {
    if (filters.status   && t.status   !== filters.status)   return false;
    if (filters.priority && t.priority !== filters.priority) return false;
    return true;
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
        <p>{tasks.length} total tasks</p>
      </header>

      <main className="app-main">
        <aside className="app-sidebar">
          <TaskForm
            onSubmit={handleSubmit}
            editingTask={editingTask}
            onCancel={() => setEditingTask(null)}  // ← fixed
          />
        </aside>

        <section className="app-content">
          <FilterBar filters={filters} onChange={setFilters} />

          {loading ? (
            <p className="msg">Loading tasks...</p>
          ) : filtered.length === 0 ? (
            <p className="msg">No tasks found.</p>
          ) : (
            <div className="task-grid">
              {filtered.map(task => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={setEditingTask}
                  onDelete={handleDelete}
                  onComplete={handleComplete}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;