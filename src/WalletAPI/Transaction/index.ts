import { Amount, Asset, Epoch, int, ISO8601Date, Mint } from "..";
import { Metadata } from "../Metadata";

/** @src https://input-output-hk.github.io/cardano-wallet/api/edge/#operation/getTransaction */
type Transaction = {

	id: string

	amount: Amount<'lovelace'>
	fee: Amount<'lovelace'>
	deposit: Amount<'lovelace'>

	address_pool_gap: number

	inserted_at ?: {
		absolute_slot_number: int
		slot_number: int
		epoch_number: Epoch['number']
		time: ISO8601Date
		height: Amount<'block'>
	}
	expires_at ?: {
		absolute_slot_number: int
		slot_number: int
		epoch_number: Epoch['number']
		time: ISO8601Date
	}
	pending_since ?: {
		absolute_slot_number: int
		slot_number: int
		epoch_number: Epoch['number']
		time: ISO8601Date
		height: Amount<'block'>
	}

	depth ?: Amount<'block'>

	direction: 'outgoing' | 'incoming'

	inputs: {
		id: string
		index: int
		address ?: string
		amount ?: Amount<'lovelace'>
		assets ?: Asset[]
	}
	outputs: {
		address : string
		amount : Amount<'lovelace'>
		assets ?: Asset[]
	}

	withdrawals: [
		{
			stake_address: string
			amount: Amount
		}
	]

	/**
	 * Assets minted (created) or unminted (destroyed)
	 * This amount contributes to the total transaction value.
	 * Positive values denote creation of assets and negative values denote the reverse.
	 */
	mint: Mint[]
	status: 'pending' | 'in_ledger' | 'expired'

	/**
	 * Please note that metadata provided in a transaction will be stored on the blockchain forever. Make sure not to include any sensitive data, in particular personally identifiable information (PII).
	 * More information at: https://input-output-hk.github.io/cardano-wallet/api/edge/#operation/getTransaction
 	 */
	metadata: Metadata
}

export type Type = Transaction
