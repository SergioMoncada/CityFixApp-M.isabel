import 'dotenv/config';

export async function getReports() {
  try {
    const response = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/reports?select=*`,
      {
        method: 'GET',
        headers: {
          apikey: process.env.SUPABASE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error HTTP ${response.status}: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error obteniendo reportes:', error.message);
    throw error;
  }
}