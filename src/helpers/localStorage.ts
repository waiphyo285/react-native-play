import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Get an item from AsyncStorage.
 * @param key The key of the item to retrieve.
 * @returns A promise that resolves to the item value or null.
 */
export const getItem = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error('Error getting item from AsyncStorage:', error);
    return null;
  }
};

/**
 * Set an item in AsyncStorage.
 * @param key The key to store the item under.
 * @param value The value to store.
 * @returns A promise that resolves when the item is set.
 */
export const setItem = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error setting item in AsyncStorage:', error);
  }
};

/**
 * Remove an item from AsyncStorage.
 * @param key The key of the item to remove.
 * @returns A promise that resolves when the item is removed.
 */
export const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item from AsyncStorage:', error);
  }
};

/**
 * Clear all data from AsyncStorage.
 * @returns A promise that resolves when the data is cleared.
 */
export const clearStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};
