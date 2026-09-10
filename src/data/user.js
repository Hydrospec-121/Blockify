// Mock signed-in user. A future auth integration replaces this module
// with a real session/user fetch — components should only ever read
// from useUser()/useAuth(), never import this file directly.
export const mockUser = {
  id: 'usr_001',
  firstName: 'Jordan',
  lastName: 'Avery',
  email: 'jordan.avery@example.com',
  addresses: [
    {
      id: 'addr_1',
      label: 'Home',
      line1: '482 Founders Ave',
      city: 'Austin',
      region: 'TX',
      postalCode: '78701',
      country: 'US',
      isDefault: true,
    },
  ],
  wishlistProductSlugs: ['arc-desk-lamp', 'crate-modular-shelf'],
}
