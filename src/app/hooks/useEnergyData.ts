import { useEffect, useState } from "react";

// type EnergyData = {
//   date: string;
//   fuel_types: {
//     source: string;
//     megawatthours: number;
//     percent: number;
//   }[];
//   total: {
//     megawatthours: number;
//     gigawatthours: number;
//   };
// };

export function useEnergyData() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://joypauls.github.io/dailygrid-backend/data/daily_energy_mix_latest.json",
        );
        if (!res.ok) throw new Error("Failed to load energy data");
        const json = await res.json();
        // setData(json);
        // TODO: CHANGE THIS
        setData(json.US48);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
