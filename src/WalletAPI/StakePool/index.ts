import { Amount, float, int, ISO8601Date } from "..";

type StakePool = {
	id : string
	metrics : {
		non_myopic_member_rewards : Amount<'lovelace'>
		relative_take : Amount<'percent'>
		saturation : float
		produced_blocks : Amount<'block'>
	}
	cost : Amount<'lovelace'>
	margin : Amount<'percent'>
	pledge : Amount<'lovelace'>
	metadata ?: {
		ticker : string
		name : string
		description ?: string
		homepage : string
	}
	retirement ?: {
		epoch_number : int
		epoch_start_time : ISO8601Date
	}
	flags : string[]
}

export type Type = StakePool
