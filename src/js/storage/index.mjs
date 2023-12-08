// This module provides functions to save, load and remove data from local storage.
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function remove(key) {
  localStorage.removeItem(key);
}
