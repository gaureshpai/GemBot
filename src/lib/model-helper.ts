export function getSelectedModel(): string {
    if (typeof window !== 'undefined') {
      const storedModel = localStorage.getItem('selectedModel');
      return storedModel || 'REST API';
    } else {
      // Default model
      return 'REST API';
    }
  }