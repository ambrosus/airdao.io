import signMessage from './signMessage';

export default async function signIn(account, provider) {
  const signedData = await signMessage(
    provider,
    account,
    'This message needs to be signed with your wallet to verify that wallet is yours.',
  );

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: signedData,
        }),
      },
    );

    if (!response.ok) {
      console.warn('Error:', response.status);
      return false;
    }

    const { token } = await response.json();
    localStorage.setItem('airdao-session-token', token);
    return token;
  } catch (error) {
    console.warn(error);
    return false;
  }
}
