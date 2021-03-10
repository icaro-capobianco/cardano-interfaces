import { Amount, Epoch, InputOutputSchema, ISO8601Date, Mint } from "..";
import { Metadata } from "../Metadata";

export type Transaction = {
	id: string,
	address_pool_gap: number,
	amount: Amount,
	fee: Amount,
	deposit: Amount,
	inserted_at: {
		absolute_slot_number: number,
		slot_number: number,
		epoch_number: Epoch['number'],
		time: ISO8601Date,
		height: Amount
	},
	expires_at: {
		absolute_slot_number: number,
		epoch_number: Epoch['number'],
		slot_number: number,
		time: ISO8601Date
	},
	pending_since: {
		absolute_slot_number: number,
		slot_number: number,
		epoch_number: Epoch['number'],
		time: ISO8601Date,
		height: Amount
	},
	depth: Amount,
	direction: string,
	inputs: InputOutputSchema[],
	outputs: InputOutputSchema[],
	withdrawals: [
		{
			stake_address: string,
			amount: Amount
		}
	],
	mint: Mint[],
	status: string,
	metadata: Metadata
}
