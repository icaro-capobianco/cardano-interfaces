
### This repo goals:

- Streamline data types (starting with TypeScript, but could also include GraphQL schemas and others)
- Abstracted functions for accessing data
- Data validation at runtime

This is what I call data modules, works like a namespace for a model

```typescript
import { Wallet } from 'WalletAPI'

// Type
let wallet : Wallet.Type

// Validators
Wallet.validate( wallet ).then...

// Wrappers will facilitate accessing data from those nasty schemas
const wrapped = new Wallet.Wrapper( wallet )
```
