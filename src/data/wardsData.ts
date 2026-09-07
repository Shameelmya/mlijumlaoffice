export const WARD_DATA: Record<string, string[]> = {
  "Kayamkulam Municipality": Array.from({ length: 44 }, (_, i) => `Ward ${i + 1}`),
  "Bharanikkavu Panchayath": Array.from({ length: 21 }, (_, i) => `Ward ${i + 1}`),
  "Chettikulangara Panchayath": Array.from({ length: 21 }, (_, i) => `Ward ${i + 1}`),
  "Kandalloor Panchayath": Array.from({ length: 15 }, (_, i) => `Ward ${i + 1}`),
  "Krishnapuram Panchayath": Array.from({ length: 21 }, (_, i) => `Ward ${i + 1}`),
  "Pathiyoor Panchayath": Array.from({ length: 19 }, (_, i) => `Ward ${i + 1}`),
  "Devikulangara Panchayath": Array.from({ length: 15 }, (_, i) => `Ward ${i + 1}`),
  "Other": ["General"]
};

export const LOCAL_BODIES = Object.keys(WARD_DATA);

// Pre-compute reverse mapping for fast lookups
export const WARD_TO_LOCAL_BODY: Record<string, string> = {};
Object.entries(WARD_DATA).forEach(([localBody, wards]) => {
  wards.forEach(ward => {
    WARD_TO_LOCAL_BODY[ward] = localBody;
  });
});
