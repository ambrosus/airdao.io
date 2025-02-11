import { Web3Provider } from '@ethersproject/providers';
import { useMemo } from 'react';
import { useClient, useConnectorClient } from 'wagmi';

const providers = new WeakMap();

function clientToProvider(client, chainId) {
  if (!client) return undefined;
  const { chain, transport } = client;
  const network = chain
    ? {
        chainId: chain.id,
        name: chain.name,
        ensAddress: chain.contracts?.ensRegistry?.address,
      }
    : chainId
    ? { chainId, name: 'Unsupported' }
    : undefined;
  if (!network) return undefined;

  if (providers?.has(client)) {
    return providers.get(client);
  } else {
    const provider = new Web3Provider(transport, network);
    providers.set(client, provider);
    return provider;
  }
}

/** Hook to convert a viem Client to an ethers.js Provider with a default disconnected Network fallback. */
export function useEthersProvider({ chainId } = {}) {
  const { data: client } = useConnectorClient({ chainId });
  const disconnectedClient = useClient({ chainId });
  return useMemo(
    () => clientToProvider(client ?? disconnectedClient, chainId),
    [chainId, client, disconnectedClient],
  );
}

/** Hook to convert a connected viem Client to an ethers.js Provider. */
export function useEthersWeb3Provider({ chainId } = {}) {
  const { data: client } = useConnectorClient({ chainId });
  return useMemo(() => clientToProvider(client, chainId), [chainId, client]);
}
