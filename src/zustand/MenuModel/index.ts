import create from 'zustand';

export type StoreType = {
  isOn: boolean;
  toggle: () => void;
};

const useStore = create<StoreType>((set, get) => ({
  isOn: false,
  toggle: () => {
    set((state) => ({
      isOn: !state.isOn,
    }));
  },
}));

export {
  useStore,
};
