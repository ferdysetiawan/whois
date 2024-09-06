"use client"
import { useState } from 'react';

export default function Home() {
  const [domain, setDomain] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWhois = async () => {
    try {
      const response = await fetch(`/api/whois?domain=${domain}`);
      const result = await response.json();
      if (response.ok) {
        setData(result);
        setError(null);
      } else {
        setError(result.error || 'Failed to fetch WHOIS data');
        setData(null);
      }
    } catch (error) {
      setError('Failed to fetch WHOIS data');
      setData(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-2xl font-bold mb-4">WHOIS Lookup</h1>
      <div className="border border-gray-600 rounded-lg p-4">
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter domain name"
          className="bg-black border border-gray-600 text-white p-2 w-full rounded-lg"
        />
        <button
          onClick={fetchWhois}
          className="bg-[#00EC97] text-white p-2 rounded mt-4 w-full"
        >
          Lookup
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {data && (
        <div className="mt-4 border border-gray-600 rounded-lg p-4">
          <h2 className="text-xl font-bold">WHOIS Information</h2>
          <pre className="bg-black border border-gray-600 text-white p-4 rounded overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
