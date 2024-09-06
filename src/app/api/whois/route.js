// src/app/api/whois/route.js
import axios from 'axios';

export async function GET(request) {
  const url = new URL(request.url);
  const domain = url.searchParams.get('domain');
  const apiKey = process.env.WHOISXML_API_KEY;

  if (!domain) {
    return new Response(JSON.stringify({ error: 'Domain is required' }), { status: 400 });
  }

  try {
    const response = await axios.get(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${apiKey}&domainName=${domain}&outputFormat=json`);
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error('Error fetching WHOIS data:', error.message); // Debugging line
    return new Response(JSON.stringify({ error: 'Failed to fetch WHOIS data' }), { status: 500 });
  }
}
