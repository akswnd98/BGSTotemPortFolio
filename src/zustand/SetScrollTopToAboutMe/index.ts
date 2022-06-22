import create from 'zustand';

export type StoreType = {
  setScrollTop?: () => void;
  setInterface: (setScrollTop: () => void) => void;
};

const useStore = create<StoreType>((set, get) => ({
  setScrollTop: undefined,
  setInterface: ((setScrollTop) => {
    set((state) => ({ setScrollTop }));
  }),
}));

export {
  useStore,
};
