import keccak256 from 'keccak256';

export default async function signMessage(provider, account, message) {
  const salt = keccak256(Date.now().toString()).toString('hex');
  const messageWithSalt = Buffer.from(
    `${message}\n\n#[${salt}]`,
    'utf8',
  ).toString('hex');
  const sign = await provider.provider.request?.({
    method: 'personal_sign',
    params: [`0x${messageWithSalt}`, account],
  });

  return btoa(
    JSON.stringify({
      msg: messageWithSalt,
      sign: sign.slice(2),
    }),
  );
}
