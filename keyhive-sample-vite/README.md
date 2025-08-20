# Keyhive Group Management Demo

This is a sample Vite + TypeScript application demonstrating basic Keyhive functionality using WebAssembly bindings. The demo showcases group creation, member addition, and member removal operations.

## Features Demonstrated

- **Group Creation**: Create a new Keyhive group
- **Adding Members**: Add members to an existing group with specified access permissions
- **Removing Members**: Remove members from a group while optionally retaining other members
- **Dual Instance Management**: Manage two separate Keyhive instances to simulate multi-user scenarios

## Prerequisites

1. **Keyhive WASM Package**: The application expects the Keyhive WASM package to be built and available at `../keyhive_wasm/pkg/`

2. **Build the WASM Package** (from the keyhive root directory):
   ```bash
   wasm-pack build ./keyhive_wasm --release --target=web
   ```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**: Navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## How to Use

### Step 1: Initialize Instance 1
- Click "Initialize Instance 1" to create the first Keyhive instance
- This instance will be used to create and manage the group

### Step 2: Initialize Instance 2 (Optional)
- Click "Initialize Instance 2" to create a second Keyhive instance
- This represents another user that can be added to/removed from the group

### Step 3: Create a Group
- Click "Create Group" to create a new group using Instance 1
- The group will initially have Instance 1 as its creator/member

### Step 4: Add Member (Demo)
- Click "Add Member (Demo)" to demonstrate the member addition API
- **Note**: This demo adds the group itself as a placeholder member because proper ContactCard→Agent conversion requires an identity exchange mechanism not implemented in this simple demo

### Step 5: Remove Member (Demo)
- Click "Remove Member (Demo)" to demonstrate the member removal API
- This uses the same placeholder approach as the addition demo

## Technical Architecture

### Key Files

- `src/keyhive.ts`: Core Keyhive wrapper and management logic
- `src/ui.ts`: User interface logic and event handling
- `src/main.ts`: Application entry point
- `vite.config.ts`: Vite configuration with WASM support

### Dependencies

- **vite-plugin-wasm**: Enables WebAssembly module loading
- **vite-plugin-top-level-await**: Allows top-level await for WASM initialization

### WASM Integration

The application uses the Keyhive WebAssembly bindings which provide:
- `Keyhive`: Main Keyhive instance for group management
- `Signer`: Cryptographic signing capabilities
- `CiphertextStore`: Storage for encrypted content
- `Group`: Group management interface
- `Access`: Permission and access control

## API Usage Examples

### Initialize Keyhive
```typescript
const signer = await Signer.generate();
const store = CiphertextStore.newInMemory();
const eventHandler = (event: any) => console.log(event);
const keyhive = await new Keyhive(signer, store, eventHandler);
```

### Create Group
```typescript
const coparents: Peer[] = []; // Initial coparents
const group = await keyhive.generateGroup(coparents);
```

### Add Member
```typescript
const contactCard = await otherKeyhive.contactCard();
const agent = contactCard; // Convert contact card to agent
const access = Access.read(); // Define access level
const result = await keyhive.addMember(agent, group, access, []);
```

### Remove Member
```typescript
const result = await keyhive.revokeMember(agent, true, group);
```

## Development Notes

- The application uses TypeScript for type safety
- All cryptographic operations are handled by the WASM module
- The demo uses in-memory storage for simplicity
- Event logging is provided for debugging and demonstration purposes

## Troubleshooting

### WASM Module Not Found
Ensure the Keyhive WASM package is built and located at `../keyhive_wasm/pkg/`. Run:
```bash
wasm-pack build ./keyhive_wasm --release --target=web
```

### Import Errors
Make sure all file extensions in imports use `.js` (not `.ts`) as required by ES modules.

### Browser Compatibility
Modern browsers with WebAssembly support are required. The application uses:
- WebAssembly
- ES Modules
- Top-level await
- Web Crypto API (when available)

## License

This demo application follows the same license as the Keyhive project (Apache 2.0).