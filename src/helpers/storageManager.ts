class StorageManager {
  private static emitStorageEvent(key: string, data: string): void {
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('storageChange', {
        detail: { key, data },
      });

      window.dispatchEvent(event);
    }
  }

  static setItem = (key: Required<string>, data: string) => {
    if (typeof window !== 'undefined') {
      try {
        const serializedState = JSON.stringify(data);

        localStorage.setItem(key, serializedState);
        this.emitStorageEvent(key, data); // Emit the event after setting the item
      } catch {
        // ignore write errors
      }
    }
  };

  static getItem = (key: Required<string>): string | undefined => {
    if (typeof window !== 'undefined') {
      try {
        const serializedState = localStorage.getItem(key);

        if (serializedState === null) {
          return;
        }

        return JSON.parse(serializedState);
      } catch {
        // ignore write errors
      }
    }
  };

  static removeItem = (key: Required<string>) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(key);
        this.emitStorageEvent(key, ''); // Emit the event after setting the item
      } catch {
        // ignore write errors
      }
    }
  };

  static clear = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.clear();
      } catch {
        // ignore write errors
      }
    }
  };
}

export default StorageManager;
