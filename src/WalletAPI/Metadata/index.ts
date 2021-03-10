import { NumericalString } from ".."

export type SimpleMetadata = { string: string } | { int: number } | { bytes: string }
export type MetadataList = { list: SimpleMetadata[] }
export type MetadataMap = { map: { k : SimpleMetadata, v : SimpleMetadata }[] }
export type Metadata = {
	[ k in  NumericalString ] : Array<SimpleMetadata | MetadataList | MetadataMap>
}
