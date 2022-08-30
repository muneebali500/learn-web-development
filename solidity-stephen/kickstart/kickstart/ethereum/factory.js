import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  `0x49E2Bb73d04EB608ccc8C83add3a957b4e4858a1`
);

export default instance;
