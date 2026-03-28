import React, { useEffect, useState } from 'react';
import './DashboardClients.css'; 
import { http, extractErrorMessage } from '../services/http';

const AdminClients = () => {
  const [groupedClients, setGroupedClients] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      setError('');
      try {
        const { data } = await http.get('/clients/grouped');
        const grouped = {};
        data.forEach((client) => {
          const formationName = client.formation?.courseName || 'Sans formation';
          if (!grouped[formationName]) grouped[formationName] = [];
          grouped[formationName].push(client);
        });
        setGroupedClients(grouped);
      } catch (err) {
        setError(extractErrorMessage(err));
        setGroupedClients({});
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="admin-dashboard-layout">
   
      <div className="admin-clients">
        <h2>Liste des clients</h2>
        {loading && <p>Chargement des clients...</p>}
        {error && <p className="error-state">{error}</p>}
        {!loading && !error && Object.keys(groupedClients).length === 0 && (
          <p>Aucun client enregistré pour le moment.</p>
        )}
        {!loading && !error && Object.keys(groupedClients).map((formation) => (
          <div key={formation} className="formation-group">
            <h3>{formation}</h3>
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {groupedClients[formation].map((client) => (
                  <tr key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.telephone}</td>
                    <td>{client.modeFormation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminClients;
