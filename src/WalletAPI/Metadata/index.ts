import { int, NumericalString } from ".."
import curry from 'typed-curry'

export type String     = { string: string }
export type Int        = { int: int }
export type ByteString = { bytes: string }
export type List       = { list: Union[] }
export type Map        = { map: { k : Union, v : Union }[] }

export type Union = String | Int | ByteString | List | Map
export type Intersection = String & Int & ByteString & List & Map

export type Metadata = {
	/** All top-level keys must be integers between 0 and 2^64 - 1. */
	[ k in  NumericalString ] : Union
}

export const get = curry( ( number : keyof Metadata, metadata : Metadata ) => metadata[number] )

export const getString = curry( ( number : keyof Metadata, metadata : Metadata ) => (
	( get( number, metadata ) as String )?.string
) )
export const getInt = curry( ( number : keyof Metadata, metadata : Metadata ) => (
	( get( number, metadata ) as Int )?.int
) )
export const getBytes = curry( ( number : keyof Metadata, metadata : Metadata ) => (
	( get( number, metadata ) as ByteString )?.bytes
) )
export const getList = curry( ( number : keyof Metadata, metadata : Metadata ) => (
	( get( number, metadata ) as List )?.list
) )
export const getMap = curry( ( number : keyof Metadata, metadata : Metadata ) => (
	( get( number, metadata ) as Map )?.map
) )

export const isString = ( union : Union ) : union is String => 'string' in union
export const isInt = ( union : Union ) : union is Int => 'int' in union
export const isByteString = ( union : Union ) : union is ByteString => 'bytes' in union
export const isList = ( union : Union ) : union is List => 'list' in union
export const isMap = ( union : Union ) : union is Map => 'map' in union
export const is = ( union : Union ) => {
	if ( isString( union ) )
		return 'string'
	if ( isInt( union ) )
		return 'int'
	if ( isByteString( union ) )
		return 'bytes'
	if ( isList( union ) )
		return 'list'
	if ( isMap( union ) )
		return 'map'
	return null
}
