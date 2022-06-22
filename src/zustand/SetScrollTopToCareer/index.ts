import create from 'zustand';

export type StoreType = {
  setInterface: (setScrollTop: () => void) => void;
  setScrollTop?: () => void;
};

const useStore = create<StoreType>((set, get) => ({
  setInterface: ((setScrollTop: () => void) => {
    set((state) => ({ setScrollTop }));
  }),
  setScrollTop: undefined,
}));

export {
  useStore,
};
