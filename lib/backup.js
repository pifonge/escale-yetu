export function createSnapshot(state) { return { generatedAt: new Date().toISOString(), state }; } export function exportJSON(data) { return JSON.stringify(data, null, 2); }
