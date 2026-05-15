import { useEffect, useState } from 'react';
import api from '../api';

export default function CrudSection({ title, endpoint, fields }) {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({});

  const fetchData = async () => {
    const res = await api.get(`/${endpoint}`);
    setItems(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { ...form };

    if (endpoint === 'projects' && typeof payload.icons === 'string') {
      payload.icons = payload.icons
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
    }

    await api.post(`/${endpoint}`, payload);
    setForm({});
    fetchData();
  };

  const handleDelete = async (id) => {
    await api.delete(`/${endpoint}/${id}`);
    fetchData();
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: 20, marginBottom: 20 }}>
      <h2>{title}</h2>

      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} style={{ marginBottom: 10 }}>
            <input
              type={field.type || 'text'}
              placeholder={field.label}
              value={form[field.name] || ''}
              onChange={(e) =>
                setForm({ ...form, [field.name]: e.target.value })
              }
            />
          </div>
        ))}
        <button type="submit">Tambah</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name || item.company_name}
            <button onClick={() => handleDelete(item.id)} style={{ marginLeft: 10 }}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}