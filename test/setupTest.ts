import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

afterEach(() => {
    cleanup();
})

class ResizeObserverMock {
    observe() { }
    unobserve() { }
    disconnect() { }
}

(globalThis as any).ResizeObserver = (globalThis as any).ResizeObserver || ResizeObserverMock;
(window as any).ResizeObserver = (window as any).ResizeObserver || ResizeObserverMock;

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })