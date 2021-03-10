/** Types based on cardano-wallet API docs
 * @src https://input-output-hk.github.io/cardano-wallet/api/edge/
 */

export type NumericalString = string
export type ISO8601Date = string
export type Amount<T extends string = string> = {
	quantity: 42000000,
	unit: T
}
export type Epoch = {
	number : string
}
export type Asset = {
	policy_id: string,
	asset_name: string,
	quantity: number
}
export type InputOutputSchema = {
	id: string,
	address: string,
	amount: Amount,
	assets: Asset[],
	index: number
}
export type Mint = {
	policy_id: string,
	asset_name: string,
	fingerprint: string,
	quantity: number
}
