import { Amount, Asset, Delegation, Epoch, int, ISO8601Date } from "..";

/** @src https://input-output-hk.github.io/cardano-wallet/api/edge/#operation/getWallet */
type Wallet = {

	/** A unique identifier for the wallet */
	id : string // 40 chars

	/** Number of consecutive unused addresses allowed. */
	address_pool_gap : int // 10 .. 100000

	/** Wallet current Ada balance(s) */
	balance: {
		available: Amount<'lovelace'>
		reward: Amount<'lovelace'>
		total: Amount<'lovelace'>
	}

	/** Current non-Ada asset holdings of the wallet. */
	assets: {
		available: Asset[]
		total: Asset[]
	}

	/** Delegation settings */
	delegation: {
		active: Delegation
		next: Delegation & {
			changes_at: {
				epoch_number: Epoch['number']
				epoch_start_time: ISO8601Date
			}
		}[]
	}

	name: string // 1..255

	passphrase ?: {
		last_updated_at: ISO8601Date
	}

	/** Whether a wallet is ready to use or still syncing */
	state: {
		status: 'ready' | 'not_responding'
	} | {
		status: 'syncing'
		progress: Amount<'percent'>
	}

	/** A reference to a particular time slot, and the block height at that point. */
	tip: {
		absolute_slot_number: int
		slot_number: int
		epoch_number: Epoch['number']
		time: ISO8601Date
		height: Amount<'block'>
	}
}

export type Type = Wallet

/** TODO */
export const validate = async ( data : Wallet ) => {
	throw new Error('Method not implemented')
}
