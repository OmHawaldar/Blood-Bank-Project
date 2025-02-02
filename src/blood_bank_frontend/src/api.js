import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../declarations/blood_bank_backend";
import { canisterId } from "../../declarations/blood_bank_backend/index";

// Connect to the IC backend
const agent = new HttpAgent();
const bloodBank = Actor.createActor(idlFactory, { agent, canisterId });

export default bloodBank;
