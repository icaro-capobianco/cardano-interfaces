Streamline data types, abstracted data access methods & data validation at runtime


This is what I call data modules, works like a namespace
```typescript
import { Wallet } from 'WalletAPI'

// Type
let wallet : Wallet.Type

// Validators
Wallet.validate( wallet ).then...

// Wrappers will facilitate accessing data from those nasty schemas
const wrapped = new Wallet.Wrapper( wallet )

// ...
```
