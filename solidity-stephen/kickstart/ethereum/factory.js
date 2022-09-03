import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  `0x325C6EdB349beB13fEa028491C86AdBD54843bA7`
);

export default instance;
