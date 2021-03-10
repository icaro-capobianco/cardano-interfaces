import { Amount, Asset, Epoch, ISO8601Date } from "..";

type Wallet = {
	id: string,
	address_pool_gap: number
	balance: {
		available: Amount<'lovelace'>
	}
	assets: {
		available: Asset[]
		total: Asset[]
	}
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
	name: string
	passphrase: {
		last_updated_at: ISO8601Date
	}
	state: {
		status: string
	},
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
