import { KeyhiveManager } from './keyhive.js';
import { Access, Group, Identifier, Individual, Peer } from '../../keyhive_wasm/pkg/keyhive_wasm.js';

export class UI {
  private managerBob: KeyhiveManager;
  private managerAlice: KeyhiveManager | null = null;
  private currentGroup: Group | null = null;
  private aliceInstance: any = null;
  private importedAgent: Individual | undefined = undefined;

  constructor() {
    this.managerBob = new KeyhiveManager();
  }

  async initialize() {
    const app = document.querySelector<HTMLDivElement>('#app')!;

    app.innerHTML = `
      <div>
        <h1>Keyhive Group Management Demo</h1>
        <div class="card">
          <p>This demo shows the process of initialising instances, creating a group, and adding a member to the group.
          The outcome of adding a member to a group is a signed delegation chain: each delegation may include a proof, which is another signed delegation.</p>
          <p>If I verify each delegation was signed by the issuer, I can prove that the delegation was issued to me, which means I can also delegate that capability.</p>
          <h2>Status</h2>
          <div id="status">Ready to start</div>
        </div>

        <div class="card">
          <h2>Alice Instance</h2>
          <div id="instance-alice-info"></div>
          <button id="init-alice-btn" disabled>Initialize Instance Alice</button>
          <div id="instance-alice-contact-card" style="display: none;">
            <h4>ContactCard Export (for sharing)</h4>
            <textarea id="contact-card-export" readonly style="width: 100%; height: 100px; font-family: monospace; font-size: 0.8em;"></textarea>
            <button id="copy-contact-card-btn">Copy ContactCard</button>
          </div>
        </div>

        <div class="card">
          <h2>Bob Instance</h2>
          <div id="instance-bob-info"></div>
          <button id="init-btn" disabled>Initialize Instance Bob</button>
          <button id="create-group-btn" disabled>Create Group</button>
          <h2>Import Contact Card (Out-of-Band)</h2>
          <div id="contact-card-exchange">
            <h4>Paste ContactCard to Import</h4>
            <textarea id="contact-card-import" placeholder="Paste the ContactCard JSON from Instance Alice here..." style="width: 100%; height: 100px; font-family: monospace; font-size: 0.8em;"></textarea>
            <button id="import-contact-card-btn" disabled>Import ContactCard</button>
            <div id="import-status" style="margin-top: 0.5rem;"></div>
          </div>
          <h2>Group Management</h2>
          <div id="group-info">No group created yet</div>
          <button id="add-member-btn" disabled>Add Imported Member to Group</button>
          <button id="remove-member-btn" disabled>Remove Member from Group</button>
          <p style="font-size: 0.9em; color: #888; margin-top: 1rem;">
            <strong>Workflow:</strong> First initialize both instances, then copy the ContactCard from Instance Alice
            and paste it in the import section. This simulates the out-of-band exchange process that would
            happen in real Keyhive applications (e.g., via QR codes, secure messaging, or in-person exchange).
          </p>
        </div>

        <div class="card">
          <h2>Logs</h2>
          <div id="logs"></div>
        </div>
      </div>
    `;

    this.setupEventListeners();
    this.log('UI initialized. Click "Initialize Instance Alice" to start.');
  }

  private setupEventListeners() {
    const initBtn = document.getElementById('init-btn')! as any;
    const initSecondBtn = document.getElementById('init-alice-btn')! as any;
    const createGroupBtn = document.getElementById('create-group-btn')!;
    const addMemberBtn = document.getElementById('add-member-btn')!;
    const removeMemberBtn = document.getElementById('remove-member-btn')!;
    const copyContactCardBtn = document.getElementById('copy-contact-card-btn')!;
    const importContactCardBtn = document.getElementById('import-contact-card-btn')!;

    initBtn.addEventListener('click', () => this.initializeInstanceBob());
    initSecondBtn.addEventListener('click', () => this.initializeInstanceAlice());
    createGroupBtn.addEventListener('click', () => this.createGroup());
    addMemberBtn.addEventListener('click', () => this.addMember());
    removeMemberBtn.addEventListener('click', () => this.removeMember());
    copyContactCardBtn.addEventListener('click', () => this.copyContactCard());
    importContactCardBtn.addEventListener('click', () => this.importContactCard());

    // Enable the init buttons
    initBtn.disabled = false;
    initSecondBtn.disabled = false;

    // Enable import button when there's text in the import textarea
    const importTextarea = document.getElementById('contact-card-import')! as HTMLTextAreaElement;
    importTextarea.addEventListener('input', () => {
      (document.getElementById('import-contact-card-btn')! as any).disabled = importTextarea.value.trim() === '';
    });
  }

  private async initializeInstanceBob() {
    try {
      this.log('Initializing Keyhive instance Bob...');
      this.updateStatus('Initializing instance Bob...');

      await this.managerBob.initialize();
      const id = this.managerBob.getKeyhiveId();

      this.log(`Instance Bob initialized with ID: ${this.decimalArrayToHexString(this.convertBufferToArray(id))}`);
      document.getElementById('instance-bob-info')!.innerHTML = `
        <strong>Instance Bob ID:</strong> ${this.decimalArrayToHexString(this.convertBufferToArray(id))}
      `;

      this.updateStatus('Instance Bob ready');
      (document.getElementById('init-alice-btn')! as any).disabled = false;
      (document.getElementById('create-group-btn')! as any).disabled = false;

    } catch (error) {
      console.error('Error initializing instance Bob:', error);
      this.log(`Error initializing instance Bob: ${error}`);
      this.updateStatus('Error initializing instance Bob');

      // Provide more specific error guidance
      if (error instanceof Error) {
        if (error.message.includes('generate')) {
          this.log('This might be a signer initialization issue. Check console for details.');
        } else if (error.message.includes('WASM')) {
          this.log('WASM module initialization failed. Make sure the WASM files are available.');
        }
      }
    }
  }

  private async initializeInstanceAlice() {
    try {
      this.log('Initializing Keyhive instance Alice...');
      this.updateStatus('Initializing instance Alice...');

      this.managerAlice = new KeyhiveManager();
      this.aliceInstance = await this.managerAlice.initialize();
      const id = this.managerAlice.getKeyhiveId();

      this.log(`Instance Alice initialized with ID: ${this.decimalArrayToHexString(this.convertBufferToArray(id))}`);
      document.getElementById('instance-alice-info')!.innerHTML = `
        <strong>Instance Alice ID:</strong> ${this.decimalArrayToHexString(this.convertBufferToArray(id))}
      `;

      // Show the ContactCard export section and populate it
      await this.showContactCardExport();

      this.updateStatus('Both instances ready');

    } catch (error) {
      this.log(`Error initializing instance Alice: ${error}`);
      this.updateStatus('Error initializing instance Alice');
    }
  }

  private decimalArrayToHexString(decimalArray: number[]): string {
    return decimalArray.map(num => '0x' + num.toString(16).padStart(2, '0')).join('');
  }

  private convertBufferToArray(buffer: Uint8Array | number[]): number[] {
    if (buffer instanceof Uint8Array) {
      return Array.from(buffer);
    }
    return buffer;
  }

  private async createGroup() {
    try {
      this.log('Creating group...');
      this.updateStatus('Creating group...');

      // If we have a second instance, create the group with both as coparents
      let coparents: Peer[] = [];
      if (this.aliceInstance) {
        // Try to create a peer from the second instance
        // This is still experimental - might not work
        this.log('Attempting to create group with second instance as coparent...');
      }

      // Create group (with coparents if available)
      this.currentGroup = await this.managerBob.createGroup(coparents);
      const groupId = this.currentGroup.id;
      const members = this.managerBob.getGroupMembers(this.currentGroup);

      // Convert group ID object to readable string
      let groupIdString = 'Unknown ID';
      if (groupId && typeof groupId === 'object') {
        if (groupId.toBytes) {
          groupIdString = this.decimalArrayToHexString(this.convertBufferToArray(groupId.toBytes()))
        } else {
          groupIdString = JSON.stringify(groupId);
        }
      } else if (typeof groupId === 'string') {
        groupIdString = groupId;
      }

      this.log(`Group created with ID: ${groupIdString}`);
      this.log(`Initial members count: ${members.length}`);

      document.getElementById('group-info')!.innerHTML = `
        <strong>Group ID:</strong> ${groupIdString}<br>
        <strong>Members:</strong> ${members.length}
        <div id="member-list">${this.formatMembers(members)}</div>
      `;

      this.updateStatus('Group created');

      // Enable add member button if we have an imported ContactCard
      if (this.importedAgent) {
        (document.getElementById('add-member-btn')! as any).disabled = false;
      }

    } catch (error) {
      this.log(`Error creating group: ${error}`);
      this.updateStatus('Error creating group');
    }
  }

  private async addMember() {
    try {
      if (!this.currentGroup) {
        this.log('No group created yet');
        return;
      }

      if (!this.importedAgent) {
        this.log('No agent imported yet. Please import a ContactCard first.');
        return;
      }

      this.log('Adding member to group...');
      this.updateStatus('Adding member...');

      this.log('Using imported Agent for member addition');
      this.log(`Adding member with ID: ${this.importedAgent.id.toBytes()}...`);

      // Convert individual to agent using the ID
      const agent = this.importedAgent.toAgent()
      console.log("agent", agent)

      // Create read access for the new member
      const access = Access.tryFromString("read");
      if (!access || !agent) {
        throw new Error("Failed to create Read access");
      }

      console.log("access", access)

      // Add member to group
      const result = await this.managerBob.addMemberToGroup(
        this.currentGroup,
        agent,
        access
      );

      this.log(`Member added successfully`);
      this.log(`Signature valid?: ${result.verify()}`)
      const delegation = result.delegation
      this.log(`Delegation (should match Alice's ID): ${delegation.delegate.toString()}`)
      this.log(`(Alice) can: ${delegation.can.toString()}`)
      const proof = delegation.proof
      if (proof) {
        this.log(`Proof signature valid?: ${proof.verify()}`)
        const proofDelegation = proof.delegation
        this.log(`Proof Delegation (should match Bob's ID): ${proofDelegation.delegate.toString()}`)
        this.log(`can: ${proofDelegation.can.toString()}`)
      } else {
        this.log('No proof')
      }

      // Update group display
      const members = this.managerBob.getGroupMembers(this.currentGroup);
      document.getElementById('member-list')!.innerHTML = this.formatMembers(members);

      this.updateStatus('Member added');
      (document.getElementById('remove-member-btn')! as any).disabled = false;

    } catch (error) {
      console.log("error", error)
      this.log('Error adding member: ' + JSON.stringify(error));
      this.updateStatus('Error adding member');
    }
  }

  private async removeMember() {
    try {
      if (!this.currentGroup || !this.managerAlice || !this.aliceInstance) {
        this.log('Group or second instance not ready');
        return;
      }

      this.log('Removing member from group...');
      this.updateStatus('Removing member...');

      // Get the contact card from the second instance
      const contactCard = await this.managerAlice.createContactCard();

      // Convert contact card to agent using the ID
      const identifier = new Identifier(contactCard.id.bytes);
      const agent = this.managerBob.keyhiveInstance?.getAgent(identifier);

      if (!agent) {
        throw new Error("Could not get agent for contact card");
      }

      // Remove member from group
      const result = await this.managerBob.removeMemberFromGroup(
        this.currentGroup,
        agent,
        true // retain other members
      );

      result.forEach(rev => this.log(`revocation subject id (should match group id): ${this.decimalArrayToHexString(this.convertBufferToArray(rev.delegation.subject_id.toBytes()))}`))

      this.log(`Member removed successfully`);

      // Update group display
      const members = this.managerBob.getGroupMembers(this.currentGroup);
      document.getElementById('member-list')!.innerHTML = this.formatMembers(members);

      this.updateStatus('Member removed');
      (document.getElementById('remove-member-btn')! as any).disabled = true;

    } catch (error) {
      this.log(`Error removing member: ${error}`);
      this.updateStatus('Error removing member');
    }
  }

  private formatMembers(members: any[]): string {
    if (members.length === 0) {
      return '<em>No members</em>';
    }

    return members.map((member, index) => {
      return `<div>Member ${index + 1}: ${member.who || 'Unknown'}</div>`;
    }).join('');
  }

  private log(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    const logs = document.getElementById('logs')!;
    logs.innerHTML += `<div>[${timestamp}] ${message}</div>`;
    logs.scrollTop = logs.scrollHeight;
    console.log(message);
  }

  private async showContactCardExport() {
    if (!this.managerAlice) return;

    try {
      const contactCardJson = await this.managerAlice.exportContactCard();
      document.getElementById('contact-card-export')!.textContent = contactCardJson;
      document.getElementById('instance-alice-contact-card')!.style.display = 'block';
      this.log('ContactCard ready for export. Copy it to share with Instance Bob.');
    } catch (error) {
      this.log(`Error exporting ContactCard: ${error}`);
    }
  }

  private async copyContactCard() {
    const textarea = document.getElementById('contact-card-export')! as HTMLTextAreaElement;
    try {
      await navigator.clipboard.writeText(textarea.value);
      this.log('ContactCard copied to clipboard!');
    } catch (error) {
      // Fallback for browsers that don't support clipboard API
      textarea.select();
      document.execCommand('copy');
      this.log('ContactCard selected. Press Ctrl+C to copy.');
    }
  }

  private async importContactCard() {
    const textarea = document.getElementById('contact-card-import')! as HTMLTextAreaElement;
    const statusDiv = document.getElementById('import-status')!;

    try {
      this.log('Importing ContactCard...');
      const contactCardJson = textarea.value.trim();

      const individual = await this.managerBob.importContactCard(contactCardJson)

      this.importedAgent = individual;
      statusDiv.innerHTML = '<span style="color: green;">✓ ContactCard imported successfully!</span>';

      this.log('ContactCard imported. You can now add this member to the group.');

      // Enable add member button if we have a group
      if (this.currentGroup) {
        (document.getElementById('add-member-btn')! as any).disabled = false;
      }

    } catch (error) {
      statusDiv.innerHTML = '<span style="color: red;">✗ Invalid ContactCard format</span>';
      this.log(`Error importing ContactCard: ${error}`);
    }
  }

  private updateStatus(status: string) {
    document.getElementById('status')!.textContent = status;
  }
}
