import { Amount, Asset, Epoch, ISO8601Date } from "..";

export type Wallet = {
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
