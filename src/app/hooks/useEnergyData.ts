import { useEffect, useState } from "react";
import type { Region } from "@/constant/regions";

type UseEnergyDataProps = {
  region: Region;
};

export function useEnergyData({ region }: UseEnergyDataProps) {
  const [allData, setAllData] = useState<any>(null);
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
        setAllData(json);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const data = allData?.[region] || null;

  return { data, loading, error, allData };
}
