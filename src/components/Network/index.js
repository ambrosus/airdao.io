import network from './network.svg';
import Image from 'next/image';

const Network = () => (
  <section>
    <div>AMB NETWORK</div>
    <div>
      <span>
        <span>DeFi Doesn&apos;t Have to Be Risky. </span>
        <span>DeFi Can Be Safe and Secure.</span>
      </span>
      <span>
        AirDAO is powered by an ultra-secure and lightning-fast layer-1
        blockchain with minimal transaction fees.
      </span>
      <Image src={network} alt="network" />
    </div>
  </section>
);

export default Network;
