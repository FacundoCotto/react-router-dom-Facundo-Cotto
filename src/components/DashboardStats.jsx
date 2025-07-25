import React, { useEffect, useState } from "react";

function DashboardStats() {
  const [stats, setStats] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("http://localhost:5000/stats");
        console.log("Se hizo la peticion")
        console.log("Esta es la respuesta de la peticion", response)
        if (!response.ok) {
          throw new Error("No se pudo obtener la respuesta del servidor");
        }

        const data = await response.json();
        console.log('Datos obtenidos desde el servidos',data)
        setStats(data);
      } catch (error) {
        console.log("Error al obtener todas las estadisticas", error);
        setError(error.message);
      } finally {
        console.log("Finalizado");
        setIsLoading(false);
      }
    };

    fetchStats()
  }, []);

  if(isLoading) return <p>Cargando estadisticas</p> 

  if(error) return <p>Error al obtener estadisticas, este es el error: {error}</p>

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Estadisticas Clave</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.length > 0 ? (
          stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-slate-700 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-medium text-slate-300">
                {stat.name}
              </h3>
              <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
            </div>
          ))
        ) : (
          <p>No Hay estadisticas disponibles</p>
        )}
      </div>
    </div>
  );
}

export default DashboardStats;
