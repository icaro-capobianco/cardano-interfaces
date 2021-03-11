import { Amount, Asset, Epoch, ISO8601Date } from "..";

type Wallet = {

	/** A unique identifier for the wallet */
	id : string // 40 chars

	/** Number of consecutive unused addresses allowed. */
	address_pool_gap : number // 10 .. 100000

	/** Wallet current Ada balance(s) */
	balance: {
		available: Amount<'lovelace'>
	}

	/** Current non-Ada asset holdings of the wallet. */
	assets: {
		available: Asset[]
		total: Asset[]
	}

	/** Delegation settings */
	delegation: {
		active: {
			status: string
			target: string
		}
		next: {
			status: string,
			changes_at: {
				epoch_number: Epoch['number'],
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
		status: string
	},

	/** A reference to a particular time slot, and the block height at that point. */
	tip: {
		absolute_slot_number: number
		number: number
		epoch_number: Epoch['number']
		time: ISO8601Date,
		height: Amount<'block'>
	}
}

export type Type = Wallet

/** In module hand made validation, TODO */
export const validate = async ( data : Wallet ) => (
	Promise.resolve( data )
)
