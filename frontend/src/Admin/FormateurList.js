
/*import { useQuery, useMutation } from "@apollo/client";
import { GET_FORMATEURS, ASSIGN_FORMATION_TO_FORMATEUR } from "../graphql/queries";
import { GET_FORMATIONS } from "../graphql/queries";

const FormateurList = () => {
  const { data: formateurData, loading, error, refetch } = useQuery(GET_FORMATEURS);
  const { data: formationData } = useQuery(GET_FORMATIONS);
  const [assignFormation] = useMutation(ASSIGN_FORMATION_TO_FORMATEUR);

  const handleAssign = async (formateurId, formationId) => {
    try {
      await assignFormation({
        variables: { formateurId, formationId: parseInt(formationId) },
      });
      refetch();
    } catch (err) {
      console.error("Erreur d'affectation :", err.message);
    }
  };

  if (loading) return <p>Chargement des formateurs...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">Liste des Formateurs</h2>
      <ul className="space-y-4">
        {formateurData.findAllFormateurs.map((f) => (
          <li key={f.id} className="p-4 border rounded shadow-sm">
            <div className="mb-2">
              <strong>{f.name}</strong> – {f.email} – <em>{f.expertise}</em>
            </div>

            <div className="flex items-center gap-4">
              <label htmlFor={`formation-${f.id}`}>Formation :</label>
              <select
                id={`formation-${f.id}`}
                value={f.formation?.id || ""}
                onChange={(e) => handleAssign(f.id, e.target.value)}
                className="border p-1 rounded"
              >
                <option value="">-- Aucune --</option>
                {formationData?.findAllFormations?.map((formation) => (
                  <option key={formation.id} value={formation.id}>
                    {formation.courseName}
                  </option>
                ))}
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormateurList;*/
