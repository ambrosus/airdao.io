export default async function getRewards(account, start, limit) {
  if (!account) {
    console.warn('No account provided');
    return {
      rewards: [],
      total: 0,
      totalRewards: null,
    };
  }

  const sessionToken = localStorage.getItem('airdao-session-token');

  if (!sessionToken) {
    console.warn('No session token found');
    return {
      rewards: [],
      total: 0,
      totalRewards: null,
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/rewards`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: sessionToken,
          wallet: account,
          start,
          limit,
        }),
      },
    );

    if (!response.ok) {
      console.warn('Error:', response.status);
      return {
        rewards: [],
        total: 0,
        totalRewards: null,
      };
    }
    return response.json();
  } catch (error) {
    console.warn(error);
    return {
      rewards: [],
      total: 0,
      totalRewards: null,
    };
  }
}
