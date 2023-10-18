import { ethers } from 'ethers';
import AmbReadProvider from '../services/provider';

import erc20Abi from './erc20Abi.json';
import routerAbi from './routerAbi';
import factoryAbi from './factoryAbi';

const routerAddress = process.env.NEXT_PUBLIC_ROUTER_ADDRESS;
const airBondAddress = process.env.NEXT_PUBLIC_AIR_BOND_ADDRESS;
const sambAddress = process.env.NEXT_PUBLIC_SAMB_ADDRESS;
const factoryAddress = process.env.NEXT_PUBLIC_FACTORY_ADDRESS;

export function createRouterContract(provider = AmbReadProvider) {
  return new ethers.Contract(routerAddress, routerAbi, provider);
}

export function createFactoryContract(provider = AmbReadProvider) {
  return new ethers.Contract(factoryAddress, factoryAbi, provider);
}

export function createAirBondContract(provider = AmbReadProvider) {
  return new ethers.Contract(airBondAddress, erc20Abi, provider);
}

export function createSambContract(provider = AmbReadProvider) {
  return new ethers.Contract(sambAddress, erc20Abi, provider);
}
