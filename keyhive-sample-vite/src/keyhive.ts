// Import the WASM module
import init, {
  Keyhive,
  Signer,
  CiphertextStore,
  Peer,
  Group,
  Access,
  Agent,
  ContactCard,
  Identifier,
  Individual,
  SignedDelegation,
  SignedRevocation
} from '../../keyhive_wasm/pkg/keyhive_wasm.js';

export interface KeyhiveInstance {
  keyhive: Keyhive;
  signer: Signer;
  store: CiphertextStore;
}

export interface GroupInfo {
  group: Group;
  members: any[];
}

export class KeyhiveManager {
  private keyhive: Keyhive | null = null;
  private signer: Signer | null = null;
  private store: CiphertextStore | null = null;

  get keyhiveInstance(): Keyhive | null {
    return this.keyhive;
  }

  async initialize(): Promise<KeyhiveInstance> {
    try {
      // Initialize the WASM module
      await init();

      // Create a signer using static methods (the constructor approach wasn't working)
      try {
        // Try WebCrypto first (for better security in browsers that support it)
        this.signer = await Signer.generateWebCrypto();
        console.log('Using WebCrypto signer');
      } catch (e) {
        console.log('WebCrypto not available, using memory signer:', e);
        // Fallback to memory signer
        this.signer = Signer.generateMemory();
        console.log('Using memory signer');
      }

      // Verify the signer was created successfully
      if (!this.signer) {
        throw new Error('Failed to create Signer instance');
      }
      console.log('Signer created successfully:', this.signer);

      // Create an in-memory ciphertext store
      this.store = CiphertextStore.newInMemory();

      // Event handler for Keyhive events
      const eventHandler = (event: any) => {
        console.log('Keyhive event:', event);
      };

      // Create Keyhive instance
      this.keyhive = await new Keyhive(this.signer, this.store, eventHandler);

      // Debug: Check if the keyhive instance has the expected properties
      console.log('Keyhive instance created:', this.keyhive);
      console.log('Keyhive id:', this.keyhive.id);
      console.log('Keyhive idString:', this.keyhive.idString);
      console.log('Keyhive whoami:', this.keyhive.whoami);

      return {
        keyhive: this.keyhive,
        signer: this.signer,
        store: this.store
      };
    } catch (error) {
      console.error('Failed to initialize Keyhive:', error);
      throw error;
    }
  }

  getAgent(identifier: Identifier) {
    if (!this.keyhive) {
      throw new Error('Keyhive not initialized. Call initialize() first.');
    }

    return this.keyhive.getAgent(identifier);
  }

  async createGroup(coparents: Peer[] = []): Promise<Group> {
    if (!this.keyhive) {
      throw new Error('Keyhive not initialized. Call initialize() first.');
    }

    return await this.keyhive.generateGroup(coparents);
  }

  async addMemberToGroup(
    group: Group,
    memberToAdd: Agent,
    access: Access,
    otherDocs: any[] = []
  ): Promise<SignedDelegation> {
    try {
      if (!this.keyhive) {
        throw new Error('Keyhive not initialized. Call initialize() first.');
      }

      // Convert group to membered for the add operation
      const membered = group.toMembered(); // Groups implement the Membered interface

      return await this.keyhive.addMember(
        memberToAdd,
        membered,
        access,
        otherDocs
      );
    } catch (e: unknown) {
      const error = e && typeof e === "object" && "message" in e ? e.message : e
      throw new Error("addMemberToGroup issue :/" + error)
    }
  }

  async removeMemberFromGroup(
    group: Group,
    memberToRemove: Agent,
    retainOthers: boolean = true
  ): Promise<SignedRevocation[]> {
    if (!this.keyhive) {
      throw new Error('Keyhive not initialized. Call initialize() first.');
    }

    // Convert group to membered for the revoke operation
    const membered = group.toMembered(); // Groups implement the Membered interface

    return await this.keyhive.revokeMember(
      memberToRemove,
      retainOthers,
      membered as any
    );
  }

  async createContactCard(): Promise<ContactCard> {
    if (!this.keyhive) {
      throw new Error('Keyhive not initialized. Call initialize() first.');
    }

    return await this.keyhive.contactCard();
  }

  // Export ContactCard as a JSON string for sharing
  async exportContactCard(): Promise<string> {
    const contactCard = await this.createContactCard();
    return contactCard.toJson();
  }

  // Import a ContactCard from JSON string and convert to Agent
  async importContactCard(contactCardJson: string): Promise<Individual | undefined> {
    try {
      const contactCard = new ContactCard(contactCardJson);

      // For now, we'll create a simple representation
      // In a real implementation, this would properly reconstruct the ContactCard
      console.log('Imported ContactCard data:', contactCard);

      const individual = await this.keyhive?.receiveContactCard(contactCard)

      // Return null for now as we need to implement proper ContactCard reconstruction
      // This would require understanding the full serialization format
      return individual;
    } catch (error) {
      console.error('Failed to import ContactCard:', error);
      throw new Error(`Invalid ContactCard: ${error}`);
    }
  }

  getKeyhiveId(): Uint8Array<ArrayBufferLike> {
    if (!this.keyhive) {
      throw new Error('Keyhive not initialized. Call initialize() first.');
    }

    // Fallback: try to get from the id property
    const id = this.keyhive.id;
    if (id && id.bytes) {
      // Convert bytes to hex string
      return id.bytes;
    }

    // Fallback: try whoami
    return this.keyhive.whoami.bytes
  }

  getGroupMembers(group: Group): any[] {
    return group.members;
  }

  // Create a second Keyhive instance for demonstration
  async createSecondInstance(): Promise<KeyhiveInstance> {
    try {
      await init();

      // Create a signer for second instance using static methods
      let signer2: Signer;
      try {
        // Try WebCrypto first
        signer2 = await Signer.generateWebCrypto();
        console.log('Using WebCrypto signer for second instance');
      } catch (e) {
        console.log('WebCrypto not available for second instance, using memory signer:', e);
        // Fallback to memory signer
        signer2 = Signer.generateMemory();
        console.log('Using memory signer for second instance');
      }

      // Verify the signer was created successfully
      if (!signer2) {
        throw new Error('Failed to create Signer instance for second instance');
      }

      const store2 = CiphertextStore.newInMemory();

      const eventHandler2 = (event: any) => {
        console.log('Keyhive 2 event:', event);
      };

      const keyhive2 = await new Keyhive(signer2, store2, eventHandler2);

      return {
        keyhive: keyhive2,
        signer: signer2,
        store: store2
      };
    } catch (error) {
      console.error('Failed to create second Keyhive instance:', error);
      throw error;
    }
  }
}
