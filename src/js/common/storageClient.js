//
//
// Vinh
//
//
export const storageClient = {
    set: (key, objectValue) => {
      localStorage.setItem(key, JSON.stringify(objectValue));
    },
  
    setWithExpire: (key, objectValue, ttlSeconds) => {
  
      const now = new Date();
  
      const item = {
        ...objectValue,
        expires: now.getTime() + (ttlSeconds * 1000),
      }
  
      localStorage.setItem(key, JSON.stringify(item));
    },
  
  
    get: (key) => {
      try {
        let itemStr = localStorage.getItem(key);
  
        if (!itemStr) {
          return null
        }
        const item = JSON.parse(itemStr);
        const now = new Date();
  
        if (item.expires && now.getTime() > item.expires) {
          localStorage.removeItem(key)
          return null
        }
  
        return JSON.parse(itemStr);
      } catch (e) {
        return null;
      }
    },
  
    remove: (key) => {
      localStorage.removeItem(key);
    },
  };
  