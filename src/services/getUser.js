export default async function getUser() {
  const sessionToken = localStorage.getItem('airdao-session-token');

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: sessionToken,
        }),
      },
    );

    if (!response.ok) {
      console.warn('Error:', response.status);
      throw new Error('Error: req status ' + response.status);
    }

    return response.json();
  } catch (error) {
    console.warn(error);
    throw error;
  }
}
